import React from "react";
import { productSchema } from "@/schema/productSchema";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CommonSelect from "../common/select";

interface TPricingAndStockProps {
  form: UseFormReturn<z.infer<typeof productSchema>>;
}

const PricingAndStock: React.FC<TPricingAndStockProps> = ({ form }) => {
  return (
    <div className="form">
      <div className="flex gap-2 items-center mb-4">
        <div className="bg-green-400 text-white rounded-sm h-6 w-3" />
        <h3 className="text-lg font-bold">Pricing and Stock Availability</h3>
      </div>

      <div className="grid grid-cols-3 gap-4 max-w-3xl">
        <div></div>
        <div className="text-center font-semibold">Product Price</div>
        <div className="text-center font-semibold">Sales Price</div>

        <div className="font-semibold ">Small</div>
        <FormField
          control={form.control}
          name="smallPrice"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Product Price" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="smallSalesPrice"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Sales Price" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="font-semibold">Medium</div>
        <FormField
          control={form.control}
          name="mediumPrice"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Product Price" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mediumSalesPrice"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Sales Price" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="font-semibold">Large</div>
        <FormField
          control={form.control}
          name="largePrice"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Product Price" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="largeSalesPrice"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Sales Price" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <CommonSelect
        form={form}
        options={[
          { value: "Available", label: "Available" },
          { value: "Unavailable", label: "Unavailable" },
        ]}
        name="inStock"
        placeholder=" Stock Availability"
        label="Stock Availability"
      />
    </div>
  );
};

export default PricingAndStock;
