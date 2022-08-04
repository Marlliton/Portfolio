import type { NextPage } from "next";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { Layout } from "../components/Layout";
import { WhoAmI } from "../components/WhoAmI";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

const MainPage: NextPage = () => {
  return (
    <div className="h-screen relative flex items-center flex-col text-gray-300 bg-[#080713] overflow-hidden">
      <Header />
      <div className="h-full scroll-smooth scrollbar overflow-y-scroll overflow-x-hidden w-full">
        <Layout className="h-[95%]">
          <Home />
        </Layout>

        <Layout className="bg-[#0a0918] h-full md:h-[80%]">
          <WhoAmI />
        </Layout>

        <Layout className="md:h-[70%]">
          <Projects />
        </Layout>

        <Layout className="md:h-[80%] bg-[#0a0918]">
          <Skills />
        </Layout>
      </div>
    </div>
  );
};

export default MainPage;
