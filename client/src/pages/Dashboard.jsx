import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import ReferralCard from "../components/ReferralCard";
import RecentReferrals from "../components/RecentReferral";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 bg-gray-100">
        <Navbar />

        <div className="p-8">
         <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white p-6 shadow-lg">

    <h1 className="text-3xl font-bold">
        Welcome back, {user?.name} 
    </h1>

    <p className="mt-2 opacity-90">
        Manage your referrals and track your progress from one place.
    </p>

</div>
          <p className="text-gray-500 mt-2">
            Here's an overview of your referral performance.
          </p>
          <div className="grid grid-cols-4 gap-6 mt-8">
            <StatsCard title="Total Referrals" value="0" color="#2563eb" />

            <StatsCard title="Total Downloads" value="0" color="#16a34a" />

            <StatsCard title="Successful Referrals" value="0" color="#9333ea" />

            <StatsCard title="Reward Points" value="0" color="#f97316" />
          </div>

          <ReferralCard referralCode={user?.referralCode} />
          <RecentReferrals />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
