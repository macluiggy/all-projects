import projectsInitial from '../data/projects'
import techs, {tech_icons} from '../data/technologies'
import './main.scss'
import Project from '../Project'
import { FunctionComponent, FC, useState, useEffect, MouseEvent } from 'react'
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
interface UpdateCurrentTech {target: { value: string}}
const Main:FunctionComponent = () => {
	const [projects, setProjects] = useState(projectsInitial)
	const [currentTech, setCurrentTech] = useState('null')
	
	console.log(currentTech)
	return (
		<div className="main_container">
			<div className="technologies">
			{
				techs.map((tech: string, i) => {
					return (
						<button type='button' value={tech} onClick={(e: MouseEvent) => {
							alert(e)
						}}>
							<span className="iconify" data-icon={tech_icons[i]} data-inline="false"></span>
							{tech}
						</button>
					)
				})
			}
			</div>
			<div className='projects'>
				{projects.map((project: Projects) => <Project {...project} />)}
			</div>
		</div>
	);
};

const Technologies: FC<any> = (onUpdateCurrentTech) => {
	return (
		<div>
			{
				techs.map((tech: string, i) => {
					return (
						<button type='button' value={tech} onClick={onUpdateCurrentTech}>
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
