const CallToAction: React.FC = () => {
	return (
		<section className="default-layout-vertical">
			<div className="w-full h-full border-4 border-primary rounded-[50px] flex flex-col  items-center justify-center gap-8 max-lg:min-h-[40vh] min-h-[60vh] bg-gradient-to-r from-primaryOpacity to-blackSecondary ">
				<div className="title-subtitle">
					<h1 className="text-3xl font-bold max-lg:text-xl">
						Solicite Seu <span className="text-primary">Orçamento</span>{" "}
						Personalizado
					</h1>
					<p className="max-lg:text-xs">
						Conte-nos sobre o seu projeto! Estamos prontos para transformar sua
						ideia em algo incrível.
					</p>
				</div>

				<a
					href="#"
					className="btn-action-invert font-bold text-xl px-16 py-4 max-lg:py-5 rounded-xl max-lg:rounded-3xl"
				>
					Solicitar
				</a>
			</div>
		</section>
	)
}

export default CallToAction
