const Banner: React.FC = () => {
	return (
		<section className="default-layout" id="banner">
			<div className="flex flex-col gap-4 text-white">
				<h1 className="text-4xl">
					A solução para os seus{" "}
					<span className="text-primary animate-pulse font-bold">projectos</span>
				</h1>

				<p className="">
					Com a <span className="text-primary">Yhanko</span> o crescimento, a
					expansão e a funcionalidade do seu projeto é fácil.
				</p>
			</div>

			<img
				src="src\assets\Banner\programmer.png"
				alt="Programmer"
				className="w-1/2"
			/>
		</section>
	)
}

export default Banner
