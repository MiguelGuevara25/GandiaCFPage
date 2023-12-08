import Layout from "@/components/Layout/Layout";
import LoginWrapper from "@/components/LoginWrapper/LoginWrapper";
import context from "@/context/context";
import React, { useContext } from "react";

const PageLogin = () => {
  const { prueba } = useContext(context);
  console.log(prueba);

  return (
    <Layout pageTitle="Login">
      <LoginWrapper />
    </Layout>
  );
};

export default PageLogin;
