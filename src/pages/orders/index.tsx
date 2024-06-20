import Breadcrumbs from "@/components/common/breadcrumbs";
import Container from "@/components/common/container";
import Heading from "@/components/common/heading";

import React from "react";

const OrdersPage = () => {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <Heading
          title="View Orders"
          subtitle="Here you can see all the products in your store"
        />

      </div>
      <Breadcrumbs title="Orders" />


    </Container>
  );
};

export default OrdersPage;
