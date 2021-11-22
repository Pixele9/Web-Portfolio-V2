import Me from '../assets/3x@Me.png';
import Contact from './Contact';

export default function Header() {
	return (
		<div className="flex flex-col">
			<h1 className="text-4xl font-bold leading-snug">Hi! I’m Andrés<br /> Leal 👋</h1>
			{/* <h4 className="mt-3">User focused Full Stack <br />developer.</h4> */}
			<h4 className="mt-3">User focused Full Stack <br />developer.<br /> In love with startups ⚡️</h4>
			<Contact />

			<img src={Me} className="right-1 top-4/5 w-56 self-end"/>
		</div>
	)
}
