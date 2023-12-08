import Features from "./Features"
import Footer from "./Footer"
import Header from "./Header"
import Hero from "./Hero"
import HowWeWork from "./HowWeWork"
import GlobalStyles from "./styles/GlobalStyles"

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <Features />
      <HowWeWork />
      <Footer />
    </>
  )
}
