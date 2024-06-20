
import Breadcrumbs from "@/components/common/breadcrumbs";
import Container from "@/components/common/container";
import Heading from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import { GetServerSideProps } from "next";
import React from "react";

const CategoryPage = () => {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <Heading
          title="View All Categories"
          subtitle="Here you can see all the categories in your store"
        />

        <Button>
          Add Category
        </Button>
      </div>
      <Breadcrumbs title="Categories" />

      
    </Container>
  );
};

export default CategoryPage;

export const getServerSideProps = (async (context) => {
  return { props: {} };
}) satisfies GetServerSideProps<{}>;
