import React from "react";
import Nav from "../Nav";
import Sidebar from "../Sidebar";

export default function Layout() {
  return (
    <>
      <div className="sb-nav-fixed">
        <Nav />
        <div id="layoutSidenav">
          <Sidebar />
        </div>
      </div>
    </>
  );
}
