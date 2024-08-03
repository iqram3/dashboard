import CustomerFeedback from "./CustomerFeedback";

const CustomerFeedbackList = ({ feedbacks }) => {
  return (
    <div className="max-h-[22rem] overflow-y-auto p-4 bg-gray-800 text-white rounded custom-scrollbar">
      <h2 className="text-xl font-semibold mb-4">Customer's Feedback</h2>
      {feedbacks.map((feedback, index) => (
        <CustomerFeedback key={index} {...feedback} />
      ))}
    </div>
  );
};

export default CustomerFeedbackList;
