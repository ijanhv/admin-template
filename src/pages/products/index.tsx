import Breadcrumbs from "@/components/common/breadcrumbs";
import Container from "@/components/common/container";
import Heading from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";

const ProductsPage = () => {


  return (
    <Container>
      <div className="flex items-center justify-between w-full">
        <Heading
          title="View Products"
          subtitle="Here you can see all the products in your store"
        />
        <Link href="/products/add">
          <Button className="text-sm ">Add Product</Button>
        </Link>
      </div>
      <Breadcrumbs title="Products" />


    </Container>
  );
};

export default ProductsPage;

export const getServerSideProps = (async (context) => {
  return { props: {} };
}) satisfies GetServerSideProps<{}>;
