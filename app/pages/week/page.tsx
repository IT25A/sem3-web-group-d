import Sidebar from "../../components/Sidebar";

export default function YourWeekPage() {
  return (
    <div className="page">
      <Sidebar />
      <main className="page-content">
        <h1 className="page-title">Your Week</h1>
        <p className="page-subtitle">Your weekly schedule will appear here.</p>
      </main>
    </div>
  );
}