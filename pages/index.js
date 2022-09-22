import Head from "next/head";
import Image from "next/image";

// Import Component
import Navbar from "../components/Navbar";
import Dashboard from "../components/dashboard/Dashboard";
import Profile from "../components/Profile";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dashboard | PVG Test</title>
      </Head>
      <div className="font-nunito flex">
        <div className="basis-[18%]">
          <Navbar />
        </div>
        <div className="basis-[70%]">
          <Dashboard />
        </div>
        <div className="basis-[12%]">
          <Profile />
        </div>
      </div>
    </div>
  );
}
