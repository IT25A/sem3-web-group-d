'use client';

import { useEffect, useState } from 'react';
import Sidebar from "./components/Sidebar";

type Exercise = {
  name: string;
  bodyPart: string;
  difficulty: string;
};

export default function Home() {
  const [exercise, setExercise] = useState<Exercise | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/exercises')
      .then((res) => res.json())
      .then((data) => {
        setExercise(data[0]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-gray-900 md:flex-row">
      <Sidebar />
      <main className="flex flex-1 w-full flex-col items-start py-32 px-8 bg-white dark:bg-gray-900 md:ml-64 md:px-16 md:max-w-3xl">
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm p-6 w-full max-w-sm">
          {loading || !exercise ? (
            <p className="text-sm text-gray-400">Loading...</p>
          ) : (
            <>
              <p className="text-xs font-medium uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
                {exercise.difficulty}
              </p>
              <p className="text-sm font-medium uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
                Body part: <span className="font-black">{exercise.bodyPart}</span>
              </p>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {exercise.name}
              </h2>
            </>
          )}
        </div>
      </main>
    </div>
  );
}