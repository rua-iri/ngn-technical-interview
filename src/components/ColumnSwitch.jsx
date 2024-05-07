import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useDispatch, useSelector } from 'react-redux';
import { moveStudents } from '@/lib/features/students/studentSlice';

export default function ColumnSwitch() {

    const currentlySelected = useSelector((state) => state.select.value);
    const dispatch = useDispatch();
    

    function handleSwitch() {
        // console.log(`Currently Selected: ${currentlySelected}`)
        dispatch(moveStudents(currentlySelected))
    }

    return (
        <div className="mx-3 outline outline-1 md:w-52 rounded p-3 h-24 flex items-center justify-center">
            <button
                className='bg-blue-700 rounded text-white hover:bg-blue-800 focus:ring-2 focus:ring-slate-500'
                onClick={() => handleSwitch()}
            >
                <ArrowLeftIcon className='w-8 h-8' />
                Switch
                <ArrowRightIcon className='w-8 h-8' />
            </button>
        </div>
    )
}