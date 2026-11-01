import Hero from "../components/hero"
import About from "../components/about"
import Publications from "../components/publications"
import Keynotes from "../components/keynotes"
import Committees from "../components/committees"
import Topics from "../components/topics"
import Submission from "../components/submission"
import Dates from "../components/dates"
import Registration from "../components/registration"
import HandsOnWorkshop from "../components/atelier"
//import Program from "../components/program"
import Sponsors from "../components/sponsors"
import Gallery from "@/components/gallery"
import Contact from "../components/contact"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <About />
      <Publications />
      <Keynotes />
      <Committees />
      <Topics />
      <Submission />
      {/*<Acknowledgment/>*/}
      <Dates />
      <Registration />
      {/* Ajout de l'id="atelier" ici pour que l'ancre du menu fonctionne */}
      <div id="atelier" className="w-full">
       {/*  <HandsOnWorkshop /> */}
      </div>
      {/* <Program /> */}
      <Sponsors />
      <Gallery />
      <Contact />
    </main>
  )
}
