import React from "react";
import Footer from "./footer";
import Header from "./header";
interface Ipros {
  children: React.ReactNode;
}

export default function Layout({ children }: Ipros) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
