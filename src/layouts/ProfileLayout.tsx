import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function ProfileLayout() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="p-6  flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
}
