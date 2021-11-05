import projectsInitial from '../data/projects'
import techs, {tech_icons} from '../data/technologies'
import './main.scss'
import Project from '../Project'
import { FunctionComponent, FC, useState, useEffect, MouseEvent, ChangeEvent } from 'react'
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
	
	const fn = (e: MouseEvent<HTMLInputElement>) => {
		const target = e.target
		console.log(target);
		
	}
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
						<div>
							<input type="button" value={tech} onClick={fn}/>
							<span className="iconify" data-icon={tech_icons[i]} data-inline="false"></span>
								{tech}
						</div>
					)
				})
			}
		</div>

	)
}


export default Main;
