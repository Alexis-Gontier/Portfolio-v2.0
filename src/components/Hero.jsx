import HeroRecherche from "./HeroRecherche"
import HeroBtn from "./HeroBtn"

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
        <h2 className="text-[#EEEEF0] text-4xl font-medium">Je m'appelle <span className="text-[#D29DFF]">Alexis</span></h2>
        <h1 className="text-[#EEEEF0] text-6xl font-extrabold">Etudiant Developpeur Web</h1>
        <h2 className="text-[#B2B3BD] text-xl font-medium">Et je suis actuellement à l’école Hetic en Bachelor Développement Web</h2>
        <HeroRecherche isVisible={true}>
          En recherche d’alternace
        </HeroRecherche>
        <HeroBtn>
          En savoir plus
        </HeroBtn>
    </div>
  )
}
