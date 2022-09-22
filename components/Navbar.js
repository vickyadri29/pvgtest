import Image from "next/image";

// Import image/icon
import dashboardIcon from "../assets/navbar/dashboardIcon.svg";
import balanceIcon from "../assets/navbar/balanceIcon.svg";
import transactionIcon from "../assets/navbar/transactionIcon.svg";
import productIcon from "../assets/navbar/productIcon.svg";
import channelIcon from "../assets/navbar/channelIcon.svg";
import logoutIcon from "../assets/navbar/logoutIcon.svg";
import dropupIcon from "../assets/navbar/dropupIcon.svg";
import rectangleIcon from "../assets/navbar/rectangleIcon.svg";

const Navbar = () => {
  return (
    <section className="fixed top-0 w-[227px] left-0 z-10 bg-[#FCFCFF] h-screen">
      <nav className="flex flex-col h-screen">
        <div className="mt-10 flex justify-center">
          <h2 className="text-[#545dff] font-bold text-[29px]">SalesDash</h2>
        </div>
        <div>
          <ul className="flex flex-col pl-5 py-5 font-medium text-[#7A7A7A]">
            <li className="flex items-center justify-between text-[#545DFF] font-semibold cursor-pointer">
              <div className="flex items-center gap-5 p-[13px]">
                <Image src={dashboardIcon} alt="frame" />
                Dashboard
              </div>
              <Image src={rectangleIcon} alt="frame" />
            </li>
            <li className="flex items-center gap-5 p-[13px]">
              <Image src={balanceIcon} alt="frame" />
              Balance
            </li>
            <li className="flex items-center gap-5 p-[13px]">
              <Image src={transactionIcon} alt="frame" />
              Transaction
            </li>
            <li className="flex items-center gap-5 p-[13px]">
              <Image src={productIcon} alt="frame" />
              Product
            </li>
            <li className="flex items-center gap-5 p-[13px]">
              <Image src={channelIcon} alt="frame" />
              Channel
            </li>
            <li className="flex items-center gap-5 p-[13px] ml-[42px]">Agent</li>
            <li className="flex items-center gap-5 p-[13px] ml-[42px]">Balance</li>
            <li className="flex items-center gap-5 p-[13px] ml-[42px]">Transaction</li>
          </ul>
          <hr className="border-b-2 mx-7 border-[#C4C4C4]"/>
          <ul className="flex flex-col p-5 font-medium text-[#7A7A7A]">
            <li className="flex items-center gap-5 p-[13px]">
              <Image src={logoutIcon} alt="frame" />
              Logout
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
