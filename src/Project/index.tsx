import './project.scss'
interface Projects {
	title: string;
	img: string;
	description: string;
	technologies: string[];
	"source_code": string;
	project_live: string;
}
const Project = ({ title, img, description, technologies, project_live, source_code}: Projects) => {
	return (
		<div className='project_container'>
			<h2>{title}</h2>
			<figure className='img_container'>
				<img src={img} alt="" />
			</figure>
			<p>{description}</p>
			<div className='bottom_container'>
				<div className='buttons_container'>
					<a href={source_code}>Source code &gt;</a>
					<a href={project_live}>Project live</a>
				</div>
				<figure className='icons'>
					{technologies.map(icon => {
						return <span className="iconify" data-icon={icon} data-inline="false"></span>
					})}
				</figure>
			</div>
		</div>
	)
}

export default Project