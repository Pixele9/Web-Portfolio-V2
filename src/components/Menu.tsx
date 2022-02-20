export default function Menu({ styles, setExpanded, expanded }) {
	return (
		<div className={`flex flex-col p-8 bg-white rounded-b-2xl fixed top-0 left-0 w-full shadow-xl transition duration-500 ease-in-out ${styles}`}>
			<h1 className="font-bold text-2xl mb-4 text-black">Sections</h1>
			<ul className="list-none text-black">
				<li className="listItem bg-gradient-to-r from-purple-200 to-purple-200 bg-growing-underline inline-block">
					<a>Home</a>
				</li>
				<br />

				<li className="listItem bg-gradient-to-r from-purple-200 to-purple-200 bg-growing-underline inline-block mt-3">
					<a>Experience</a>
				</li>

				<br />
				<li className="listItem bg-gradient-to-r from-purple-200 to-purple-200 bg-growing-underline inline-block mt-3">
					<a>Skills</a>
				</li>
			</ul>

			<button className="rounded-xl bg-gray-200 text-gray-400 px-6 py-2 mt-8 -mb-3" onClick={() => setExpanded(!expanded)}>Close</button>
		</div>
	)
}
