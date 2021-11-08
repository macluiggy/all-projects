import techs, {tech_icons} from '../data/technologies'
import { FC } from 'react';
import './technologies.scss'

const Technologies: FC<any> = ({fn}) => {
	return (
		<div className="technologies_buttons">
            <h2>ALL PROJECTS</h2>
            <p>Here you can find all my finished projects. Click on a technology to see only those projects where it has been used.</p>
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

export default Technologies