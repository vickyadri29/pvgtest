import Image from "next/image";
import { DataProducts } from "../../data";

const Products = () => {
  const { datas } = DataProducts;
  return (
    <section>
      <div className="max-w-7xl m-auto p-5">
        <div className="flex flex-col gap-5 px-5 py-4 border border-white drop-shadow-xl shadow-md rounded-[12px]">
          <h3 className="font-semibold text-[#7A7A7A]">Top 5 Products</h3>
          <div className="flex justify-between items-center">
            {datas.map((data, index) => {
              const { img, title, price, total, transactions } = data;
              return (
                <div key={index} className="flex flex-col justify-between items-center w-[150px] h-[180px] px-2 py-4 font-semibold border-[3px] border-[#989EFF] rounded-[12px]">
                  <Image src={img} />
                  <h3 className="text-[#545DFF]">{title}</h3>
                  <p className="text-sm text-[#7A7A7A]">{price}</p>
                  <p className="text-[18px]">
                    {total} <span className="text-[13px]">{transactions}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
