import React, {useState, useEffect} from "react";
import {getStudents} from "../services/studentService"
import "./StudentList.css";

export default function StudentList() {
	const [students, setStudents] = useState([]);
	const [loading, setLoading] = useState(true);

	
	useEffect(() => {
		const fetchStudent = async () => {
			try {
				const data = await getStudents();
				setStudents(data);
			} catch(error) {
				console.error("Failed to load student list", error);
			} finally {
				setLoading(false);
			}
		} 

		fetchStudent();
	}, []);

	if(loading){
		return (
			<div>Loading...</div>
		);
	}

	return (
		<div>
			<ul>
				{students.map((student) => (
					<li key={student.id} className="studentBox" >{`${student.id} - ${student.name}`}</li>
				))}
			</ul>
		</div>
	);
};