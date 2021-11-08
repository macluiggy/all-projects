import projectsInitial from '../data/projects'
import techs, {tech_icons} from '../data/technologies'
import './main.scss'
import Project from '../Project'
import React, { FunctionComponent, FC, useState, useEffect, MouseEvent, ChangeEvent } from 'react'
//import technologies from '../data/technologies'
//console.log(projects)
interface Projects {
	title: string;
	img: string;
	description: string;
	icon_name: string[];
	"source_code": string;
	project_live: string;
	technologies: string[];
}
interface UpdateCurrentTech {target: { value: string }}
const Main:FunctionComponent = () => {
	const [projects, setProjects] = useState(projectsInitial)
	const [currentTech, setCurrentTech] = useState('')
	
	const fn = (e: React.MouseEvent<HTMLInputElement, globalThis.MouseEvent>) => {
		//
		const target = e.target as HTMLButtonElement;
		//console.log(target.value);
		setCurrentTech(target.value)
		//console.log(currentTech);
		
	}
	const updateProjects = () => {
		let newProjects = projects.filter((project) => {
			//console.log(project.technologies.join(' ').toLocaleLowerCase())
			return project
				.technologies
				.join(' ')
				.toLocaleLowerCase()
				.includes(currentTech.toLocaleLowerCase())
		})
		//console.log('holaaa');
		
		//console.log(newProjects);
		setProjects(newProjects)
	}
	useEffect(() => {
		if (!currentTech) {
			return setProjects(projectsInitial)
		}
		updateProjects()
	}, [currentTech])
	return (
		<div className="main_container">
			<div className="technologies">
				<Technologies fn={fn} />
			</div>
			<div className='projects'>
				{projects.map((project: Projects) => <Project {...project} />)}
			</div>
		</div>
	);
};

const Technologies: FC<any> = ({fn}) => {
	return (
		<div>
			{
				techs.map((tech: string, i) => {
					return (
						<button key={i} type="button" value={tech} onClick={fn}>
							<span className="iconify" data-icon={tech_icons[i]} data-inline="false"></span>
								{tech}
						</button>
					)
				})
			}
		</div>

	)
}


export default Main;
