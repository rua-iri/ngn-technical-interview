'use client';

import { resetStudents } from "@/lib/features/students/studentSlice";
import { useDispatch } from "react-redux";

export default function ListControls() {

    const dispatch = useDispatch();

    const handleReset = () => {
        dispatch(resetStudents())
    }

    return (
        <div className="flex justify-center">
            <button className="bg-red-900 text-slate-50 px-3 py-2 rounded-md hover:opacity-70" onClick={() => handleReset()}>
                Reset
            </button>
        </div>
    )
}