import Container from "@/components/common/container";
import Heading from "@/components/common/heading";
import Dashboard from "@/components/dashboard";

import React from "react";

export default function DashboardPage() {
  return (
    <Container>
      <Heading
        title="Welcome"
        subtitle="
        Here you can see the overview of your store
      "
      />
      <Dashboard />
    </Container>
  );
}
