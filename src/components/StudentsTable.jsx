'use client'
import StudentCard from "@/components/StudentCard";
import { useSelector } from "react-redux";

export default function StudentsTable() {


    const studentsArray = useSelector((state) => state.student);

    return (
        <div className="columns-2 my-8 flex justify-center">
            <div className="mx-3 outline outline-1 md:w-52 rounded p-3">
                <h3 className="text-center font-semibold mb-6">Box 1</h3>

                {studentsArray.map((student, index) => {
                    if (student.isFirst) {
                        return (
                            <StudentCard key={index} studentData={student} />
                        )
                    }
                })}
            </div>
            <div className="mx-3 outline outline-1 md:w-52 rounded p-3">
                <h3 className="text-center font-semibold mb-6">Box 2</h3>

                {studentsArray.map((student, index) => {
                    if (!student.isFirst) {
                        return (
                            <StudentCard key={index} studentData={student} />
                        )
                    }
                })}
            </div>
        </div>
    )
}