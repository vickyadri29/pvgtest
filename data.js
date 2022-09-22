// Images Data Money
const arrowRight = require("./assets/dashboard/arrowRight.svg");
const arrowRightUp = require("./assets/dashboard/arrowRightUp.svg");
const arrowRightDown = require("./assets/dashboard/arrowRightDown.svg");

// Images Data Products
const maxim = require("./assets/dashboard/maxim.svg");
const telkomsel = require("./assets/dashboard/telkomsel.svg");
const three = require("./assets/dashboard/three.svg");
const ovo = require("./assets/dashboard/ovo.svg");
const pln = require("./assets/dashboard/pln.svg");

// Import Data Agents
const user1 = require("./assets/dashboard/user1.svg");
const user2 = require("./assets/dashboard/user2.svg");
const user3 = require("./assets/dashboard/user3.svg");
const user4 = require("./assets/dashboard/user4.svg");
const user5 = require("./assets/dashboard/user5.svg");

export const DataMoney = {
  datas: [
    {
      id: 1,
      title: "Profit",
      liquidity: "Rp 11.500.000",
      icon: arrowRightDown,
      status: "0.3% compared to 7 days ago",
      styleStatus: "text-sm text-[#E94948]",
    },
    {
      id: 2,
      title: "Sales",
      liquidity: "Rp 56.000.000",
      icon: arrowRightUp,
      status: "0.5% compared to 7 days ago",
      styleStatus: "text-sm text-[#36D189]",
    },
    {
      id: 3,
      title: "Transaction",
      liquidity: "1.090 transactions",
      icon: arrowRight,
      status: "same as 7 days ago",
      styleStatus: "text-sm text-[#FFDC7D]",
    },
  ],
};

export const DataProducts = {
  datas: [
    {
      id: 1,
      img: maxim,
      title: "Maxim",
      price: "150.000",
      total: 120,
      transactions: "transactions",
    },
    {
      id: 2,
      img: telkomsel,
      title: "Telkomsel",
      price: "25.000",
      total: 98,
      transactions: "transactions",
    },
    {
      id: 3,
      img: three,
      title: "Three",
      price: "50.000",
      total: 74,
      transactions: "transactions",
    },
    {
      id: 4,
      img: ovo,
      title: "OVO",
      price: "100.000",
      total: 68,
      transactions: "transactions",
    },
    {
      id: 5,
      img: pln,
      title: "PLN Postpaid",
      price: "",
      total: 50,
      transactions: "transactions",
    },
  ],
};
export const DataAgents = {
  datas: [
    {
      id: 1,
      img: user1,
      name: "PT Suka Maju Jakarta",
      profit: "Profit",
      nominalProfit: "Rp 3.700.000",
      sales: "Sales",
      nominalSales: "Rp 7.230.000",
      transactions: "Transaction",
      totalTrans: "43 transactions",
    },
    {
      id: 2,
      img: user2,
      name: "Susi Susanti",
      profit: "Profit",
      nominalProfit: "Rp 3.550.000",
      sales: "Sales",
      nominalSales: "Rp 5.230.000",
      transactions: "Transaction",
      totalTrans: "37 transactions",
    },
    {
      id: 3,
      img: user3,
      name: "Toko Pulsa III Depok",
      profit: "Profit",
      nominalProfit: "Rp 2.860.000",
      sales: "Sales",
      nominalSales: "Rp 4.500.000",
      transactions: "Transaction",
      totalTrans: "38 transactions",
    },
    {
      id: 4,
      img: user4,
      name: "PT Suka Maju Bogor",
      profit: "Profit",
      nominalProfit: "Rp 2.400.000",
      sales: "Sales",
      nominalSales: "Rp 4.800.000",
      transactions: "Transaction",
      totalTrans: "40 transactions",
    },
    {
      id: 5,
      img: user5,
      name: "Anton Antoman",
      profit: "Profit",
      nominalProfit: "Rp 2.350.000",
      sales: "Sales",
      nominalSales: "Rp 2.100.000",
      transactions: "Transaction",
      totalTrans: "20 transactions",
    },
  ],
};
