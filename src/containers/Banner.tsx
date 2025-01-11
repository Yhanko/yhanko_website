import { CtaButton } from "../components/CTAButton.tsx"

const Banner: React.FC = () => {
	return (
		<section className="default-layout max-lg:flex-col" id="banner">
			<div className="flex flex-col gap-4 text-white max-lg:text-center">
				<h1 className="text-4xl max-lg:text-3xl">
					A solução para os seus{" "}
					<span className="text-primary animate-pulse font-bold">
						projectos
					</span>
				</h1>

				<p className="max-lg:text-sm">
					Com a <span className="text-primary">Yhanko</span> o crescimento, a
					expansão e a funcionalidade do seu projeto é fácil.
				</p>
			</div>

			<div className="lg:hidden">
				<CtaButton />
			</div>

			<img
				src="src\assets\Banner\programmer.png"
				alt="Programmer"
				className="w-1/2 max-lg:hidden"
			/>
		</section>
	)
}

export default Banner
