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
        <div className="my-3 flex justify-between content-end outline outline-1 outline-slate-700 rounded">

            {!isFirst
                ? <MoveArrow isFirst={isFirst} handleMoveStudent={handleMoveStudent} />
                : ""}

            <div className='mx-3 flex flex-col font-light'>
                <div>
                    <span className="text-indigo-950 font-semibold">
                        id:
                    </span> {id}
                </div>
                <div>
                    <span className="text-indigo-950 font-semibold">
                        name:
                    </span> {name}
                </div>
                <div>
                    <span className="text-indigo-950 font-semibold">
                        mark:
                    </span> {mark}
                </div>
            </div>

            {isFirst
                ? <MoveArrow isFirst={isFirst} handleMoveStudent={handleMoveStudent} />
                : ""}

        </div>
    )
}

function MoveArrow({ isFirst, handleMoveStudent }) {
    return (
        <button
            className='bg-zinc-800 text-gray-100 hover:bg-zinc-600 cursor-pointer flex items-center focus:ring-8 focus:ring-slate-50'
            onClick={() => handleMoveStudent()}
        >
            {isFirst
                ? <ArrowRightIcon />
                : <ArrowLeftIcon />}
        </button>
    )
}