import React from "react";
import { productSchema } from "@/schema/productSchema";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import CommonSelect from "../common/select";

interface TShippingDetailsProps {
  form: UseFormReturn<z.infer<typeof productSchema>>;
}

const ShippingDetails: React.FC<TShippingDetailsProps> = ({ form }) => {
  return (
    <div className="form">
      <div className="flex gap-2 items-center">
        <div className="bg-cyan-400 text-white rounded-sm h-6 w-3" />
        <h3 className="text-lg font-bold">Shipping Details</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <FormField
          control={form.control}
          name="shippingCategory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Shipping Category</FormLabel>
              <FormControl>
                <Input placeholder="Shipping Category" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="skuNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>SKU Number</FormLabel>
              <FormControl>
                <Input placeholder="SKU Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* <FormField
          control={form.control}
          name="reference"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reference</FormLabel>
              <FormControl>
                <Input placeholder="Reference" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        {/* <FormField
          control={form.control}
          name="referenceOrigin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reference Origin</FormLabel>
              <FormControl>
                <Input placeholder="Reference Origin" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        <CommonSelect
          form={form}
          options={[
            { value: "Yes", label: "Yes" },
            { value: "No", label: "No" },
          ]}
          name="doNotShip"
          placeholder="Ship / Not Ship"
          label="Ship / Not Ship"
        />

        <CommonSelect
          form={form}
          options={[
            { value: "Yes", label: "Yes" },
            { value: "No", label: "No" },
          ]}
          name="doNotTrackStock"
          placeholder="Track Stock"
          label="Track Stock"
        />

        <FormField
          control={form.control}
          name="weight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Weight</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Weight" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="unitOfWeight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Unit of Weight</FormLabel>
              <FormControl>
                <Input placeholder="Unit of Weight" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="piecesPerPack"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pieces Per Pack</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Pieces Per Pack" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name="tariffNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tariff Number</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Tariff Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <FormField
          control={form.control}
          name="shipping_charges"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Shipping Charges</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Shipping Charges"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="giftwrap_charges"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Giftwrap Charges</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Giftwrap Charges"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="transaction_charges"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Transaction Charges</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Transaction Charges"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gst_charges"
          render={({ field }) => (
            <FormItem>
              <FormLabel>GST Charges</FormLabel>
              <FormControl>
                <Input type="number" placeholder="GST Charges" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default ShippingDetails;
