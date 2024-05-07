'use client';

import { resetStudents } from "@/lib/features/students/studentSlice";
import { useDispatch } from "react-redux";
import RestoreIcon from '@mui/icons-material/Restore';

export default function ListControls({ getStudentsData }) {

    const dispatch = useDispatch();

    const handleReset = () => {
        dispatch(resetStudents());
        getStudentsData(dispatch);
    }

    return (
        <div className="flex justify-center">
            <button
                className="flex justify-around bg-red-700 text-white px-3 py-2 rounded-md hover:bg-red-800 focus:ring-2 focus:ring-slate-500"
                onClick={() => handleReset()}
            >
                <RestoreIcon />
                &nbsp;
                Reset
            </button>
        </div>
    )
}