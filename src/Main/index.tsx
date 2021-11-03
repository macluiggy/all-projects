import projects from '../data/projects'
console.log(projects)
const Main = () => {
	return (
		<div>
			<div className="technologies">hola</div>
			<div className='projects'>
				{projects.map((project: Project) => <Project {...project} />)}
			</div>
		</div>
	);
};
interface Project {
	title: string;
	img: string;
	description: string;
	technologies: string[];
}
const Project = ({ title, img, description, technologies}: Project) => {
	return (
		<div className='project_container'>
			<h2>{title}</h2>
			<figure>
				<img src={'img'} alt="" />
			</figure>
			<p>{description}</p>
			<div>
				<button>Source code ></button>
				<button>Project live</button>
			</div>
		</div>
	)
}
export default Main;
