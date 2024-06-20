import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { UseFormReturn } from "react-hook-form";
import { productSchema } from "@/schema/productSchema";
import { z } from "zod";

interface TSelectProps {
  form: UseFormReturn<z.infer<typeof productSchema>>;
  options: {
    value: any;
    label: string;
  }[];
  name: string;
  placeholder: string;
  label: string;
}

const CommonSelect: React.FC<TSelectProps> = ({
  form,
  options,
  name,
  placeholder,
  label,
}) => {
  return (
    <FormField
      control={form.control}
      name={name as any}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value as string}
          >
            <FormControl>
              <SelectTrigger className="w-auto mr-4">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CommonSelect;
