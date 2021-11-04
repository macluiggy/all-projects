interface Project {
	title: string;
	img: string;
	description: string;
	technologies: string[];
	"source_code": string;
	project_live: string;
}
type Data = Project[] // Array<Project>

const data: Data = [
	{
		title: 'Full Stack Movie Reviews App',
		img: 'https://macluiggy.github.io/images/insure.png',
		description: 'This MERN app fetches movies from a Mongo database, you can also login and post a review, update delete the reviews you have made in the database.',
		technologies: ['vscode-icons:file-type-mongo', 'simple-icons:express', "logos:react", "vscode-icons:file-type-node", "vscode-icons:file-type-node",],
		"source_code": '',
		project_live: '',
		
	},
	{
		title: 'Full Stack Movie Reviews App',
		img: 'https://macluiggy.github.io/images/movie-reviews.png',
		description: 'This MERN app fetches movies from a Mongo database, you can also login and post a review, update delete the reviews you have made in the database.',
		technologies: ['vscode-icons:file-type-mongo', 'simple-icons:express', "logos:react", "vscode-icons:file-type-node"],
		"source_code": '',
		project_live: '',

	},
	{
		title: 'Full Stack Movie Reviews App',
		img: 'https://macluiggy.github.io/images/countdown_timer.jpeg',
		description: 'This MERN app fetches movies from a Mongo ',
		technologies: ['vscode-icons:file-type-mongo', 'simple-icons:express', "logos:react", "vscode-icons:file-type-node"],
		"source_code": '',
		project_live: '',

	},
]

export default data