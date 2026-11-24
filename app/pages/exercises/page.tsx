'use client';

import Sidebar from "../../components/Sidebar";
import Checkbox from "../../components/Checkbox";
import Modal from "../../components/Modal";
import { FilterIcon } from "../../components/icons";
import { useEffect, useState } from "react";

type Exercise = {
    id: string;
    name: string;
    bodyPart: string;
    difficulty: string;
    category: string;
    equipment: string;
    target: string;
};

const BODY_PARTS = ["Back", "Cardio", "Chest", "Lower Arms", "Lower Legs", "Neck", "Shoulders", "Upper Arms", "Upper Legs", "Waist"];
const DIFFICULTIES = ["beginner", "intermediate", "advanced"];
const CATEGORIES = ["cardio", "flexibility", "plyometric", "strength"];
const EQUIPMENT = ["Assisted", "Band", "Barbell", "Body Weight", "Cable", "Dumbbell", "Medicine Ball", "Rope", "Suspension Trainer"];

const DIFFICULTY_COLORS: Record<string, string> = {
    beginner: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
    intermediate: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
    advanced: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
};

function FilterGroup({
    title,
    options,
    selected,
    onToggle,
}: {
    title: string;
    options: string[];
    selected: Set<string>;
    onToggle: (value: string) => void;
}) {
    return (
        <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-2">{title}</p>
            <div className="flex flex-col gap-1">
                {options.map((opt) => (
                    <Checkbox
                        key={opt}
                        checked={selected.has(opt)}
                        onChangeAction={() => onToggle(opt)}
                        label={opt}
                    />
                ))}
            </div>
        </div>
    );
}

function useToggleSet() {
    const [set, setSet] = useState<Set<string>>(new Set());
    const toggle = (value: string) =>
        setSet((prev) => {
            const next = new Set(prev);
            if (next.has(value)) {
                next.delete(value);
            } else {
                next.add(value);
            }
            return next;
        });
    const clear = () => setSet(new Set());
    return [set, toggle, clear] as const;
}

export default function ExercisesPage() {
    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [filterOpen, setFilterOpen] = useState(false);
    const [bodyParts, toggleBodyPart, clearBodyParts] = useToggleSet();
    const [difficulties, toggleDifficulty, clearDifficulties] = useToggleSet();
    const [categories, toggleCategory, clearCategories] = useToggleSet();
    const [equipment, toggleEquipment, clearEquipment] = useToggleSet();

    useEffect(() => {
        fetch('/api/exercises')
            .then((res) => res.json())
            .then((data) => {
                setExercises(data);
                setLoading(false);
            });
    }, []);

    const filtered = exercises.filter((ex) => {
        if (search && !ex.name.toLowerCase().includes(search.toLowerCase())) return false;
        if (bodyParts.size > 0 && !bodyParts.has(ex.bodyPart)) return false;
        if (difficulties.size > 0 && !difficulties.has(ex.difficulty)) return false;
        if (categories.size > 0 && !categories.has(ex.category)) return false;
        return !(equipment.size > 0 && !equipment.has(ex.equipment));
    });

    const hasFilters = bodyParts.size + difficulties.size + categories.size + equipment.size > 0;

    return (
        <div className="page">
            <Sidebar />
            <Modal isOpen={filterOpen} onCloseAction={() => setFilterOpen(false)} title="Filters">
                {hasFilters && (
                    <div className="mb-4">
                        <button
                            onClick={() => {
                                clearBodyParts();
                                clearDifficulties();
                                clearCategories();
                                clearEquipment();
                            }}
                            className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                            Clear all
                        </button>
                    </div>
                )}
                <div className="flex gap-8">
                    <FilterGroup title="Body Part" options={BODY_PARTS} selected={bodyParts} onToggle={toggleBodyPart} />
                    <FilterGroup title="Difficulty" options={DIFFICULTIES} selected={difficulties} onToggle={toggleDifficulty} />
                    <FilterGroup title="Category" options={CATEGORIES} selected={categories} onToggle={toggleCategory} />
                    <FilterGroup title="Equipment" options={EQUIPMENT} selected={equipment} onToggle={toggleEquipment} />
                </div>
            </Modal>
            <main className="page-content">
                <h1 className="page-title">Exercises</h1>
                <p className="page-subtitle">Browse and manage exercises here.</p>

                <div className="flex items-center gap-2 mb-6 w-full max-w-md">
                    <input
                        type="text"
                        placeholder="Search exercises..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-1 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                        onClick={() => setFilterOpen((o) => !o)}
                        aria-label="Toggle filters"
                        className={`flex items-center justify-center rounded-lg border p-2 transition-colors ${
                            hasFilters
                                ? "bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-700 hover:border-indigo-700"
                                : "border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                    >
                        <FilterIcon className="icon" />
                    </button>
                </div>

                {loading ? (
                    <p className="text-sm text-gray-400">Loading...</p>
                ) : (
                    <>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">
                            {filtered.length} exercise{filtered.length !== 1 ? "s" : ""}
                        </p>
                        <div className="flex flex-col w-full divide-y divide-gray-100 dark:divide-gray-700 rounded-xl border dark:border-gray-700 bg-white dark:bg-gray-800">
                            {filtered.length === 0 ? (
                                <p className="px-5 py-8 text-sm text-gray-400 text-center">No exercises match the selected filters.</p>
                            ) : (
                                filtered.map((ex, i) => (
                                    <div key={ex.id} className={`flex items-center justify-between px-5 py-4 hover:bg-gray-750 dark:hover:bg-gray-700 transition-colors ${i === 0 ? "rounded-t-xl" : ""} ${i === filtered.length - 1 ? "rounded-b-xl" : ""}`}>
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-sm font-medium text-gray-900 dark:text-white">{ex.name}</span>
                                            <span className="text-xs text-gray-400 dark:text-gray-500 capitalize">
                                                {ex.bodyPart} · {ex.target} · {ex.equipment}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 ml-4 shrink-0">
                                            <span className="text-xs capitalize text-gray-500 dark:text-gray-400">{ex.category}</span>
                                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${DIFFICULTY_COLORS[ex.difficulty] ?? ""}`}>
                                                {ex.difficulty}
                                            </span>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </>
                )}
            </main>
        </div>
    );
}