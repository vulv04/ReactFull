import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import ServiceFeatures from "../components/ServiceFeatures";
import SearchBarWithTags from "../components/SearchBarWithTags";

const ClientLayout = () => {
  return (
    <>
      <Header />
      <main>
        
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default ClientLayout;
