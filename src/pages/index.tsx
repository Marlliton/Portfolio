import type { NextPage } from "next";
import { Layout } from "../components/main/Layout";
import { About } from "../components/template/About";
import { Footer } from "../components/template/footer";
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
      <Footer />
    </>
  );
};

export default MainPage;
