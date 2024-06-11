import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { makeRequest } from "@/lib/axios";

interface ResponseData {
  message: string;
  newUserReg: { uid: string; username: string }[];
}

const formSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters").max(20, "Username cannot exceed 20 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormSchemaValue = z.infer<typeof formSchema>;

export default function SignUp() {
  // 1. Define your form.
  const form = useForm<FormSchemaValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const {
    reset,
    formState: { isSubmitting },
  } = form;

  const navigate = useNavigate();

  // 2. Define a submit handler.
  const onSubmit: SubmitHandler<FormSchemaValue> = async data => {
    try {
      const newUserReq = await makeRequest.post("/auth/register", data);

      const promise = () =>
        new Promise<{ data: ResponseData }>(resolve => setTimeout(() => resolve({ data: newUserReq.data }), 2000));

      toast.promise(promise, {
        loading: "Waiting minute....",
        success: ({ data }: { data: ResponseData }) => {
          return data && data.newUserReg && data.newUserReg.length > 0
            ? `Hello ${data.newUserReg[0].username}, your account has been created successfully!`
            : "Your account has been created successfully!";
        },
        error: "Error",
      });

      reset();

      setTimeout(() => {
        navigate(`/verify-email/${newUserReq.data.newUserReg[0].uid as ResponseData}`);
      }, 2000);
    } catch (error: any) {
      const errorMessage = error?.response?.data?.error || "An error occurred. Please try again.";
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Username</FormLabel>
                <FormControl>
                  <Input placeholder="create your username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Email</FormLabel>
                <FormControl>
                  <Input placeholder="youremail@gmai.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Password</FormLabel>
                <FormControl>
                  <Input placeholder="*******" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <section className="py-4">
            {/* <Button type="submit">Submit</Button> */}
            <div>
              <Button disabled={isSubmitting} type="submit" variant="auth">
                {isSubmitting ? "Loading..." : "Sign Up"}
              </Button>
              <Link to="/profile">
                <Button variant="auth-google">
                  <img src="src/assets/img/Google.png" alt="" className="mr-2 h-6" />
                  <span>Continue with Google</span>
                </Button>
              </Link>
            </div>
            <div className="py-4">
              <div className="text-center">
                <p className="text-base font-normal">
                  Already have an account?{" "}
                  <span className="font-semibold text-[#CDB16E] underline">
                    <Link to="/login">Sign in</Link>
                  </span>
                </p>
              </div>
            </div>
          </section>
        </form>
      </Form>
      <Toaster />
    </>
  );
}

const FormFields = ({ data, form }: { data: any; form: any }) => {
  return (
    <FormField
      control={form.control}
      name={data}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{data.toUpperCase()}</FormLabel>
          <FormControl>
            <Input placeholder={data} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
