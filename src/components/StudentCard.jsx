"use client"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useDispatch } from 'react-redux';
import { moveStudents } from '@/lib/features/students/studentSlice';

export default function StudentCard({ studentData }) {

    const { id, name, mark, isFirst } = studentData;
    const dispatch = useDispatch();

    const handleMoveStudent = () => {
        dispatch(moveStudents(id))
    }

    return (
        <div className="my-3 flex justify-between content-end outline outline-1 outline-slate-700 rounded bg-white">

            {!isFirst
                ? <div className='bg-zinc-800 text-gray-100 hover:bg-zinc-600'>
                    <button onClick={() => handleMoveStudent()}>
                        <ArrowLeftIcon />
                    </button>
                </div>
                : ""}

            <div className='mx-3'>
                {id} - {name} - {mark}
            </div>

            {isFirst
                ? <div className='bg-zinc-800 text-gray-100 hover:bg-zinc-600'>
                    <button onClick={() => handleMoveStudent()}>
                        <ArrowRightIcon />
                    </button>
                </div>
                : ""}

        </div>
    )
}