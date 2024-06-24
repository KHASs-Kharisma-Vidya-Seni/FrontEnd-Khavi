import { useState } from "react";
import { mutate } from "swr";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Toaster, toast } from "sonner";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useAuth } from "@/hooks/use-auth";
import { makeRequest } from "@/lib/axios";
import { BASE_URL_API } from "@/utility/base-url";

const userformSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters").max(20, "Username cannot exceed 20 characters"),
  email: z.string().email("Invalid email address").optional(),
  password: z.string().min(6, "Password must be at least 6 characters").optional(),
  image: z.any().optional(),
});

type FormSchemaValue = z.infer<typeof userformSchema>;

export const UpdateProfile = () => {
  const { currentUser } = useAuth();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const form = useForm<FormSchemaValue>({
    resolver: zodResolver(userformSchema),
    defaultValues: {
      username: currentUser?.username || "",
      image: null,
    },
  });

  const {
    formState: { isSubmitting },
    setValue,
  } = form;

  const onSubmit: SubmitHandler<FormSchemaValue> = async data => {
    try {
      const formData = new FormData();
      formData.append("username", data.username);

      if (data.image instanceof File) {
        formData.append("image", data.image);
      }

      const response = await makeRequest.patch(`/users/${currentUser?.uid}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Response:", response.data);

      mutate(`${BASE_URL_API}/current-user`);

      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating user:", currentUser?.uid);
      console.error("Error updating user:", error);

      toast.error("Failed to update profile. Please try again.");
    }
  };

  const handleImagePreview = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setValue("image", file); // Set file in form state
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Toaster />
      <Form {...form}>
        <div className="flex flex-col gap-y-10">
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex items-center gap-x-6">
              <Avatar className="h-24 w-24 rounded-full shadow-md">
                <AvatarImage
                  className="h-full w-full rounded-full object-cover"
                  src={imagePreview || currentUser?.photo_url}
                />
                <AvatarFallback className="flex items-center justify-center rounded-full bg-gray-800 text-white">
                  {currentUser?.username?.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div>
                <h1 className="text-2xl font-bold">{currentUser?.username}</h1>
                <p className="text-gray-400">Pekalongan, Indonesia</p>
              </div>
            </div>
            <div className="py-4">
              <div>
                <section className="grid grid-cols-2 gap-10">
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
                    name="image"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg">Image</FormLabel>
                        <FormControl>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={event => {
                              handleImagePreview(event);
                              field.onChange(event.target.files?.[0] || null); // Update form field value
                            }}
                            className="block w-full text-sm text-gray-500
                      file:mr-4 file:rounded-full file:border-0
                      file:bg-gray-800 file:px-4
                      file:py-2 file:text-sm
                      file:font-semibold file:text-white
                      hover:file:bg-gray-700"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="space-y-5"></div>
                </section>
                <section className="py-4">
                  <Button type="submit" variant="update" size="xl" disabled={isSubmitting}>
                    {isSubmitting ? "Loading..." : "Update"}
                  </Button>
                </section>
              </div>
            </div>
          </form>
        </div>
      </Form>
    </>
  );
};
