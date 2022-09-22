import Image from "next/image";

import { DataAgents } from "../../data";

const Agents = () => {
  const { datas } = DataAgents;

  return (
    <section>
      <div className="py-4 pr-5 w-[300px]">
        <div className="flex flex-col gap-4 px-5 py-10 border border-white drop-shadow-xl shadow-md rounded-[12px]">
          <h3>Top 5 Agents</h3>
          <div className="flex flex-col gap-4">
            {datas.map((data, index) => {
              const {
                img,
                name,
                profit,
                nominalProfit,
                sales,
                nominalSales,
                transactions,
                totalTrans,
              } = data;
              return (
                <div key={index} className="flex items-center justify-between p-1">
                  <Image src={img} alt="photo agents" width={50} height={50}/>
                  <div>
                    <h3 className="font-semibold text-[#545DFF]">{name}</h3>
                    <div className="flex gap-4">
                      <tr className="text-[12px] flex flex-col text-left text-[#7A7A7A] font-medium">
                        <th>{profit}</th>
                        <th>{sales}</th>
                        <th>{transactions}</th>
                      </tr>
                      <tr className="font-semibold text-[12px] flex flex-col">
                        <td>{nominalProfit}</td>
                        <td>{nominalSales}</td>
                        <td>{totalTrans}</td>
                      </tr>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agents;
