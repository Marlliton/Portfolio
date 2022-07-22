import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { WhoAmI } from "../components/WhoAmI";
import { ArrowDown } from "../components/icons/ArrowDown";
import { motion } from "framer-motion";
import { useRef } from "react";

const MainPage: NextPage = () => {
  function test(ref: any) {
    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <div className="h-screen relative flex items-center flex-col text-gray-200 bg-[#080713] overflow-hidden">
      <Header />
      <div className="h-full scroll-smooth scrollbar overflow-y-scroll overflow-x-hidden w-full">
        <Layout>
          <Home />
        </Layout>

        <Layout bgClass="bg-[#0a0918]">
          <WhoAmI scroll={test} />
        </Layout>
      </div>
    </div>
  );
};

export default MainPage;
