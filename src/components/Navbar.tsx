import React, { useState } from 'react'
import menu from '../assets/Menu.svg'

import Menu from './Menu'

export default function Navbar() {
	const [ expanded, setExpanded ] = useState(false)

	return (
		<nav className="flex justify-between items-center mb-11">
			<span className="font-bold">andrés.</span>

			<img className="w-6" src={menu} onClick={() => setExpanded(!expanded) } />
			<Menu styles={expanded ? "block" : "transform -translate-y-full" } setExpanded={setExpanded} expanded={expanded} />
		</nav>
	)
}
