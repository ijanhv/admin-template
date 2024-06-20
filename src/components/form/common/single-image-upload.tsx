import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { uploadSingleMedia } from "@/hooks/useMediaQuery";
import { productSchema } from "@/schema/productSchema";
import { CloudCogIcon } from "lucide-react";
import React, { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

interface SingleImageUploadProps {
  form: UseFormReturn<z.infer<typeof productSchema>>;
  label: string;
}

const SingleImageUpload: React.FC<SingleImageUploadProps> = ({
  form,
  label,
}) => {
  const [loader, setLoader] = useState(false);

  const handelMedia = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoader(true);
    const fileObj = event.target.files;

    if (!fileObj) {
      return;
    }
    const fd = new FormData();

    fd.append("file", fileObj[0]);
    fd.append("folder", "product");

    const res = await uploadSingleMedia(fd);

    form.setValue("media", res.url);
    setLoader(false);
  };

  return (
    <FormField
      name={label as any}
      control={form.control}
      render={() => (
        <>
          <FormItem>
            <FormLabel>Upload File</FormLabel>

            <div className="flex items-center justify-center w-full cursor-pointer">
              <label className="flex flex-col w-full border-2 dark:border-zinc-800 border-zinc-200 border-dashed rounded-lg cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-800 ">
                <div className="flex flex-col items-center justify-center pt-3">
                  <CloudCogIcon className="text-5xl" />
                  <p className="py-1 text-sm font-semibold ">
                    Click here to upload
                  </p>
                  <p className="text-xs text-foreground/60">
                    Only .pdf, .docx, .doc files are allowed
                  </p>
                </div>
                <input
                  type="file"
                  className="h-1 mb-3 opacity-0"
                  onChange={handelMedia}
                />
              </label>
            </div>

            {loader && (
              <div className="flex items-center justify-center w-full">
                <p className="text-sm font-semibold">Uploading...</p>
              </div>
            )}
            <FormMessage />
          </FormItem>
        </>
      )}
    />
  );
};

export default SingleImageUpload;
