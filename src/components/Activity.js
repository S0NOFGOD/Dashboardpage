import "./Activity.css";

function Activity() {
  const activities = [
    "User John signed up",
    "New sale completed",
    "Task marked as done",
  ];

  return (
    <div className="activity">
      <h2>Recent Activity</h2>
      <ul>
        {activities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Activity;