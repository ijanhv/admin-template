import Breadcrumbs from "@/components/common/breadcrumbs";
import Container from "@/components/common/container";
import Heading from "@/components/common/heading";

import React from "react";

const CustomersPage = () => {
  return (
    <Container>
      <Heading
        title="View Customers"
        subtitle="Here you can see all the customers in your store"
      />

      <Breadcrumbs title="Customers" />

     
    </Container>
  );
};

export default CustomersPage;
