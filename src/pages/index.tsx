import type { NextPage } from "next";
import { Layout } from "../components/main/Layout";
import { About } from "../components/template/About";
import { Projects } from "../components/template/Projects";
import { Welcome } from "../components/template/Welcome";

const MainPage: NextPage = () => {
  return (
    <>
      <Layout>
        <Welcome />
        <About />
        <Projects />
      </Layout>
    </>
  );
};

export default MainPage;
