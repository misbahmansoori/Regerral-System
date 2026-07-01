const RecentReferrals = () => {
  const referrals = [
    {
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      status: "Completed",
    },
    {
      name: "Priya Verma",
      email: "priya@gmail.com",
      status: "Pending",
    },
    {
      name: "Aman Jain",
      email: "aman@gmail.com",
      status: "Completed",
    },
  ];

  return (
<div className="bg-white rounded-xl shadow-lg p-10 mt-8 text-center">

    <h2 className="text-xl font-semibold">
        Recent Referrals
    </h2>

    <p className="text-gray-500 mt-6">
        No referrals yet.
    </p>

    <p className="text-gray-400 text-sm">
        Share your referral link to start earning rewards.
    </p>

</div>
  );
};

export default RecentReferrals;