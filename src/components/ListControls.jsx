'use client';

export default function ListControls() {

    const handleReset = () => {
        alert("Handle Reset Functionality")

        // TODO: use reset reducer here
    }

    return (
        <div className="flex justify-center">
            <button className="bg-red-900 text-slate-50 px-3 py-2 rounded-md hover:opacity-70" onClick={() => handleReset()}>
                Reset
            </button>
        </div>
    )
}