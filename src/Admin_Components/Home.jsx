import { BsCart3, BsBucket, BsPeopleFill } from "react-icons/bs";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Home = ({ showNav, setShowNav }) => {
  const user = 8282;
  const orders = 2563;
  const product = 263210;
  const customer = 2362;

  return (
    <div
      className={`  h-15 bg-[#d3b0f1] flex w-full h-full pt-20 transition-all  duration-300 ${
        showNav ? "pl-56 " : ""
      }`}
    >
      <div className="pl-4 md:pl-16  w-full">
        <h1 className="text-2xl font-bold uppercase text-black ml-4">
          DashBoard
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mx-4 my-4 cursor-pointer">
          <div className="bg-white rounded-md h-[6rem] flex items-center gap-4 border-[red] border-l-4 hover:-translate-y-2  duration-300 ">
            <UserGroupIcon className="h-10 min-w-[40px]  ml-4 bg-[#d3b0f1] rounded-full p-2 " />
            <div>
              <h1 className="font-bold text-xl" contenteditable="true">
                {user}
              </h1>
              <p className="text-gray-400">New User</p>
            </div>
          </div>
          <div className="bg-white rounded-md h-[6rem] flex items-center gap-4  border-[blue] border-l-4 hover:-translate-y-2  duration-300">
            <BsCart3 className="h-10 min-w-[40px] ml-4 bg-[#d3b0f1] rounded-full p-2 " />
            <div>
              <h1 className="font-bold text-xl" contenteditable="true">
                {orders}
              </h1>
              <p className="text-gray-400">Total Orders</p>
            </div>
          </div>

          <div className="bg-white rounded-md h-[6rem] flex items-center gap-4 border-[#46d346] border-l-4 hover:-translate-y-2  duration-300">
            <BsBucket className="h-10 ml-4 min-w-[40px]  bg-[#d3b0f1] rounded-full p-2 " />
            <div>
              <h1 className="font-bold text-xl" contenteditable="true">
                {product}
              </h1>
              <p className="text-gray-400">Available Product</p>
            </div>
          </div>
          <div className="bg-white rounded-md h-[6rem] flex items-center gap-4 border-[yellow] border-l-4 hover:-translate-y-2  duration-300">
            <BsPeopleFill className="h-10 min-w-[40px]  ml-4 bg-[#d3b0f1] rounded-full p-2 " />
            <div>
              <h1 className="font-bold text-xl" contenteditable="true">
                {customer}
              </h1>
              <p className="text-gray-400">Customers</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 my-10 bg-white" id="chart">
          <div className="w-full h-[400px] py-4 bg-blue-400">
            <ResponsiveContainer>
              <LineChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Home;
