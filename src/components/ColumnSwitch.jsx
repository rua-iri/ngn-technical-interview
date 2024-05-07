import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useDispatch, useSelector } from 'react-redux';
import { moveStudents } from '@/lib/features/students/studentSlice';
import { resetSelect } from '@/lib/features/select/selectSlice';

export default function ColumnSwitch() {

    const currentlySelected = useSelector((state) => state.select.value);
    const studentsArray = useSelector((state) => state.student);
    const dispatch = useDispatch();


    function handleSwitch(isMoveFirst) {
        // console.log(`Currently Selected: ${currentlySelected}`)

        if (currentlySelected === null) { return }

        // return from function if moving to same column
        for (let i = 0; i < studentsArray.length; i++) {
            if (studentsArray[i].id == currentlySelected && studentsArray[i].isFirst == + isMoveFirst) {
                dispatch(resetSelect())
                return
            }
        }

        dispatch(moveStudents(currentlySelected))
        dispatch(resetSelect())
    }

    return (
        <div className="mx-3 outline outline-1 md:w-52 rounded p-3 h-24 columns-2 flex items-center justify-center">
            <div className="mx-3">
                <button
                    className='bg-blue-700 rounded text-white hover:bg-blue-800 focus:ring-2 focus:ring-slate-500 px-3'
                    onClick={() => handleSwitch(true)}
                >
                    <ArrowLeftIcon className='w-12 h-12' />
                </button>
            </div>
            <div className="mx-3">
                <button
                    className='bg-blue-700 rounded text-white hover:bg-blue-800 focus:ring-2 focus:ring-slate-500 px-3'
                    onClick={() => handleSwitch(false)}
                >
                    <ArrowRightIcon className='w-12 h-12' />
                </button>
            </div>
        </div>
    )
}