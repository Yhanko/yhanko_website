import PortfolioCard, { PortfolioCardProps } from "../components/PortfolioCard"

import imagem1 from "../../src/assets/Portfolio/port1.png";
import imagem2 from "../../src/assets/Portfolio/port2.png";

const Portfolio: React.FC = () => {
	const portfolioInfo: PortfolioCardProps[] = [
		{
			imgSrc: imagem1,
			altText: "Projecto aleatório 1",
			link: "/",
		},
		{
			imgSrc: imagem2,
			altText: "Projecto aleatório 2",
			link: "/",
		},
	]

	return (
		<section className="default-layout-vertical" id="portfolio">
			<div className="title-subtitle max-lg:w-full">
				<h1 className="text-3xl font-bold">
					Nosso Incrível <span className="text-primary">Portfólio</span>
				</h1>
				<p className="max-lg:text-xs">
					Ajudamos nossos clientes a aumentar seus lucros com sites claros,
					profissionais e eficientes. Desenvolvemos plataformas com excelência,
					focadas em qualidade e resultados.
				</p>
			</div>
			<div className="lg:grid lg:grid-cols-3 flex overflow-x-auto w-full gap-8 max-lg:gap-4">
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
