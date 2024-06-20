import Image from "next/image";
import React from "react";

const ProductDetails = ({ product }: { product: TProduct }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div className="w-full h-full flex lg:flex-row flex-col items-start gap-6">
        <div className="flex flex-row lg:flex-col gap-4">
          {product?.media?.map((image, index) => (
            <div key={index} className="w-[60px] h-[60px] relative">
              <Image
                src={image}
                alt={product?.name}
                className="object-cover rounded-md h-full w-full"
                fill
                unoptimized
              />
            </div>
          ))}
        </div>
        <div className="w-full lg:w-full h-[500px] relative">
          <Image
            src={product?.media[0]}
            alt={product?.name}
            className="object-cover rounded-lg h-full w-full"
            fill
            unoptimized
          />
        </div>
      </div>

      <div className="w-full h-full flex flex-col gap-3">
        <h3 className="text-3xl font-bold">{product.name}</h3>
        <div className="text-lg font-semibold">₹ {product.smallPrice}</div>
        {/* @ts-ignore */}
        <div className="text-sm text-gray-500">{product.category.name}</div>
        <div className="w-full">
          <span
            className={
              product.inStock === "Available"
                ? "text-sm text-green-600 bg-green-200 p-1 px-3 rounded-full"
                : "text-sm text-red-500 bg-red-50 p-1 px-3 rounded-full"
            }
          >
            {product.inStock} in stock
          </span>
        </div>

        <div className="text-lg font-semibold">Description</div>
        <p
          className="text-sm text-foreground/75"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />

        <div className="text-lg font-semibold">Details</div>
        <div className="grid grid-cols-2 gap-3">
          <div className="text-sm text-foreground">Material</div>
          <div className="text-sm text-gray-500">
            {product.details?.material}
          </div>
          <div className="text-sm text-foreground">Brand</div>
          <div className="text-sm text-gray-500">{product.details?.brand}</div>
        </div>

        <div className="text-lg font-semibold">Shipping Details</div>
        <div className="grid grid-cols-2 gap-3">
          <div className="text-sm text-foreground">Shipping Category</div>
          <div className="text-sm text-gray-500">
            {product.shippingCategory}
          </div>
          <div className="text-sm text-foreground">SKU Number</div>
          <div className="text-sm text-gray-500">{product.skuNumber}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
