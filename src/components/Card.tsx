export default function Card({ project, title, color }) {
	return (
		<div className="mb-9 transform transition hover:-translate-y-3"> 
			{/* <div className="w-64 h-64 bg-gradient-to-tr from-blue-100 to-blue-300"></div> */}
			<div className={`${color}-gradient w-full h-64 flex flex-col text-black items-start justify-end p-10`}>
				<h1 className="font-bold text-2xl mt-4">{ project }</h1>
				<h4 className="text-lg">{ title }</h4>
			</div>
		</div>
	)
}
