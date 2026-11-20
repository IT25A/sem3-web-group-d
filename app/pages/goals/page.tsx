import Sidebar from "../../components/Sidebar";

export default function GoalsPage() {
  return (
    <div className="page">
      <Sidebar />
      <main className="page-content">
        <h1 className="page-title">Goals</h1>
        <p className="page-subtitle">Set and track your fitness goals here.</p>
      </main>
    </div>
  );
}