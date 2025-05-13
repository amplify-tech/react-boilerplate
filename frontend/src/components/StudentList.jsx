import React, {useState, useEffect} from "react";
import {getStudents} from "../services/studentService"
import { Container, Typography, List, CircularProgress, ListItem, ListItemText } from "@mui/material"
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
			<Container>
				<div className="LoaderContainer">
					<CircularProgress />
				</div>
			</Container>
		);
	}

	return (
		<Container className="studentContainer">
			<Typography variant="h4">
				Student List
			</Typography>
			<List>
				{students.map((student) => (
					<ListItem key={student.id}  divider>
						<ListItemText 
							primary={`${student.id} - ${student.name}`}
							secondary={`Email: ${student.email}`}
						/>
					</ListItem>
				))}
			</List>
		</Container>
	);
};