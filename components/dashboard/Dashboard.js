import Image from "next/image";

// Import Components
import Header from "./Header";
import CardMoney from "./CardMoney";
import Products from "./Products";

// Import Chart
import chart from "../../assets/dashboard/chart.svg";

const Dashboard = () => {
  return (
    <section className="">
      <div className="max-w-7xl m-auto ">
        <Header />
        <CardMoney />
        <div>
          <div>
            <Image src={chart} alt="chart" width="720px" height="370px"/>
            <Products />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
