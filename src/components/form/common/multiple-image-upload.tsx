import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { uploadMultipleMedia } from "@/hooks/useMediaQuery";
import Loader from "@/loader/Loader";
import { productSchema } from "@/schema/productSchema";
import { CloudCogIcon, Plus, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import Dropzone from "react-dropzone";

interface MultipleImageUploadProps {
  form: UseFormReturn<z.infer<typeof productSchema>>;
  label: string;
}

const MultipleImageUpload: React.FC<MultipleImageUploadProps> = ({
  form,
  label,
}) => {
  const [loader, setLoader] = useState(false);

  const [, setDragOver] = useState<boolean>(false);
  const images = form.watch("media");

  const removeImage = (index: number) => {
    const updatedMedia = [...form.getValues("media")];
    updatedMedia.splice(index, 1);
    form.setValue("media", updatedMedia);
  };

  const [previewImage, setPreviewImage] = useState<string>(
    form.watch("media")?.[0]
  );

  const handleMedia = async (acceptedFiles: File[]) => {
    setLoader(true);
    const fd = new FormData();

    for (let i = 0; i < acceptedFiles.length; i++) {
      fd.append("files", acceptedFiles[i]);
    }
    fd.append("folder", "product");
    const res = await uploadMultipleMedia(fd);

    if (images?.length > 0) {
      form.setValue(
        "media",
        images.concat(res?.url?.map((url: string) => url))
      );
      setPreviewImage(res?.url?.[0]);
    } else {
      form.setValue(
        "media",
        res?.url?.map((url: string) => url)
      );
      setPreviewImage(res?.url?.[0]);
    }

    setLoader(false);
  };

  return (
    <FormField
      name={label as any}
      control={form.control}
      render={() => (
        <>
          <FormItem className="relative">
            <FormLabel className="text-lg">Upload Product Images</FormLabel>

            {!form.watch("media")?.length && !loader && (
              <Dropzone
                onDrop={(acceptedFiles) => {
                  if (acceptedFiles?.length) {
                    handleMedia(acceptedFiles);
                  }
                }}
                onDragEnter={() => setDragOver(true)}
                onDragLeave={() => setDragOver(false)}
                onDropAccepted={() => setDragOver(false)}
                onDropRejected={() => setDragOver(false)}
              >
                {({ getRootProps, getInputProps }) => (
                  <div
                    {...getRootProps()}
                    className="flex items-center justify-center w-full cursor-pointer"
                  >
                    <label className="flex flex-col w-full border-2 h-32 items-center justify-center dark:border-zinc-800 border-zinc-200 border-dashed rounded-lg cursor-pointer hover:bg-zinc-200 dark:hover:bg-neutral-800 ">
                      <div className="flex flex-col items-center justify-center pt-3">
                        <CloudCogIcon className="text-5xl" />
                        <p className="py-1 text-sm font-semibold">
                          Click here to upload
                        </p>
                        <p className="text-xs text-foreground/60">
                          Only .jpg, .jpeg, .png files are allowed
                        </p>
                      </div>
                      <input {...getInputProps()} className="hidden" />
                    </label>
                  </div>
                )}
              </Dropzone>
            )}

            {loader && <Loader />}

            <div className="flex md:flex-row flex-col items-start justify-center gap-3">
              {images !== undefined && images?.length > 0 && (
                <div className="relative h-[500px] w-full">
                  <Image
                    src={previewImage}
                    fill
                    alt="media"
                    className="rounded-lg object-cover"
                  />
                </div>
              )}

              <div
                className="
              grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-full w-full gap-3"
              >
                {images !== undefined &&
                  images?.length > 0 &&
                  images.map((media: string, index: number) => (
                    <div key={index} className="relative h-32 w-32">
                      <Image
                        src={media}
                        fill
                        alt="media"
                        className="rounded-lg object-cover"
                        onMouseEnter={() => setPreviewImage(media)}
                      />
                      <X
                        className="absolute -top-1 -right-2 cursor-pointer bg-red-500 rounded-full p-1 text-white"
                        onClick={() => removeImage(index)}
                      />
                    </div>
                  ))}
                <Dropzone
                  onDrop={(acceptedFiles) => {
                    if (acceptedFiles?.length) {
                      handleMedia(acceptedFiles);
                    }
                  }}
                  onDragEnter={() => setDragOver(true)}
                  onDragLeave={() => setDragOver(false)}
                  onDropAccepted={() => setDragOver(false)}
                  onDropRejected={() => setDragOver(false)}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()} className="cursor-pointer">
                      <label className="flex border-2 h-32 w-32 items-center justify-center dark:border-zinc-800 border-zinc-200 border-dashed rounded-lg cursor-pointer hover:bg-zinc-200 dark:hover:bg-slate-700 ">
                        <Plus className=" text-white " size={40} />

                        <input {...getInputProps()} className="hidden" />
                      </label>
                    </div>
                  )}
                </Dropzone>
              </div>
            </div>
            <FormMessage />
          </FormItem>
        </>
      )}
    />
  );
};

export default MultipleImageUpload;
