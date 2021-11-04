interface Project {
	title: string;
	img: string;
	description: string;
	icon_name: string[];
	technologies: Array<string>;
	"source_code": string;
	project_live: string;
}
type Data = Project[] // Array<Project>

const data: Data = [
	{
		title: 'Full Stack Movie Reviews App',
		img: 'https://macluiggy.github.io/images/insure.png',
		description: 'This MERN app fetches movies from a Mongo database, you can also login and post a review, update delete the reviews you have made in the database.',
		icon_name: ['vscode-icons:file-type-mongo', 'simple-icons:express', "logos:react", "vscode-icons:file-type-node", "vscode-icons:file-type-node",],
		"source_code": '',
		project_live: '',
		technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
	},
	{
		title: 'Full Stack Movie Reviews App',
		img: 'https://macluiggy.github.io/images/movie-reviews.png',
		description: 'This MERN app fetches movies from a Mongo database, you can also login and post a review, update delete the reviews you have made in the database.',
		icon_name: ['vscode-icons:file-type-mongo', 'simple-icons:express', "logos:react", "vscode-icons:file-type-node"],
		"source_code": '',
		project_live: '',
		technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
	},
	{
		title: 'Full Stack Movie Reviews App',
		img: 'https://macluiggy.github.io/images/countdown_timer.jpeg',
		description: 'This MERN app fetches movies from a Mongo ',
		icon_name: ['vscode-icons:file-type-mongo', 'simple-icons:express', "logos:react", "vscode-icons:file-type-node"],
		"source_code": '',
		project_live: '',
		technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
	},
]

export default data