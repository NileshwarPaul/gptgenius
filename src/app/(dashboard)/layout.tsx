import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import Sidebar from "@/components/Sidebar";
import NavLink from "@/components/NavLink";
import MemberProfile from "@/components/MemberProfile";
import SidebarHeader from "@/components/SidebarHeader";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className="btn btn-primary drawer-button lg:hidden"
        >
          <FaBarsStaggered />
        </label>
        <div className="bg-base-200 px-8 py-12  min-h-screen">{children}</div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <SidebarHeader />
        <Sidebar />
        <NavLink />
        <MemberProfile />
      </div>
    </div>
  );
}
