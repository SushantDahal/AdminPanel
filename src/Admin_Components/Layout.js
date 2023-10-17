import { useState, useEffect } from "react";
import Addproduct from "./Addproduct";
import Home from "./Home";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [activeComponent, setActiveComponent] = useState("home"); // Default to "home"

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
        <Sidebar showNav={showNav} setActiveComponent={setActiveComponent} />
        {activeComponent === "home" && <Home showNav={showNav} />}
        {activeComponent === "addProduct" && <Addproduct showNav={showNav} />}
      </div>
    </>
  );
};

export default Layout;
