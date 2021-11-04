import projects from '../data/projects'
import './main.scss'
import Project from '../Project'
console.log(projects)
const Main = () => {
	return (
		<div className="main_container">
			<div className="technologies">hola</div>
			<div className='projects'>
				{projects.map((project: Projects) => <Project {...project} />)}
			</div>
		</div>
	);
};
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