import Image from "next/image";

// Import Components
import Header from "./Header";
import CardMoney from "./CardMoney";
import Products from "./Products";
import Agents from "./Agents";

// Import Chart
import chart from "../../assets/dashboard/chart.svg";

const Dashboard = () => {
  return (
    <section>
      <Header />
      <CardMoney />
      <div className="flex gap-1">
        <div className="basis-[70%]">
          <Image src={chart} alt="chart" />
          <Products />
        </div>
        <div className="basis-[30%]">
          <Agents />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
