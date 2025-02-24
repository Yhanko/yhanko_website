import logo from "../assets/logotipo.png"

const WhyChoose: React.FC = () => {
	return (
		<section className="default-layout max-lg:flex-col" id="about-us">
			<div className="w-1/2 max-lg:w-full flex items-center justify-center">
				<img
					src={logo}
					alt=""
					className="w-1/2 hover:scale-125 ease-in-out duration-500 animate-pulse"
				/>
			</div>

			<div className="flex flex-col gap-4 text-white w-1/2 max-lg:w-full max-lg:text-sm max-lg:text-center">
				<h1 className="text-3xl">
					Por que a <span className="text-primary font-bold">Yhanko</span> é a
					sua melhor escolha?
				</h1>

				<p>
					Somos uma startup inovadora apaixonada por design e programação. Nossa
					missão é criar experiências digitais impactantes, combinando estética,
					funcionalidade e tecnologia de ponta.{" "}
				</p>

				<p>
					Com foco em soluções personalizadas, ajudamos empresas e indivíduos a
					transformar ideias emprodutos digitais de alta performance.
				</p>

				<p>
					Juntos, moldamos o futuro, um pixel e uma linha de código por vez.
				</p>
			</div>
		</section>
	)
}

export default WhyChoose
