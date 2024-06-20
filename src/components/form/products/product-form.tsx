import { productSchema } from "@/schema/productSchema";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/ui/form";

import ProductMedia from "./product-media";
import GeneralInformation from "./general-information";
import ProductDetails from "./product-details";
import PricingAndStock from "./pricing-stock";
import ShippingDetails from "./shipping-details";
import { Button } from "@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import { steps } from "@/utils/data";
import {
  useCreateProductQuery,
  useUpdateProductQuery,
} from "@/hooks/useProductQuery";
import {
  useCreateCustomProductQuery,
  useUpdateCustomProductQuery,
} from "@/hooks/useCustomProductQuery";

type Inputs = z.infer<typeof productSchema>;

const ProductForm = ({
  product,
  type,
}: {
  product?: TProduct | null;
  type?: string;
}) => {
  const { mutate: createProduct } = useCreateProductQuery();
  const { mutate: createCustomProduct } = useCreateCustomProductQuery();
  const { mutate: updateProduct } = useUpdateProductQuery(
    product?._id as string
  );
  const { mutate: updateCustomProduct } = useUpdateCustomProductQuery(
    product?._id as string
  );

  // eslint-disable-next-line no-unused-vars
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      ...product,

      doNotShip: product?.doNotShip ? "Yes" : "No",
      doNotTrackStock: product?.doNotTrackStock ? "Yes" : "No",
      // @ts-ignore
      category: product?.category._id as string,
    },
  });

  const { trigger } = form;

  type FieldName = keyof Inputs;

  const next = async () => {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
      }
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  function onSubmit(values: z.infer<typeof productSchema>) {
    if (type === "custom") {
      if (!product) {
        createCustomProduct({
          ...values,
          doNotShip: values.doNotShip === "true" ? true : false,
          doNotTrackStock: values.doNotTrackStock === "true" ? true : false,
          category: values.category,
        });
      } else {
        updateCustomProduct({
          ...values,
          _id: product._id,
          doNotShip: values.doNotShip === "true" ? true : false,
          doNotTrackStock: values.doNotTrackStock === "true" ? true : false,
          category: values.category,
        });
      }
    } else {
      if (!product) {
        createProduct({
          ...values,
          doNotShip: values.doNotShip === "true" ? true : false,
          doNotTrackStock: values.doNotTrackStock === "true" ? true : false,
          category: values.category,
        });
      } else {
        updateProduct({
          ...values,
          _id: product._id,
          doNotShip: values.doNotShip === "true" ? true : false,
          doNotTrackStock: values.doNotTrackStock === "true" ? true : false,
          category: values.category,
        });
      }
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full  ">
        <nav aria-label="Progress">
          <ol
            role="list"
            className="space-y-4 md:flex md:space-x-8 md:space-y-0 mb-10"
          >
            {steps.map((step, index) => (
              <li key={step.name} className="md:flex-1">
                <div
                  className={`flex w-full cursor-pointer flex-col border-l-4 border-t-0 md:border-l-0 md:border-t-4 ${
                    currentStep > index
                      ? "border-primary"
                      : currentStep === index
                        ? "border-primary"
                        : ""
                  } py-2 pl-4 ${
                    currentStep === index
                      ? "border-l-4 border-t-0 md:border-l-0 md:border-t-4  md:pb-0 md:pl-0 md:pt-4"
                      : ""
                  }`}
                >
                  <span
                    className={`text-sm font-medium ${
                      currentStep > index
                        ? "text-primary"
                        : currentStep === index
                          ? "text-primary"
                          : "text-gray-500"
                    }`}
                  >
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              </li>
            ))}
          </ol>
        </nav>
        {currentStep === 0 && <GeneralInformation form={form} />}

        {currentStep === 1 && <ProductDetails form={form} />}

        {currentStep === 2 && <ProductMedia form={form} />}

        {currentStep === 3 && <PricingAndStock form={form} />}

        {currentStep === 4 && <ShippingDetails form={form} />}

        <div className="flex items-center gap-3 my-3">
          <Button type="button" onClick={prev} disabled={currentStep === 0}>
            <MoveLeft size={24} />
          </Button>
          <Button
            type="button"
            onClick={next}
            disabled={currentStep === steps.length - 1}
          >
            <MoveRight size={24} />
          </Button>
        </div>

        {currentStep === steps.length - 1 && (
          <div className="text-center">
            <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
              Submit
            </Button>
          </div>
        )}
      </form>
    </Form>
  );
};

export default ProductForm;
