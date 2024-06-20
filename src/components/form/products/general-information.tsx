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
import { useGetAllCategoriesQuery } from "@/hooks/useCategoryQuery";
import CommonSelect from "../common/select";
import { Textarea } from "@/components/ui/textarea";

interface TGeneralInformationProps {
  form: UseFormReturn<z.infer<typeof productSchema>>;
}

const GeneralInformation: React.FC<TGeneralInformationProps> = ({ form }) => {
  const { data: categories, isPending, isError } = useGetAllCategoriesQuery();

  if (isPending) return null;
  if (isError) return null;

  return (
    <div className=" form ">
      <div className="flex gap-2 items-center">
        <div className="bg-red-400 text-white rounded-sm h-6 w-3" />
        <h3 className="text-lg font-bold">General Information</h3>
      </div>

      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Product Name</FormLabel>
            <FormControl>
              <Input placeholder="Product Name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <CommonSelect
        form={form}
        options={categories.map((category) => ({
          value: category._id as string,
          label: category.name as string,
        }))}
        name="category"
        placeholder="Select Category"
        label="Product Category"
      />

      <FormField
        name="description"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <Textarea placeholder="Description" {...field} />
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default GeneralInformation;
