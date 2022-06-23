import React from "react";
import Footer from "./footer";
import Header from "./header";
import { IlayoutProps } from "types";

export default function Layout({ children }: IlayoutProps) {
  return (
    <div className="bg-primary">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
