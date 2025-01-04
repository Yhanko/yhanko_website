export interface CardProps {
	imgSrc: string
	title: string
	description: string
}

const ServiceCard: React.FC<CardProps> = ({ imgSrc, title, description }) => {
	function removeLyrics(lyrics: string): string {
		if (lyrics.length < 80) {
			return lyrics
		}

		return lyrics.slice(0, 100) + ""
	}

	return (
		<div className="flex flex-col gap-2 text-white rounded-lg border border-primary p-4 hover:-translate-y-2 transition-all ease-in-out duration-500">
			<img src={imgSrc} alt="Icon" className="w-12" />

			<h2 className="">{title}</h2>

			<p className="text-xs text-[#718096]">{removeLyrics(description)}</p>
		</div>
	)
}

export default ServiceCard
