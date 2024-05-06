'use client'
import StudentCard from "@/components/StudentCard";
import { useSelector } from "react-redux";

export default function StudentsTable() {


    const studentsArray = useSelector((state) => state.student);

    return (
        <div className="columns-2 my-8 flex justify-center">
            <div className="mx-3 bg-slate-400 rounded p-3">
                <h3 className="bg-white text-center">Box 1</h3>

                {studentsArray.map((student, index) => {
                    if (student.isFirst) {
                        return (
                            <StudentCard key={index} studentData={student} />
                        )
                    }
                })}
            </div>
            <div className="mx-3 bg-slate-400 rounded p-3">
                <h3 className="bg-white text-center">Box 2</h3>

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