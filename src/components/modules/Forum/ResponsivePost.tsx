import React, { useState, useEffect, useRef } from "react";
import { ImagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "@/components/ui/avatar";

export function ResponsivePost() {
  const profileImage: string = "/images/Ellipse-2.png";
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset the height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set it to the scroll height
    }
  }, [text]);

  return (
    <div className="h-full gap-2 border-t-[0.1875rem] border-shark-800 bg-shark-900 px-10">
      <div className="flex h-full gap-2 py-4">
        <figure>
          <Avatar className="flex h-10 w-10">
            <AvatarImage className="object-cover" src={profileImage} />
          </Avatar>
        </figure>
        <div className="flex w-full flex-col gap-2">
          <textarea
            ref={textareaRef}
            value={text}
            onChange={handleChange}
            placeholder="Let's share what you think about hairstyles ..."
            className="resize-none rounded-lg pb-1.5 pl-2.5 pr-3 pt-2 text-[0.74rem] focus:outline-none lg:w-full"
          ></textarea>
          <div className="flex gap-[0.38rem]">
            <ImagePlus color="#cdb16e" size={16} />
            <h1 className="text-xs font-medium text-white">Photo</h1>
          </div>
        </div>
        <div className="">
          <Button variant="responsive_post" size="responsive_post">
            Post
          </Button>
        </div>
      </div>
    </div>
  );
}
