import ComingSoonSection from "@/components/ComingSoonSection/ComingSoonSection";
import HeaderOne from "@/components/Header/HeaderOne";
import Layout from "@/components/Layout/Layout";
import React from "react";

const ComingSoon = () => {
  return (
    <Layout pageTitle="Coming Soon Page">
      <HeaderOne />
      <ComingSoonSection />
    </Layout>
  );
};

export default ComingSoon;
