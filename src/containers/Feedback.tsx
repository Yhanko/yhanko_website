import "../../node_modules/swiper/swiper.css"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import FeedbackCard, { FeedbackCardProps } from "../components/FeedbackCard"
import SwiperNavigationButtons from "../components/SwiperNavigationButtons"

const Feedback: React.FC = () => {
	const feedbackInfo: FeedbackCardProps[] = [
		{
			imgSrc: "src/assets/Feedback/person1.png",
			name: "Joel Silva",
			role: "CEO na JS Technology",
			feedback: `Estou muito feliz com o website que fizeram pra mim, minha empresa cresceu muito graças à vocês.`,
		},
		{
			imgSrc: "src/assets/Feedback/person1.png",
			name: "Romeu Cajamba",
			role: "CEO na Yhanko Tech",
			feedback: `Estou muito feliz com o website que fizeram pra mim, minha empresa cresceu muito graças à vocês.`,
		},
		{
			imgSrc: "src/assets/Feedback/person1.png",
			name: "Romeu Cajamba",
			role: "CEO na Yhanko Tech",
			feedback: `Estou muito feliz com o website que fizeram pra mim, minha empresa cresceu muito graças à vocês.`,
		},
		{
			imgSrc: "src/assets/Feedback/person1.png",
			name: "Romeu Cajamba",
			role: "CEO na Yhanko Tech",
			feedback: `Estou muito feliz com o website que fizeram pra mim, minha empresa cresceu muito graças à vocês.`,
		},
	]

	return (
		<section className="default-layout-vertical" id="feedback">
			<div className="title-subtitle">
				<h1 className="text-3xl font-bold">
					Nossos <span className="text-primary">Clientes</span>
				</h1>

				<p>
					Cada parceria reflete nosso compromisso em oferecer soluções
					inovadoras, eficientes e personalizadas, impulsionando o sucesso de
					seus negócios.
				</p>
			</div>

			<div className="relative w-full flex flex-col">
				<Swiper
					modules={[Navigation, Autoplay]}
					spaceBetween={50}
					slidesPerView={3}
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					}}
					autoplay={{
						disableOnInteraction: true,
						delay: 3000,
					}}
					className="w-full z-50"
				>
					{feedbackInfo.map((feedback, index) => (
						<SwiperSlide key={index}>
							<FeedbackCard
								imgSrc={feedback.imgSrc}
								name={feedback.name}
								role={feedback.role}
								feedback={feedback.feedback}
							/>
						</SwiperSlide>
					))}
				</Swiper>

				<div className="w-full rounded-lg bg-primary/20 h-20 -skew-x-12 absolute -bottom-8"></div>
			</div>

			<SwiperNavigationButtons />
		</section>
	)
}

export default Feedback
