import { SideBar } from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Suspense, useState } from "react";
import SuspenseLoader from "../components/SuspenseLoader";
const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  function toggleoff() {
    setOpenDrawer((prevstate) => !prevstate);
  }

  return (
    <>
      <Header toggleoff={toggleoff} />
      <SideBar openDrawer={openDrawer} />
      <Suspense fallback={<SuspenseLoader/>}>
        <Outlet context={{ openDrawer }} />
      </Suspense>
    </>
  );
};

export default Main;
