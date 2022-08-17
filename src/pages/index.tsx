import type { NextPage } from "next";
import { Layout } from "../components/main/Layout";
import { Header } from "../components/template/Header";
import { Welcome } from "../components/template/Welcome";

const MainPage: NextPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <Welcome />
      </Layout>
    </>
  );
};

export default MainPage;
