import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/use-auth';

interface ResponseData {
  username: string;
}

const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().refine(value => value.trim().length > 0, {
    message: 'Password is required.',
  }),
});

type FormSchemaValue = z.infer<typeof loginSchema>;

export default function SigIn() {
  const form = useForm<FormSchemaValue>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    reset,
    formState: { isSubmitting },
  } = form;

  const { login } = useAuth();
  const navigate = useNavigate();

  // Define a submit handler.
  const onSubmit: SubmitHandler<FormSchemaValue> = async data => {
    try {
      const userlogin = await login(data);

      const promise = () =>
        new Promise<{ data: ResponseData }>(resolve => setTimeout(() => resolve({ data: userlogin.data }), 2000));

      toast.promise(promise, {
        loading: 'Please wait while we authenticate you...',
        success: ({ data }: { data: ResponseData }) => {
          return data && data.username ? `Hello, ${data.username}! Welcome back to our platform.` : 'Welcome back!';
        },
        error: 'Authentication failed. Please try again.',
      });

      reset();

      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error: any) {
      const errorMessage = error?.response?.data?.error || 'An error occurred. Please try again.';
      toast.error(errorMessage);
      console.log(error);
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Email</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <section className="py-4">
            <div>
              <Button disabled={isSubmitting} type="submit" variant="auth">
                {isSubmitting ? 'Loading...' : 'Sign Up'}
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
                  Don't have an account?{' '}
                  <span className="font-semibold text-[#CDB16E] underline">
                    <Link to="/register">Sign Up</Link>
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
