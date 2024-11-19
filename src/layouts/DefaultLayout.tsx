import Header from "./Header";
import Footer from "./Footer";
import BackTop from "@/components/ui/backtop";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function DefaultLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
  return (
    <div>
      <BackTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
