import { productSchema } from "@/schema/productSchema";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import MultipleImageUpload from "../common/multiple-image-upload";

interface TProducMediaProps {
  form: UseFormReturn<z.infer<typeof productSchema>>;
}

const ProductMedia: React.FC<TProducMediaProps> = ({ form }) => {
  return (
    <div className="form">
      <div className="flex gap-2 items-center">
        <div className="bg-indigo-400 text-white rounded-sm h-6 w-3" />
        <h3 className="text-lg font-bold">Product Images</h3>
      </div>

      <MultipleImageUpload form={form} label="media" />
    </div>
  );
};

export default ProductMedia;
