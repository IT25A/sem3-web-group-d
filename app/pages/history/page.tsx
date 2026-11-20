import Sidebar from "../../components/Sidebar";

export default function WorkoutHistoryPage() {
  return (
    <div className="page">
      <Sidebar />
      <main className="page-content">
        <h1 className="page-title">Workout History</h1>
        <p className="page-subtitle">Your past workouts will appear here.</p>
      </main>
    </div>
  );
}