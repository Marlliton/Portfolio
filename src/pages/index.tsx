import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { WhoAmI } from "../components/WhoAmI";
import { ArrowDown } from "../components/icons/ArrowDown";
import { motion } from "framer-motion";

const MainPage: NextPage = () => {
  return (
    <div className="flex items-center flex-col text-gray-200 bg-[#080713] overflow-hidden">
      <Header />

      <div className="w-full h-full py-3 relative">
        <Layout>
          <Home />
        </Layout>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`
          absolute top-[40%] left-[50%] text-2xl translate-x-[-50%] 
          flex whitespace-nowrap pointer-events-none
        `}
        >
          <p>Scroll Down</p>{" "}
          <ArrowDown
            className="animate-bounce rounded-full bg-violet-900/30 mt-[3px] ml-3 p-2"
            size={40}
          />
        </motion.span>

        <Layout bgClass="bg-[#0a0918]">
          <WhoAmI />
        </Layout>
      </div>
    </div>
  );
};

export default MainPage;
