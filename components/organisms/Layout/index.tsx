import React from "react";
import Nav from "../Nav";
import Sidebar from "../Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="sb-nav-fixed">
        <Nav />
        <div id="layoutSidenav">
          <Sidebar />
          <div id="layoutSidenav_content">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </>
  );
}
