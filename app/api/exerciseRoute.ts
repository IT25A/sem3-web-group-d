import { readFileSync } from "fs";
import path from "path";

function getData() {
    const file = readFileSync(path.join(process.cwd(), "app/data/exercises.json"), "utf-8");
    return JSON.parse(file);
}

export function getExerciseByIndex(n : number): { name: string; bodyPart: string; difficulty: string } {
    const exercises = getData();
    const { name, bodyPart, difficulty } = exercises[n];
    return { name, bodyPart, difficulty };
}