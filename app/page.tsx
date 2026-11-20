'use client';

import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="page">
      <Sidebar />
        <main className="page-content">
          <h1 className="page-title">Dashboard</h1>
        </main>
    </div>
  );
}