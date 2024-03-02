import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="flex gap-[40px]">
      <Sidebar />
      <main className="ml-[120px] w-full py-6">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
