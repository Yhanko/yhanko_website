import Banner from "./containers/Banner"
import CallToAction from "./containers/CallToAction"
import Feedback from "./containers/Feedback"
import Header from "./components/Header"
import Portfolio from "./containers/Portfolio"
import Services from "./containers/Services"
import WhyChoose from "./containers/WhyChoose"
import Footer from "./components/Footer"

function App() {
	return (
		<div className="min-h-screen bg-blackPrimary font-Montserrat">
			<Header />
			<Banner />
			<WhyChoose />
			<Services />
			<Portfolio />
			<Feedback />
			<CallToAction />
			<Footer />
		</div>
	)
}

export default App
