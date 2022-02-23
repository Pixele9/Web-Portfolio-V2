import { useEffect, useState } from "react";

import { db } from "../firebaseDB";

import { collection, query, onSnapshot, orderBy, where } from "firebase/firestore";

import SkillCard from "../components/SkillCard";

export default function Skills() {
	const [skills, setSkills] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getExperience = async () => {
			setLoading(true);
			
			const q = query(
				collection(db, "skills")
			)

			onSnapshot(q, (snapShot) => {
				let skillsArr: Object[] = [];
				snapShot.forEach((doc) => {
					const data = doc.data();
					skillsArr.push(data);
					console.log("DATA: ", data);
				});
				setSkills(skillsArr);
			});
			setLoading(false);
		};
		getExperience();
	}, []);

	return (
		<div className="mt-12">
			<h1 className="text-4xl font-bold mt-3">SKILLS</h1>

			<h4 className="mt-7 text-purple-400 font-light text-sm">
				EXPERIENCED WITH
			</h4>
			<div className="h-1 w-10 bg-purple-400 mt-2 mb-4"></div>

			<div className="flex flex-wrap gap-4">
				{ skills.map(el => (
					<SkillCard key={el.title + Math.random()} title={el.title} src={el.src} />
				))}
			</div>
		</div>
	);
}
