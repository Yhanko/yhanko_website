export function scrollToItem(to: string, offset: number = 0) {
	const item = document.getElementById(to)

	if (item) {
		const elementPosition = item.getBoundingClientRect().top + window.scrollY
		const offsetPosition = elementPosition - offset

		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth",
		})
	} else {
		console.warn(`Elemento com ID "${to}" não encontrado.`)
	}
}
