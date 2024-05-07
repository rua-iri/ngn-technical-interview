'use client'
import StudentCard from "@/components/StudentCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStudents } from "@/lib/features/students/studentSlice";
import ListControls from "./ListControls";
import ColumnSwitch from "./ColumnSwitch";

async function getStudentsData(dispatch) {
    const baseAPIURL = "https://flat-leaf-ba02.rory-mcguigan.workers.dev/";
    const apiEndpoints = ["api/students1", "api/students2"];

    for (let i = 0; i < apiEndpoints.length; i++) {
        fetch(baseAPIURL + apiEndpoints[i])
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                dispatch(setStudents(data))
            })
    }
}

export default function StudentsTable() {

    const dispatch = useDispatch();

    useEffect(() => {
        getStudentsData(dispatch);
    }, [getStudentsData]);

    const studentsArray = useSelector((state) => state.student);

    return (
        <div>
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
                <div>
                    <ColumnSwitch />
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
            <ListControls getStudentsData={getStudentsData} />
        </div>
    )
}