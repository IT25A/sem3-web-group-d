import Sidebar from "../../components/Sidebar";

export default function LogWorkoutPage() {
  return (
    <div className="page">
      <Sidebar />
      <main className="page-content">
        <h1 className="page-title">Log a Workout</h1>
        <p className="page-subtitle">Record a new workout session here.</p>
      </main>
    </div>
  );
}