import Image from "next/image";
// Import Images/icon
import profile from "../assets/profile/profile.svg";
import dropDown from "../assets/profile/dropDown.svg";
import option from "../assets/profile/option.svg";

const Profile = () => {
  return (
    <section className="fixed top-0 right-0 z-10 bg-[#F3F4FF] h-screen">
      <div className="flex flex-col gap-5 p-5">
        <div className="flex items-center gap-2">
          <Image src={profile} alt="Profile" width={30} height={30} />
          <div className="font-bold">
            <h3 className="text-[#212121] text-sm">Budi Budiman</h3>
            <p className="text-[#7A7A7A] text-[12px]">Owner at PT Suka Maju</p>
          </div>
          <Image src={dropDown} alt="drop down" />
        </div>
        <div className="relative bg-white flex flex-col items-center px-2 py-4 drop-shadow-md rounded-[12px]">
          <div className="absolute left-[160px]">
            <Image src={option} alt="option" />
          </div>
          <div className="flex flex-col items-center gap-5">
            <h3>Total balance</h3>
            <p>Rp 1.580.000.000</p>
            <button className="bg-[#545DFF] px-12 py-2 rounded-[12px] font-bold text-white">Top Up</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
