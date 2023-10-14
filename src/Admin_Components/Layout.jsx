import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import React from "react";
import Home from "./Home";

const Layout = ({ children }) => {
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  function handleSize() {
    if (window.innerWidth <= 680) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleSize);
    }
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <>
      <Topbar showNav={showNav} setShowNav={setShowNav} />
      <div className="h-screen flex">
        <Sidebar showNav={showNav} />
        <Home showNav={showNav} />
      </div>
    </>
  );
};

export default Layout;
