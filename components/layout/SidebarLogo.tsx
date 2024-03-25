import Image from "next/image";
import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";

const SidebarLogo = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.push("/")} className="w-full flex  items-center">
      <div
        className="
        rounded-full 
       
        p-4 
        flex 
        items-center 
        justify-center 
        hover:bg-blue-300 
        hover:bg-opacity-10 
        cursor-pointer
       
    "
      >
        <div className="text-white text-3xl">Blog-<span className="text-3xl text-blue-600 ">Sphere</span></div>
      </div>
      <h3 className="text-white font-bold text-3xl flex md:hidden">
        blog-sphere
      </h3>
    </div>
  );
};

export default SidebarLogo;
