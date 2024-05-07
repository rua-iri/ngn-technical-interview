"use client"
import { useDispatch } from 'react-redux';
import { removeSelect, pushSelect } from '@/lib/features/select/selectSlice';
import { useSelector } from 'react-redux';

export default function StudentCard({ studentData }) {

    const { id, name, mark, isFirst } = studentData;

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
    const currentlySelected = useSelector((state) => state.select.value);

    function handleSelect() {
        if (currentlySelected.includes(id)) {
            dispatch(removeSelect(id))
        } else {
            dispatch(pushSelect(id))
        }
    }


    return (
        <div className='flex items-center bg-zinc-800 px-2 text-gray-100 hover:bg-zinc-700'>
            <input
                id={`buttonfor-${id}`}
                type="checkbox"
                value={id}
                name="asdf"
                checked={currentlySelected.includes(id)}
                className='h-5 w-5'
                onChange={() => handleSelect()}
            />
        </div>
    )
}