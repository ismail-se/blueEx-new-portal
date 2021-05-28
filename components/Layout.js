import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import CalculateFareModal from "./Modals/CalculateFareModal";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  // Modal
  const [show, setShow] = useState(false);

  return (
    <div className="bg-[#f8f9fd] w-screen min-h-screen">
      <Header show={show} setShow={setShow} />
      <div className="flex flex-1 min-h-screen">
        <Sidebar />
        <div className="flex flex-col relative w-full">
          <div className="lg:ml-[16rem] flex flex-col min-h-screen">
            <div className="h-screen flex-1 mt-[4rem] p-[1.5rem]">
              {children}
            </div>
            <Footer />
          </div>
        </div>
      </div>
      <CalculateFareModal show={show} onHide={() => setShow(false)} />
    </div>
  );
};

export default Layout;
