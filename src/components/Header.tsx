import React from "react"
import { scrollToItem } from "./ScrollToFunction"

const Header: React.FC = () => {
	const navlist = [
		{ name: "Início", link: "/", id: "banner" },
		{ name: "Sobre nós", link: "/", id: "about-us" },
		{ name: "Serviços", link: "/", id: "services" },
		{ name: "Portfólio", link: "/", id: "portfolio" },
		{ name: "Contactos", link: "/", id: "footer" },
	]

	return (
		<header className="flex w-full items-center justify-between px-24 py-4 max-w-7xl mx-auto">
			<a href="/">
				<img src="./logo.png" alt="" className="w-32" />
			</a>

			<ul className="flex items-center  text-whitePrimary gap-4 w-1/2 justify-between">
				{navlist.map((items, index) => (
					<li
						key={index}
						className="hover:scale-110 transition-all duration-300"
						onClick={() => scrollToItem(items.id)}
					>
						{items.name}
					</li>
				))}
			</ul>

			<button className="btn-action">Fale Connosco</button>
		</header>
	)
}

export default Header
