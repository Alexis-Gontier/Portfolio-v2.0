import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Baner from "./components/Baner"

export default function App() {

  const BANER = [
    {
      text: "A Propos"
    },
    {
      text: "Portfolio"
    }
  ]

  return (
    <>
      <Navbar />
      <section className="min-h-screen flex justify-center items-center">
        <Hero />
      </section>
      <Baner text={BANER[0].text} />
      <section className="h-96" id="about"></section>
      <Baner text={BANER[1].text} />
      <section className="h-96" id="portfolio"></section>
    </>
  )
}
