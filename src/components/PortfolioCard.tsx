import React from "react"

export interface PortfolioCardProps {
	imgSrc: string
	altText: string
	link: string
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
	imgSrc,
	altText,
	link,
}) => {
	return (
		<div className="max-lg:w-full max-lg:min-w-72 bg-gradient-to-b from-primary/10 to-white/0 p-4 rounded-lg transition-all duration-500 hover:cursor-pointer relative overflow-hidden">
			<img src={imgSrc} alt={altText} className="w-full rounded-lg" />

			<div className="w-full absolute top-0 left-0 h-full flex items-center justify-center opacity-0 hover:opacity-100 hover:bg-primary/25 rounded-lg transition-all duration-500">
				<a href={link} className="btn-action">
					Ver mais
				</a>
			</div>
		</div>
	)
}

export default PortfolioCard
