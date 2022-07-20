import type { NextPage } from "next";
import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { Home } from "../components/Home";

const MainPage: NextPage = () => {

  return (
    <div className="flex items-center h-screen flex-col text-gray-200 bg-[#080713] overflow-hidden">
      <Header />

      <div className="overflow-scroll w-full h-full py-3">
        <Layout>
          <Home />
        </Layout>
      </div>
    </div>
  );
};

export default MainPage;
