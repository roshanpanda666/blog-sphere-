import React from "react";
import FollowBar from "@/components/layout/FollowBar";
import Sidebar from "@/components/layout/Sidebar";
import BottomBar from "./layout/BottomBar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen bg-black">
      <div className="container h-full mx-auto xl:px-30 max-w-[100rem]">
        <div className="grid grid-cols-1  md:grid-cols-4 h-full justify-center item-center">
          <Sidebar />

          <div
            
            className="

            lg:mt-32
              col-span-3 
              lg:col-span-2 
              border-[1px] 
              border-blue-700
              lg:w-[70vw]
              w-full
              lg:-ml-80
              
          "
          >
            {children}
          </div>
          <FollowBar />
          <BottomBar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
