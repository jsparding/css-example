import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../compononts/Navbar";

export default function Root() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
