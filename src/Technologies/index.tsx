import techs, {tech_icons} from '../data/technologies'
import { FC } from 'react';

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

export default Technologies