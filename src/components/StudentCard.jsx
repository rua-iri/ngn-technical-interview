"use client"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useDispatch } from 'react-redux';
import { moveStudents } from '@/lib/features/students/studentSlice';
import { setSelect } from '@/lib/features/select/selectSlice';

export default function StudentCard({ studentData }) {

    const { id, name, mark, isFirst } = studentData;
    const dispatch = useDispatch();

    return (
        <div className="my-3 flex justify-between content-end outline outline-1 outline-slate-700 rounded">

            <SelectRadio id={id} />

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

        </div>
    )
}



function SelectRadio({ id }) {
    
    const dispatch = useDispatch();

    function handleSelect() {
        // console.log(`Selected id: ${id}`)
        dispatch(setSelect(id));
    }

    return (
        <div className='flex items-center bg-zinc-800 px-2 text-gray-100 hover:bg-zinc-700'>
            <input
                id={`buttonfor-${id}`}
                type="radio"
                value={id}
                name="asdf"
                // className='hidden peer'
                className='h-5 w-5'
                onChange={() => handleSelect()}
            />
        </div>
    )
}