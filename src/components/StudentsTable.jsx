'use client'
import StudentCard from "@/components/StudentCard";
import { useSelector } from "react-redux";

export default function StudentsTable() {

    const students = [
        {
            "id": 1,
            "name": "first student",
            "mark": 80,
            "isFirst": true
        },
        {
            "id": 2,
            "name": "second student",
            "mark": 70,
            "isFirst": false
        },
        {
            "id": 3,
            "name": "third student",
            "mark": 60,
            "isFirst": true
        },
        {
            "id": 4,
            "name": "fourth student",
            "mark": 50,
            "isFirst": false
        },
        {
            "id": 5,
            "name": "fifth student",
            "mark": 40,
            "isFirst": true
        },
        {
            "id": 6,
            "name": "sixth student",
            "mark": 30,
            "isFirst": false
        }
    ]

    // const students = useSelector((state) => state.student)
    // console.log(students)


    return (
        <div className="columns-2 my-5 flex justify-center">
            <div className="mx-3 bg-slate-400 rounded p-3">
                <h3 className="bg-white text-center">Box 1</h3>
                <StudentCard studentData={students[0]} />
                <StudentCard studentData={students[2]} />
            </div>
            <div className="mx-3 bg-slate-400 rounded p-3">
                <h3 className="bg-white text-center">Box 2</h3>
                <StudentCard studentData={students[1]} />
                <StudentCard studentData={students[3]} />
            </div>
        </div>
    )
}