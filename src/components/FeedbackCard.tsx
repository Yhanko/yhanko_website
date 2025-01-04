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
		<div className="p-5 flex flex-col gap-4 rounded-lg border border-primary bg-blackSecondary cursor-default">
			<div className="flex justify-between gap-2">
				<div className="flex gap-2 items-center">
					{" "}
					<img src={imgSrc} alt="" className="w-16"/>
					<div className="flex flex-col gap-2 w-full">
						<p className="font-bold text-sm">{name}</p>
						<p className="text-xs">{role}</p>
					</div>
				</div>

				<img src="src\assets\icons\quotes.svg" alt="Quotes" className="w-12"/>
			</div>

			<p className="text-sm">{feedback}</p>
		</div>
	)
}

export default FeedbackCard
