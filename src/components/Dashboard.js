import "./Dashboard.css";
import StatsCard from "./StatsCard";
import Activity from "./Activity";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="stats">
        <StatsCard title="Users" value="1,245" />
        <StatsCard title="Sales" value="₦45,000" />
        <StatsCard title="Tasks" value="12" />
      </div>
      <Activity />
    </div>
  );
}

export default Dashboard;