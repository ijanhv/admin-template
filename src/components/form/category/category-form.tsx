import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { uploadSingleMedia } from "@/hooks/useMediaQuery";
import { categorySchema } from "@/schema/categorySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Sparkles, UploadCloud } from "lucide-react";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  useCreateCategoryQuery,
  useUpdateCategoryQuery,
} from "@/hooks/useCategoryQuery";
import Loader from "@/loader/Loader";

type CategoryFormValues = z.infer<typeof categorySchema>;

const CategoryForm = ({ category }: { category?: TCategory }) => {
  const { mutate: createCategory, isPending } = useCreateCategoryQuery();
  const { mutate: updateCategory } = useUpdateCategoryQuery();

  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState<boolean>(false);
  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: category,
  });

  const images = form.watch("image");

  const uploadFile = async (e: File) => {
    try {
      if (e) {
        setUploading(true);
        const fd = new FormData();

        fd.append("file", e);
        fd.append("folder", "category");
        const res = await uploadSingleMedia(fd);

        setUploading(false);
        if (images?.length > 0) {
          form.setValue("image", images.concat(res?.url));
        } else {
          form.setValue("image", [res?.url]);
        }
      }
    } catch (error) {
      setUploading(false);
      toast.error("Failed to upload file", {
        position: "top-center",
      });
    }
  };

  // Define a submit handler.
  const onSubmit = (values: CategoryFormValues) => {
    if (category) {
      updateCategory({ ...category, ...values });
    } else {
      createCategory(values);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Anime"
                      {...field}
                      disabled={uploading || isPending}
                    />
                  </FormControl>
                  <FormDescription>
                    Enter the name of the category.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label>Images</Label>
            {!uploading && (
              <div className=" rounded-xl shadow-md w-full h-full  gap-4 flex flex-col items-center justify-center">
                <Dropzone
                  onDrop={(acceptedFiles) => {
                    if (acceptedFiles?.length) {
                      uploadFile(acceptedFiles[0]);
                    }
                  }}
                  onDragEnter={() => setDragOver(true)}
                  onDragLeave={() => setDragOver(false)}
                  onDropAccepted={() => setDragOver(false)}
                  onDropRejected={() => setDragOver(false)}
                >
                  {({ getRootProps, getInputProps }) => (
                    <section
                      className={`${dragOver && "bg-foreground/30 "} hover:bg-foreground/5 w-full py-5 border-2  border-dashed  rounded-lg flex flex-col items-center justify-center cursor-pointer "`}
                    >
                      {uploading ? (
                        <div className="flex items-center gap-3 py-10 px-3">
                          <Loader2 className="animate-spin" />
                          <div>Uploading...</div>
                        </div>
                      ) : (
                        <div
                          {...getRootProps()}
                          className={`flex flex-col justify-center  items-center space-y-1 w-full h-full focus:outline-none font-medium`}
                        >
                          {!dragOver ? (
                            <>
                              <UploadCloud size={32} />
                              <p className="text-gray-500 text-base">
                                Drag and drop images here
                              </p>
                              <p className="text-gray-500 text-sm">
                                Only .pdf, .docx, .doc files are allowed
                              </p>
                            </>
                          ) : (
                            <div className="flex items-center justify-center gap-2">
                              <Sparkles size={32} />
                              <p>Drop image to upload</p>
                            </div>
                          )}
                          <input {...getInputProps()} />
                        </div>
                      )}
                    </section>
                  )}
                </Dropzone>
              </div>
            )}

            {uploading && <Loader />}
            {images?.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="relative w-24 h-24 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt="category"
                      fill
                      unoptimized
                      className="w-full h-full object-cover"
                    />
                    <Button
                      variant="secondary"
                      onClick={() => {
                        form.setValue(
                          "image",

                          images.filter((_, i) => i !== index)
                        );
                      }}
                      type="button"
                      className="absolute top-1 right-1 p-1  h-5 w-5 rounded-full"
                    >
                      <span className="text-red-500">X</span>
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Button type="submit" disabled={isPending} className="w-full">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CategoryForm;
