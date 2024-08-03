import React from "react";
import Card from "./Card";
import ActivityChart from "./ActivityChart";
import Goals from "./Goals";
import NetProfitCard from "./NetProfitCard";
import RecentOrders from "./RecentOrders";
import CustomerFeedbackList from "./CustomerFeedbackList";

const feedbacks = [
  {
    image: "https://skiblue.co.uk/wp-content/uploads/2015/06/dummy-profile.png",
    name: "John Doe",
    feedback: `The food was excellent and so was the service. I had the mushroom risotto
                with scallops which was awesome. I had a burger over greens (gluten-free)
                which was also very good. They were very conscientious about gluten
                allergies`,
    rating: 4,
  },
  {
    image:
      "https://cdn.vectorstock.com/i/1000v/54/41/young-and-elegant-woman-avatar-profile-vector-9685441.jpg",
    name: "Jenny Wilson",
    feedback: `We enjoyed the Eggs Benedict served on homemade focaccia bread and hot
                coffee. Perfect service.`,
    rating: 5,
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYodX4PS5R7aKD07Tli-JcxLDvuKv5PZOFZHpuihWbTu63e-riirBBrvu8IqOJz7XjaSQ&usqp=CAU",
    name: "Dianne Russell",
    feedback: `Normally we get wings, but theirs are lean meaty and tender, and the
                seasoning was phenomenal.`,
    rating: 2,
  },
  {
    image:
      "https://i.pinimg.com/280x280_RS/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg",
    name: "Dianne Russell",
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread...",
    rating: 3.5,
  },
  {
    image:
      "https://i.pinimg.com/280x280_RS/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg",
    name: "Dianne Russell",
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread...",
    rating: 3.5,
  },
  {
    image:
      "https://i.pinimg.com/280x280_RS/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg",
    name: "Dianne Russell",
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread...",
    rating: 3.5,
  },
  {
    image:
      "https://i.pinimg.com/280x280_RS/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg",
    name: "Dianne Russell",
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread...",
    rating: 3.5,
  },
  {
    image:
      "https://i.pinimg.com/280x280_RS/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg",
    name: "Dianne Russell",
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread...",
    rating: 3.5,
  },
  {
    image:
      "https://i.pinimg.com/280x280_RS/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg",
    name: "Dianne Russell",
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread...",
    rating: 3.5,
  },
  {
    image:
      "https://i.pinimg.com/280x280_RS/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg",
    name: "Dianne Russell",
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread...",
    rating: 3.5,
  },
  {
    image:
      "https://i.pinimg.com/280x280_RS/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg",
    name: "Dianne Russell",
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread...",
    rating: 3.5,
  },
  {
    image:
      "https://i.pinimg.com/280x280_RS/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg",
    name: "Dianne Russell",
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread...",
    rating: 3.5,
  },
  {
    image:
      "https://i.pinimg.com/280x280_RS/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg",
    name: "Dianne Russell",
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread...",
    rating: 3.5,
  },
  {
    image:
      "https://i.pinimg.com/280x280_RS/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg",
    name: "Dianne Russell",
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread...",
    rating: 3.5,
  },
  {
    image:
      "https://i.pinimg.com/280x280_RS/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg",
    name: "Dianne Russell",
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread...",
    rating: 3.5,
  },
  {
    image:
      "https://i.pinimg.com/280x280_RS/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg",
    name: "Dianne Russell",
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread...",
    rating: 3.5,
  },
  {
    image:
      "https://i.pinimg.com/280x280_RS/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg",
    name: "Dianne Russell",
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread...",
    rating: 3.5,
  },
  {
    image:
      "https://i.pinimg.com/280x280_RS/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg",
    name: "Dianne Russell",
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread...",
    rating: 3.5,
  },
  // Add more feedbacks as needed
];

const Dashboard = () => {
  return (
    <div className="p-4 flex flex-col gap-4">
      {/* Dashboard Heading */}
      <h2 className="text-2xl font-bold text-white">Dashboard</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="lg:col-span-2 flex flex-col gap-4 overflow-auto custom-scrollbar">
          {/* Cards in a single row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card
              title="Total Orders"
              value="75"
              percentage="3%"
              positive={true}
              icon="orders"
            />
            <Card
              title="Total Delivered"
              value="70"
              percentage="3%"
              positive={true}
              icon="delivered"
            />
            <Card
              title="Total Cancelled"
              value="05"
              percentage="3%"
              positive={false}
              icon="cancelled"
            />
            <Card
              title="Total Revenue"
              value="$12k"
              percentage="3%"
              positive={false}
              icon="revenue"
            />
          </div>

          <div className="flex flex-col gap-4">
            <ActivityChart />
            <RecentOrders />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 overflow-auto custom-scrollbar">
          <NetProfitCard value="$6759.25" percentage={70} />
          <Goals />
          <div className="p-4 bg-gray-800 text-white rounded">
            <CustomerFeedbackList feedbacks={feedbacks} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
