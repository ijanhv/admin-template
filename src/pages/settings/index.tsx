import Breadcrumbs from "@/components/common/breadcrumbs";
import Container from "@/components/common/container";
import Heading from "@/components/common/heading";
import { Button } from "@/components/ui/button";
import React from "react";

const SettingsPage = () => {
  return (
    <Container>
      <div className="flex items-center justify-between w-full">
        <Heading
          title="View Settings"
          subtitle="Here you can see all the settings in your store"
        />

        <Button className="text-sm ">Edit Settings</Button>
      </div>
      <Breadcrumbs title="Settings" />
    </Container>
  );
};

export default SettingsPage;
