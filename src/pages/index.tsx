import type { NextPage } from "next";
import { Layout } from "../components/main/Layout";
import { Header } from "../components/template/Header";

const MainPage: NextPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <div className="h-screen">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat sapiente, natus alias labore voluptatem praesentium et voluptatum laborum eos placeat! Ut ratione laudantium aut, maxime in id ipsam sequi totam!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat sapiente, natus alias labore voluptatem praesentium et voluptatum laborum eos placeat! Ut ratione laudantium aut, maxime in id ipsam sequi totam!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat sapiente, natus alias labore voluptatem praesentium et voluptatum laborum eos placeat! Ut ratione laudantium aut, maxime in id ipsam sequi totam!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat sapiente, natus alias labore voluptatem praesentium et voluptatum laborum eos placeat! Ut ratione laudantium aut, maxime in id ipsam sequi totam!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat sapiente, natus alias labore voluptatem praesentium et voluptatum laborum eos placeat! Ut ratione laudantium aut, maxime in id ipsam sequi totam!
        </div>
        <div className="h-screen"></div>
      </Layout>
    </>
  );
};

export default MainPage;
