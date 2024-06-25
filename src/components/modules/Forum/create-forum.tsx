import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import React, { useState, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Toaster, toast } from "sonner";
import { mutate } from "swr";
import { BASE_URL_API } from "@/utility/base-url";
// import { makeRequest } from "@/lib/axios";
import axios from "axios";

const schema = z.object({
  content: z.string().min(6, { message: "Min 6" }).max(1000, { message: "Max 1000" }),
  image: z.array(z.instanceof(File)).optional(),
});

type FormValues = z.infer<typeof schema>;

export default function CreateForum() {
  const { currentUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const quillRef = useRef<ReactQuill>(null);

  // const onSubmit: SubmitHandler<FormValues> = async data => {
  //   try {
  //     const formData = new FormData();

  //     if (data.image) {
  //       formData.append("image", data.image[0]); // Check if data.image[0] is not undefined
  //     }
  //     formData.append("content", data.content);

  //     // Kirim data ke backend menggunakan Axios
  //     const response = await axios.post(`${BASE_URL_API}/forum`, formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //       withCredentials: true,
  //     });

  //     // Tanggapi respons dari backend
  //     console.log("Response:", response.data);

  //     // Tampilkan pesan sukses menggunakan toast dari 'sonner'
  //     toast.success("Forum created successfully!");

  //     mutate(`${BASE_URL_API}/forum?withUser=true`);

  //     // Reset form setelah sukses mengirim data ke backend
  //     reset();
  //     setImagePreview(null);
  //   } catch (error) {
  //     // Tangani kesalahan jika permintaan gagal
  //     console.error("Error:", error);

  //     // Tampilkan pesan kesalahan menggunakan toast dari 'sonner'
  //     toast.error("Failed to create forum. Please try again.");
  //   }
  // };

  const onSubmit: SubmitHandler<FormValues> = async data => {
    try {
      const formData = new FormData();
      if (data.image && data.image.length > 0) {
        formData.append("image", data.image[0]);
      }
      formData.append("content", data.content);

      const response = await axios.post(`${BASE_URL_API}/forum`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      console.log("Response:", response.data);

      toast.success("Forum created successfully!");

      mutate(`${BASE_URL_API}/forum?withUser=true`);

      reset();
      setImagePreview(null);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to create forum. Please try again.");
    }
  };

  const handleImagePreview = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log("Selected file:", file); // Debug: cek file yang dipilih
    if (file) {
      setValue("image", [file]); // Pastikan data.image diatur sebagai array dengan satu file
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div id="create-forum">
      <Toaster />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inline-flex w-full justify-center">
          <div className="lg:item-center w-full truncate border-t-[0.1875rem] border-shark-800 py-6 pl-16 pr-4 shadow-lg lg:w-[47.5rem] lg:justify-center lg:gap-2.5 lg:rounded-[0.625rem] lg:border-none   lg:px-0 xl:flex xl:px-0">
            <div className="flex w-full gap-2 px-0 lg:px-10">
              <div>
                <Avatar className="flex h-10 w-10">
                  <AvatarImage className="rounded-full object-cover" src={currentUser?.photo_url} />
                </Avatar>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col gap-4">
                  <ReactQuill
                    className="text-black placeholder:text-slate-400"
                    ref={quillRef}
                    theme="snow"
                    modules={{
                      toolbar: [
                        [{ header: "1" }, { header: "2" }],
                        [{ size: [] }],
                        ["bold", "italic", "underline"],
                        [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
                        ["link"],
                        ["clean"],
                      ],
                    }}
                    // placeholder="Write something..."
                    value={watch("content")}
                    onChange={content => setValue("content", content)}
                  />
                  {errors.content && <span className="error">{errors.content.message}</span>}
                  <div className="input-wrapper">
                    {/* Hidden input */}
                    <input
                      type="file"
                      id="image"
                      {...register("image")}
                      accept="image/*"
                      className="hidden"
                      onChange={handleImagePreview}
                    />
                    {/* Label dengan ikon */}
                    <label
                      htmlFor="image"
                      className="file-input-label flex cursor-pointer items-center space-x-2 hover:text-green-300"
                    >
                      <img
                        width="30"
                        height="30"
                        src="https://img.icons8.com/external-thin-kawalan-studio/96/external-images-multimedia-thin-kawalan-studio.png"
                        alt="external-images-multimedia-thin-kawalan-studio"
                      />
                      <span className="text-black">Choose image</span>
                    </label>
                    {/* Handling error */}
                    {errors.image && <span className="error">{errors.image.message}</span>}
                  </div>
                  {/* <a href="#">
                    <div className="flex items-center gap-[0.38rem]">
                      <ImagePlus color="#cdb16e" size={iconSize} />
                      <h1 className="text-sm font-bold text-white lg:text-lg">Photo</h1>
                    </div>
                  </a> */}

                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      style={{
                        maxWidth: "100%",
                        width: "300px",
                        height: "300px",
                        objectFit: "cover",
                        objectPosition: "top center",
                      }}
                    />
                  )}
                </div>
              </div>
              <div className="flex items-start">
                <Button type="submit" disabled={isSubmitting} variant="post" size="post">
                  {isSubmitting ? "Loading..." : "Submit"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
