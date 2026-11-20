import Sidebar from "../../components/Sidebar";

export default function ProfilePage() {
  return (
    <div className="page">
      <Sidebar />
      <main className="page-content">
        <h1 className="page-title">Profile</h1>
        <p className="page-subtitle">Your profile information will appear here.</p>
      </main>
    </div>
  );
}