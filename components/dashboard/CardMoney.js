import Image from "next/image";

import { DataMoney } from "../../data";
import arrowRight from "../../assets/dashboard/arrowRight.svg";
import arrowRightDown from "../../assets/dashboard/arrowRightDown.svg";
import arrowRightUp from "../../assets/dashboard/arrowRightUp.svg";

const CardMoney = () => {
  const { datas } = DataMoney;

  return (
    <section>
      <div className="max-w-7xl m-auto p-5">
        <div className="flex justify-between gap-4">
          {datas.map((data, index) => {
            const { title, liquidity, icon, status, styleStatus } = data;
            return (
              <div key={index} className="flex flex-col gap-4 px-3 py-2 font-semibold border w-[300px] border-white rounded-[12px] drop-shadow-xl shadow-md">
                <div>
                  <h3 className="text-[#7A7A7A]">{title}</h3>
                  <p className="text-[28px]">{liquidity}</p>
                </div>
                <div className="flex items-center gap-2 justify-end">
                  <Image src={icon} alt="frame" />
                  <p className={styleStatus}>{status}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CardMoney;
