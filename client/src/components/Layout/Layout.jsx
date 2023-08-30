import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

function Layout(props) {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "72vh" }}>{props.children}</main>
      <Toaster />
      <Footer />
    </div>
  );
}

export default Layout;
