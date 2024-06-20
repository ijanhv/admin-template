import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import React from "react";
import { ChevronsUpDown } from "lucide-react";

import { Label } from "../../ui/label";
import { tags } from "@/utils/data";
import { productSchema } from "@/schema/productSchema";

const ProductTags = ({
  form,
}: {
  form: UseFormReturn<z.infer<typeof productSchema>>;
}) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const selectedTags = tags?.filter((tag) => form.watch("tags")?.includes(tag));

  return (
    <div className="h-full  space-y-5  rounded-lg">
      <FormLabel>Tags</FormLabel>
      <FormField
        control={form.control}
        name="tags"
        render={() => (
          <FormItem>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger type="button" asChild>
                <Button
                  type="button"
                  role="combobox"
                  aria-expanded={open}
                  className="justify-between border text-foreground  border-gray-100 dark:border-neutral-800 w-full py-2 md:py-6  px-1 bg-background hover:bg-background"
                >
                  {selectedTags?.length > 0 && selectedTags?.length <= 4 ? (
                    <div className="flex gap-2 ">
                      {selectedTags?.map((el, i) => (
                        <div
                          key={i}
                          className="text-xs  p-0.5 md:p-1  rounded border-2 border-gray/40 border-dashed"
                        >
                          <p>{el}</p>
                        </div>
                      ))}
                    </div>
                  ) : selectedTags.length > 4 ? (
                    <div className="flex gap-2 ">
                      <p>{selectedTags.length} tags selected</p>
                    </div>
                  ) : (
                    selectedTags?.length === 0 && (
                      <p className="text-gray-400 text-base">Select tags...</p>
                    )
                  )}
                  <ChevronsUpDown className="w-4 h-4  opacity-50 shrink-0" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0 w-[100%] " align="start">
                <Command>
                  <CommandInput placeholder="Search tags..." />
                  <CommandList>
                    <CommandEmpty>No tags found.</CommandEmpty>
                    <CommandGroup>
                      {tags?.map((tag) => (
                        <CommandItem
                          className="flex items-center gap-3"
                          key={tag}
                          value={tag}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? "" : (tag as string)
                            );
                            //   setOpen(false);
                          }}
                        >
                          <Checkbox
                            className=""
                            id={tag}
                            checked={form.watch("tags")?.includes(tag)}
                            onCheckedChange={(isChecked) => {
                              const currentTags = form.getValues("tags") || [];

                              if (isChecked) {
                                form.setValue("tags", [...currentTags, tag]);
                              } else {
                                const removed = currentTags.filter(
                                  (item) => item !== tag
                                );
                                form.setValue("tags", removed);
                              }
                            }}
                          />

                          <Label htmlFor={tag} className="flex-1 text-xs">
                            {tag}
                          </Label>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex gap-3 items-center flex-wrap">
        {selectedTags?.map((el, i) => (
          <div
            key={i}
            className="flex text-xs  gap-3 rounded-lg bg-primary text-background   p-1 lg:flex-row"
          >
            {el}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTags;
