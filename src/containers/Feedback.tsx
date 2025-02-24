import "../../node_modules/swiper/swiper.css"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import FeedbackCard, { FeedbackCardProps } from "../components/FeedbackCard"
import SwiperNavigationButtons from "../components/SwiperNavigationButtons"

import person1 from "../assets/Feedback/person1.png"

const Feedback: React.FC = () => {
	const feedbackInfo: FeedbackCardProps[] = [
		{
			imgSrc: person1,
			name: "Joel Silva",
			role: "CEO na JS Technology",
			feedback: `Estou muito feliz com o website que fizeram pra mim, minha empresa cresceu muito graças à vocês.`,
		},
		{
			imgSrc: person1,
			name: "Romeu Cajamba",
			role: "CEO na Yhanko Tech",
			feedback: `Estou muito feliz com o website que fizeram pra mim, minha empresa cresceu muito graças à vocês.`,
		},
		{
			imgSrc: person1,
			name: "Romeu Cajamba",
			role: "CEO na Yhanko Tech",
			feedback: `Estou muito feliz com o website que fizeram pra mim, minha empresa cresceu muito graças à vocês.`,
		},
		{
			imgSrc: person1,
			name: "Romeu Cajamba",
			role: "CEO na Yhanko Tech",
			feedback: `Estou muito feliz com o website que fizeram pra mim, minha empresa cresceu muito graças à vocês.`,
		},
	]

	return (
		<section className="default-layout-vertical" id="feedback">
			<div className="title-subtitle max-lg:w-full">
				<h1 className="text-3xl font-bold">
					Nossos <span className="text-primary">Clientes</span>
				</h1>

				<p className="max-lg:text-xs">
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
					breakpoints={{
						320: {
							spaceBetween: 10,
							slidesPerView: 1,
						},
						1024: {
							spaceBetween: 50,
							slidesPerView: 3,
						},
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
