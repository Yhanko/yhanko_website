import PortfolioCard, { PortfolioCardProps } from "../components/PortfolioCard"

const Portfolio: React.FC = () => {
	const portfolioInfo: PortfolioCardProps[] = [
		{
			imgSrc: "src/assets/Portfolio/port1.png",
			altText: "Projecto aleatório 1",
			link: "/",
		},
		{
			imgSrc: "src/assets/Portfolio/port2.png",
			altText: "Projecto aleatório 2",
			link: "/",
		},
	]

	return (
		<section className="default-layout-vertical" id="portfolio">
			<div className="title-subtitle">
				<h1 className="text-3xl font-bold">
					Nosso Incrível <span className="text-primary">Portfólio</span>
				</h1>
				<p>
					Ajudamos nossos clientes a aumentar seus lucros com sites claros,
					profissionais e eficientes. Desenvolvemos plataformas com excelência,
					focadas em qualidade e resultados.
				</p>
			</div>
			<div className="grid grid-cols-3 w-full gap-8">
				{portfolioInfo.map((portfolio, index) => (
					<PortfolioCard
						key={index}
						imgSrc={portfolio.imgSrc}
						altText={portfolio.altText}
						link={portfolio.link}
					/>
				))}
			</div>
		</section>
	)
}

export default Portfolio
