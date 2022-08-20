import type { NextPage } from "next";
import { Layout } from "../components/main/Layout";
import { About } from "../components/template/About";
import { Header } from "../components/template/Header";
import { Welcome } from "../components/template/Welcome";

const MainPage: NextPage = () => {
  return (
    <>
      {/* <Header /> */}
      <Layout>
        <Welcome />
        <About />
      </Layout>
    </>
  );
};

export default MainPage;
