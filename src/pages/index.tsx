import type { NextPage } from "next";
import { Layout } from "../components/main/Layout";
import { Header } from "../components/template/Header";

const MainPage: NextPage = () => {
  return (
    <>
      <Header />
      <Layout>
        content
      </Layout>
    </>
  );
};

export default MainPage;
