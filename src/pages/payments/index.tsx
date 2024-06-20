import Breadcrumbs from "@/components/common/breadcrumbs";
import Container from "@/components/common/container";
import Heading from "@/components/common/heading";

import React from "react";

const PaymentsPage = () => {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <Heading
          title="View Payments"
          subtitle="Here you can see all the payments in your store"
        />
      </div>
      <Breadcrumbs title="Payments" />
    </Container>
  );
};

export default PaymentsPage;
