import quotes from "../assets/icons/quotes.svg"

export interface FeedbackCardProps {
	imgSrc: string
	name: string
	role: string
	feedback: string
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
	imgSrc,
	name,
	role,
	feedback,
}) => {
	return (
		<div className="p-5 flex flex-col gap-4 rounded-lg max-lg:rounded-2xl border border-primary bg-blackSecondary cursor-default">
			<div className="flex justify-between gap-2">
				<div className="flex gap-2 items-center">
					{" "}
					<img src={imgSrc} alt="" className="w-16 max-lg:w-12" />
					<div className="flex flex-col gap-2 w-full">
						<p className="font-bold text-sm max-lg:text-sm">{name}</p>
						<p className="text-xs">{role}</p>
					</div>
				</div>

				<img src={quotes} alt="Quotes" className="w-12" />
			</div>

			<p className="text-sm max-lg:text-xs">{feedback}</p>
		</div>
	)
}

export default FeedbackCard
