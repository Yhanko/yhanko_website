import React, { useState } from "react"
import { scrollToItem } from "./ScrollToFunction"
import { CtaButton } from "./CtaButton"
import { IoClose } from "react-icons/io5"

const Header: React.FC = () => {
	const [isMenuOpen, setMenuOpen] = useState(false)

	const navlist = [
		{ name: "Início", link: "/", id: "banner" },
		{ name: "Sobre nós", link: "/", id: "about-us" },
		{ name: "Serviços", link: "/", id: "services" },
		{ name: "Portfólio", link: "/", id: "portfolio" },
		{ name: "Contactos", link: "/", id: "footer" },
	]

	const handleMenuToggle = (id: string) => {
		setMenuOpen(!isMenuOpen)
		if (id) scrollToItem(id)
	}

	return (
		<header className="flex w-full items-center justify-between lg:px-24 lg:py-4 px-9 py-10 max-w-7xl mx-auto">
			<a href="/">
				<img src="/logo.png" alt="" className="w-32 max-lg:hidden" />
				<img src="/logo.svg" alt="" className="w-12 lg:hidden" />
			</a>

			<ul
				className={`flex items-center text-whitePrimary gap-4 max-lg:flex-col fixed lg:static 
					${isMenuOpen ? "right-0" : "-right-full"} 
					top-0 h-screen lg:h-auto bg-blackPrimary lg:bg-transparent 
					py-9 z-50 lg:z-auto px-9 lg:px-0 w-2/3 lg:w-auto 
					transition-transform duration-500 ease-in-out transform`}
			>
				<button
					className="mb-2 lg:hidden flex justify-end w-full"
					onClick={() => setMenuOpen(false)}
				>
					<IoClose className="text-5xl text-primary" />
				</button>
				{navlist.map((items, index) => (
					<li
						key={index}
						className="hover:scale-110 transition-all cursor-pointer duration-300 max-lg:hover:bg-secondary text-center max-lg:px-4 max-lg:py-2 max-lg:rounded-lg max-lg:w-full"
						onClick={() => handleMenuToggle(items.id)}
					>
						{items.name}
					</li>
				))}
			</ul>

			<div className="max-lg:hidden">
				<CtaButton />
			</div>

			<button onClick={() => setMenuOpen(!isMenuOpen)} className="lg:hidden">
				<img src="./src/assets/icons/menu.svg" alt="Menu" />
			</button>
		</header>
	)
}

export default Header
