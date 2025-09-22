import { Outlet } from "react-router-dom";
import { NavBar, Footer } from "@/components/layout";

const MainLayout = () => {
  return (
    <div className="bg-zinc-100 min-h-screen flex flex-col relative">
        <NavBar/>
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;