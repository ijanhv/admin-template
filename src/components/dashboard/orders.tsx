import { orders } from "@/utils/data";
import Image from "next/image";
import React from "react";

const RecentOrders = () => {
  const headers = ["Method", "Created", "Total", "Status"];
  return (
    <div className=" border border-gray-100 rounded-lg dark:border-neutral-800 space-y-4 p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Recent Orders</h3>
        <button className="text-primary">View All</button>
      </div>

      <table className="w-full">
        <thead className="">
          <tr className="px-6 py-4  font-medium text-gray-500 uppercase tracking-wider">
            {headers.map((header, index) => (
              <th key={index} className="text-left text-sm lg:text-base">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-900 w-full text-sm">
          {orders.map((order, index) => (
            <tr key={index} className="my-3 text-center text-sm">
              <td className="flex items-center gap-2  py-3">
                <Image
                  src={order.method.image}
                  alt={order.method.name}
                  width={32}
                  height={32}
                  unoptimized
                  className="w-8 h-8 rounded-lg"
                />
                <p className="text-left">{order.method.name}</p>
              </td>

              <td className=" py-3 text-left"> {order.createdAt}</td>
              <td className=" py-3 text-left">{order.total}</td>
              <td className=" py-3 text-left "> {order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
