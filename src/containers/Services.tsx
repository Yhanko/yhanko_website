import ServiceCard, { CardProps } from "../components/ServiceCard"

import designGrafico from "../assets/icons/ServicesCard/design-grafico.svg"
import desenvolvimentoWeb from "../assets/icons/ServicesCard/desenvolvimento-web.svg"
import desenvolvimentoDesktop from "../assets/icons/ServicesCard/desenvolvimento-desktop.svg"
import desenvolvimentoMobile from "../assets/icons/ServicesCard/desenvolvimento-mobile.svg"
import uiUxDesign from "../assets/icons/ServicesCard/ui-ux-design.svg"
import marketingDigital from "../assets/icons/ServicesCard/marketing-digital.svg"

const servicesInfo: CardProps[] = [
	{
		imgSrc: designGrafico,
		title: "Design Gráfico",
		description:
			"Criação de Identidade Visual, Post para Redes Sociais, Flyers e muito mais.",
	},
	{
		imgSrc: desenvolvimentoWeb,
		title: "Desenvolvimento Web",
		description:
			"Criação de Landing Pages, Websites Empresariais, Websites Pessoais, entre outros.",
	},
	{
		imgSrc: desenvolvimentoDesktop,
		title: "Desenvolvimento Desktop",
		description:
			"Desenvolvimento de Softwares, Sistemas Integrados, Softwares Inovadores e muito mais.",
	},
	{
		imgSrc: desenvolvimentoMobile,
		title: "Desenvolvimento Mobile",
		description:
			"Criação de Aplicativos para Dispositivos Móveis, Softwares para o Domínio de Negócios e muito mais.",
	},
	{
		imgSrc: uiUxDesign,
		title: "UI/UX Design",
		description:
			"Criação de Protótipos para Ideias de Negócios, Design de Interface e Experiências de Usuário.",
	},
	{
		imgSrc: marketingDigital,
		title: "Marketing Digital",
		description:
			"Marketing de conteúdo, SEO e tráfego orgânico, Gerenciamento de anúncios e tráfego pago, E-mail marketing / Newsletter, Social media ou marketing de mídia social.",
	},
]

const Services: React.FC = () => {
	return (
		<section className="default-layout flex-col text-white" id="services">
			<div className="title-subtitle max-lg:w-full">
				<h1 className="text-3xl text-primary font-bold">Serviços</h1>
				<p className="text-base max-lg:text-xs">
					Oferecemos soluções completas e personalizadas para atender às suas
					necessidades, desde o desenvolvimento de projetos criativos até a
					entrega de resultados que superam expectativas.
				</p>
			</div>

			<div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
