import projects from '../data/projects'
import techs from '../data/technologies'
import './main.scss'
import Project from '../Project'
console.log(projects)
const Main = () => {
	return (
		<div className="main_container">
			<div className="technologies">
				{/*<Technologies /> */}
			</div>
			<div className='projects'>
				{projects.map((project: Projects) => <Project {...project} />)}
			</div>
		</div>
	);
};

const Technologies = () => {
	return (
		<div>
			{ /*techs.map((tech, i) => {
				return <span title={tech.technologies[i]} className="iconify" data-icon={tech.icon_name[i]} data-inline="false"></span>
			}) */}
		</div>

	)
}
interface Projects {
	title: string;
	img: string;
	description: string;
	icon_name: string[];
	"source_code": string;
	project_live: string;
	technologies: string[];
}

export default Main;
