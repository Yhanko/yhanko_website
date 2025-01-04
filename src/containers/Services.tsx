import ServiceCard, { CardProps } from "../components/ServiceCard"

const Services: React.FC = () => {
	const servicesInfo: CardProps[] = [
		{
			imgSrc: `src/assets/icons/ServicesCard/design-grafico.svg`,
			title: "Design Gráfico",
			description:
				"Criação de Identidade Visual, Post para Redes Sociais, Flyers e muito mais.",
		},
		{
			imgSrc: "src/assets/icons/ServicesCard/desenvolvimento-web.svg",
			title: "Desenvolvimento Web",
			description:
				"Criação de Landing Pages, Websites Empresariais, Website Pessoal, entre outros.",
		},
		{
			imgSrc: "src/assets/icons/ServicesCard/desenvolvimento-desktop.svg",
			title: "Desenvolvimento Desktop",
			description:
				"Desenvolvimento de Softwares, Sistemas Integrados, Softwares Inovadores e muito mais.",
		},
		{
			imgSrc: "src/assets/icons/ServicesCard/desenvolvimento-mobile.svg",
			title: "Desenvolvimento Mobile",
			description:
				"Criação de Aplicativos para Dispositivos Móveis, Softwares para o Domínio de Negócios e muito mais",
		},
		{
			imgSrc: "src/assets/icons/ServicesCard/ui-ux-design.svg",
			title: "UI/UX Design",
			description:
				"Criação de Protótipos para Ideias de Negócios, Design de Interface e Experiências de Usuário.",
		},
		{
			imgSrc: "src/assets/icons/ServicesCard/marketing-digital.svg",
			title: "Marketing Digital",
			description:
				"Marketing de conteúdo, Search Engine Optimization (SEO) e tráfego orgânico, Gerenciamento de anúncios e tráfego pago, E-mail marketing / Newsletter, Social media ou marketing de mídia social",
		},
	]

	return (
		<section className="default-layout flex-col text-white" id="services">
			<div className="title-subtitle">
				<h1 className="text-3xl text-primary font-bold">Serviços</h1>
				<p className="text-base">
					Oferecemos soluções completas e personalizadas para atender às suas
					necessidades, desde o desenvolvimento de projetos criativos até a
					entrega de resultados que superam expectativas
				</p>
			</div>

			<div className="w-full grid grid-cols-3 gap-8">
				{servicesInfo.map((service, index) => (
					<ServiceCard
						key={index}
						imgSrc={service.imgSrc}
						title={service.title}
						description={service.description}
					/>
				))}
			</div>
		</section>
	)
}

export default Services
