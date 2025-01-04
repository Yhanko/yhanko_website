const CallToAction: React.FC = () => {
	return (
		<section className="default-layout-vertical">
			<div className="w-full h-full border-4 border-primary rounded-[50px] flex flex-col  items-center justify-center gap-8 min-h-[60vh] bg-gradient-to-r from-primaryOpacity to-blackSecondary ">
				<div className="title-subtitle">
					<h1 className="text-3xl font-bold">
						Solicite Seu <span className="text-primary">Orçamento</span>{" "}
						Personalizado
					</h1>
					<p>
						Conte-nos sobre o seu projeto! Estamos prontos para transformar sua
						ideia em algo incrível.
					</p>
				</div>

				<a
					href="#"
					className="btn-action-invert font-bold text-xl px-16 py-4 rounded-xl"
				>
					Solicitar
				</a>
			</div>
		</section>
	)
}

export default CallToAction
