import React, { useState, useRef, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import "react-quill/dist/quill.snow.css"; // Import styles
import useSWR, { mutate } from "swr";
import { useNavigate } from "react-router-dom";
import { BASE_URL_API } from "@/utility/base-url";
import { makeRequest } from "@/lib/axios";

interface ForumData {
  content: string;
  image?: FileList;
}

interface UpdateForumProps {
  forumId: string;
}

type QuillType = typeof Quill;

const fetcher = (url: string) => makeRequest.get(url).then(res => res.data);

export default function UpdateForum({ forumId }: UpdateForumProps) {
  const { data: forumData, error, isValidating } = useSWR(`/forum/${forumId}`, fetcher);

  console.log(forumData);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setValue,
  } = useForm<ForumData>();

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const navigate = useNavigate();

  const quillRef = useRef<QuillType>(null);

  useEffect(() => {
    if (quillRef.current) {
      quillRef.current
    }
  }, []);

  const onSubmit: SubmitHandler<ForumData> = async data => {
    try {
      const formData = new FormData();
      formData.append("content", data.content);
      if (data.image && data.image.length > 0) {
        formData.append("image", data.image[0]);
      }

      // Kirim data ke backend menggunakan Axios
      const response = await makeRequest.patch(`/forum/${forumId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Tanggapi respons dari backend
      console.log("Response:", response.data);

      // Tampilkan pesan sukses menggunakan toast dari 'sonner'
      toast.success("Forum updated successfully!");

      // Reset form setelah sukses mengirim data ke backend
      setValue("content", ""); 

      // Invalidate SWR cache to trigger a re-fetch
      mutate(`${BASE_URL_API}/forum/${forumId}`);

      toast.success("Forum updated successfully!");

      // Reset image preview
      setImagePreview(null);
      navigate("/forum");
    } catch (error) {
      // Tangani kesalahan jika permintaan gagal
      if (axios.isAxiosError(error)) {
        console.error("Error:", error);

        // Tampilkan pesan kesalahan menggunakan toast dari 'sonner'
        toast.error(error?.response?.data?.message);
      }
    }
  };

  useEffect(() => {
    if (forumData) {
      setValue("content", forumData.content); // Set nilai awal content dari forumData
    }
  }, [forumData, setValue]);

  const handleImagePreview = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (error) return <div>Error: {error.message}</div>;
  if (!forumData && isValidating) return <div>Loading...</div>;

  return (
    <div>
      <Toaster />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <ReactQuill
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ref={quillRef as any}
            theme="snow"
            modules={{
              toolbar: [
                [{ header: "1" }, { header: "2" }, { font: [] }],
                [{ size: [] }],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
                ["link", "image", "video"],
                ["clean"],
              ],
            }}
            placeholder="Write something..."
            value={watch("content") || ""}
            onChange={content => setValue("content", content || "")}
          />
          {errors.content && <span className="error">{errors.content.message}</span>}
        </div>
        <div className="form-group">
          <input
            type="file"
            id="image"
            {...register("image")}
            accept="image/*"
            placeholder=" "
            onChange={handleImagePreview}
          />
          {errors.image && <span className="error">{errors.image.message}</span>}
        </div>
        <div style={{ margin: "20px 0" }}>
          <h1 className="mb-4 text-3xl font-bold text-gray-900">Image Preview</h1>

          {imagePreview ? (
            <img src={imagePreview} alt="Image Preview" className="h-64 w-64 rounded-lg object-cover" />
          ) : (
            <img width={200} height={200} src={forumData.image} alt="" />
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
        >
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
