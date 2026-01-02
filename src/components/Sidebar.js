import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li>Home</li>
        <li>Analytics</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
}

export default Sidebar;