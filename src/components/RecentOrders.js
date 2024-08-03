import React from "react";
import Status from "./Status";

const RecentOrders = () => {
  const orders = [
    {
      customer: "Wade Warren",
      profile:
        "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png",
      orderNo: "15478256",
      amount: "$124.00",
      status: "Delivered",
    },
    {
      customer: "Jane Cooper",
      profile:
        "https://i.pinimg.com/280x280_RS/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg",
      orderNo: "48965786",
      amount: "$305.02",
      status: "Delivered",
    },
    {
      customer: "Guy Hawkins",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYodX4PS5R7aKD07Tli-JcxLDvuKv5PZOFZHpuihWbTu63e-riirBBrvu8IqOJz7XjaSQ&usqp=CAU",
      orderNo: "78985215",
      amount: "$45.88",
      status: "Cancelled",
    },
    {
      customer: "Kristin Watson",
      profile:
        "https://cdn.vectorstock.com/i/1000v/54/41/young-and-elegant-woman-avatar-profile-vector-9685441.jpg",
      orderNo: "20965732",
      amount: "$60.00",
      status: "Pending",
    },
    {
      customer: "Cody Fisher",
      profile:
        "https://skiblue.co.uk/wp-content/uploads/2015/06/dummy-profile.png",
      orderNo: "95715620",
      amount: "$545.00",
      status: "Delivered",
    },
    {
      customer: "Savannah Nguyen",
      profile:
        "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg",
      orderNo: "78514568",
      amount: "$128.20",
      status: "Delivered",
    },
    {
      customer: "Savannah Nguyen",
      profile:
        "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg",
      orderNo: "78514568",
      amount: "$128.20",
      status: "Delivered",
    },
    {
      customer: "Savannah Nguyen",
      profile:
        "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg",
      orderNo: "78514568",
      amount: "$128.20",
      status: "Delivered",
    },
    {
      customer: "Savannah Nguyen",
      profile:
        "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg",
      orderNo: "78514568",
      amount: "$128.20",
      status: "Delivered",
    },
    {
      customer: "Savannah Nguyen",
      profile:
        "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg",
      orderNo: "78514568",
      amount: "$128.20",
      status: "Delivered",
    },
    {
      customer: "Savannah Nguyen",
      profile:
        "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-4382.jpg",
      orderNo: "78514568",
      amount: "$128.20",
      status: "Delivered",
    },
  ];

  return (
    <div className="p-4 bg-gray-800 text-white rounded max-h-96 overflow-y-auto custom-scrollbar">
      <h2 className="text-xl font-semibold">Recent Orders</h2>

      {/* Main Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left min-w-full">
          <thead>
            <tr>
              <th className="text-md p-2">Customer</th>
              <th className="text-md p-2">Order No.</th>
              <th className="text-md p-2">Amount</th>
              <th className="text-md -2">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-t border-gray-700">
                <td className="flex items-center space-x-2 p-2">
                  <img
                    src={order.profile}
                    alt={order.customer}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="text-sm">{order.customer}</span>
                </td>
                <td className="text-sm p-2">{order.orderNo}</td>
                <td className="text-sm p-2">{order.amount}</td>
                <td className="text-sm p-2">
                  <Status status={order.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Fallback for very small screens */}
      <div className="block md:hidden mt-4">
        {orders.map((order, index) => (
          <div key={index} className="mb-4 p-4 bg-gray-700 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <img
                src={order.profile}
                alt={order.customer}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">{order.customer}</h3>
                <p className="text-sm text-gray-400">
                  Order No: {order.orderNo}
                </p>
                <p className="text-sm text-gray-400">Amount: {order.amount}</p>
                <p className="text-sm text-gray-400">Status: {order.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentOrders;
