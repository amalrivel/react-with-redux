import React from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

const DashboardPage = () => {
  const [sidebar, setSidebar] = React.useState(false)
  const handleSidebar = () => {
    setSidebar(!sidebar)
  }
 
  return (
    
    <React.Fragment>
      <Navbar handleSidebar={handleSidebar} sidebar={sidebar} />
      <Sidebar sidebar={sidebar}/>
      <div className={`mt-16  h-[200vh] bg-slate-200 transition-all ${sidebar === true ? 'md:ml-20' :'md:ml-60'}`}></div>
    </React.Fragment>
  );
};

export default DashboardPage;
