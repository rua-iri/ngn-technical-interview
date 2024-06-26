'use client'
import StudentCard from "@/components/StudentCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStudents } from "@/lib/features/students/studentSlice";
import ListControls from "./ListControls";
import ColumnSwitch from "./ColumnSwitch";

async function getStudentsData(dispatch) {
    const baseAPIURL = "/";
    const apiEndpoints = ["api/students1", "api/students2"];

    for (let i = 0; i < apiEndpoints.length; i++) {
        fetch(baseAPIURL + apiEndpoints[i])
            .then((response) => { return response.json()})
            .then((data) => {
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
            <div className="columns-3 my-8 flex justify-center">
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

                <ColumnSwitch />

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