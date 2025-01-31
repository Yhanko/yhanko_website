const Footer: React.FC = () => {
	return (
		<footer
			className="flex flex-col py-12 min-h-[50vh] text-white gap-8"
			id="footer"
		>
			<div className="w-full flex max-lg:flex-col max-lg:gap-10 max-lg:text-center max-lg:items-center justify-between items-start px-24 py-4 max-lg:px-9 max-lg:py-2 max-w-7xl mx-auto">
				<img
					src="/logo.png"
					alt="Logo Yhanko"
					className="object-contain w-32"
				/>

				<ul className="flex flex-col gap-4">
					<li className="font-bold">Serviços</li>
					{[
						"Design Gráfico",
						"Design UI/UX",
						"Desenvolvimento Desktop",
						"Desenvolvimento Mobile",
						"Desenvolvimento Web",
						"Marketing Digital",
					].map((items, index) => (
						<li
							key={index}
							className="cursor-pointer hover:scale-105 transition-all duration-500"
						>
							{items}
						</li>
					))}
				</ul>

				<ul className="flex flex-col gap-4">
					<li className="font-bold">Contacte-nos</li>
					{[
						{ link: "tel:+947545234", text: "+244 947 545 234" },
						{ link: "mailto: geral@yhanko.ao", text: "geral@yhanko.ao" },
					].map((item, index) => (
						<li
							key={index}
							className="cursor-pointer hover:scale-105 transition-all duration-500"
						>
							<a href={item.link}>{item.text}</a>
						</li>
					))}
				</ul>

				<ul className="flex flex-col gap-4">
					<li className="font-bold">Siga-nos</li>

					<div className="flex gap-2">
						{[
							{
								imgSrc: "src/assets/icons/facebook.svg",
								link: "https://www.facebook.com/",
							},
							{
								imgSrc: "src/assets/icons/instagram.svg",
								link: "https://www.instagram.com/",
							},
							{
								imgSrc: "src/assets/icons/linkedin.svg",
								link: "https://www.linkedin.com/",
							},
						].map((item, index) => (
							<a
								key={index}
								href={item.link}
								target="_blank"
								className="hover:scale-125 transition-all duration-500"
							>
								<img src={item.imgSrc} alt="" />
							</a>
						))}
					</div>
				</ul>
			</div>
			<hr className="w-full border border-primaryOpacity" />
			<div className="max-lg:px-9">
				<p className="text-center text-xs ">
					© 2024 Global Services Corporation. Todos os direitos reservados.
				</p>
			</div>
		</footer>
	)
}

export default Footer
