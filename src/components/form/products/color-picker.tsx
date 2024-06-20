import React, { useState } from "react";

import { productSchema } from "@/schema/productSchema";

import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";

interface TColorPickerProps {
  form: UseFormReturn<z.infer<typeof productSchema>>;
}

const ColorPicker: React.FC<TColorPickerProps> = ({ form }) => {
  const [currentColor, setCurrentColor] = useState<string>("#cb7373");

  return (
    <div className="flex items-center gap-4 w-full h-full">
      <Input
        type="color"
        className=""
        value={currentColor}
        onChange={(e) => {
          setCurrentColor(e.target.value);
          form.setValue("colour", e.target.value);
        }}
      />

      <div className="w-full space-y-2">
        <label className="text-sm font-semibold">Color Name</label>
        <Input
          placeholder="Color Name"
          value={currentColor}
          onChange={(e) => {
            setCurrentColor(e.target.value);
            form.setValue("colour", e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
