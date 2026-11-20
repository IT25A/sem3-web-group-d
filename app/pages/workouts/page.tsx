import Sidebar from "../../components/Sidebar";

export default function WorkoutsPage() {
  return (
    <div className="page">
      <Sidebar />
      <main className="page-content">
        <h1 className="page-title">Workouts</h1>
        <p className="page-subtitle">Your saved workout plans will appear here.</p>
      </main>
    </div>
  );
}