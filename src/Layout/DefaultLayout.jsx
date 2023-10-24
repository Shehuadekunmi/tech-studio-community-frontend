import React from "react";
import Header2 from "../Components/Header2";
import Footer from "../Components/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header2 />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
