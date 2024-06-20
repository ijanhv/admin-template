import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { productSchema } from "@/schema/productSchema";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import ProductTags from "./product-tags";

interface TProductDetailsProps {
  form: UseFormReturn<z.infer<typeof productSchema>>;
}

const ProductDetails: React.FC<TProductDetailsProps> = ({ form }) => {
  return (
    <div className="form ">
      <div className="flex gap-2 items-center">
        <div className="bg-blue-400 text-white rounded-sm h-6 w-3" />
        <h3 className="text-lg font-bold">Product Details</h3>
      </div>

      <FormField
        control={form.control}
        name="colour"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Product Color</FormLabel>
            <FormControl>
              <Input placeholder="Product Color" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="details.material"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Product Material</FormLabel>
            <FormControl>
              <Input placeholder="Product Material" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="details.brand"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Product Brand</FormLabel>
            <FormControl>
              <Input placeholder="Product Brand" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <ProductTags form={form} />
    </div>
  );
};

export default ProductDetails;
