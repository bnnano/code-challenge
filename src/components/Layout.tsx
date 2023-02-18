import Header from "./Molecules/Header";
import styles from '@/styles/Home.module.css'
import SearchSection from "./Molecules/SearchSection";
import { Quicksand } from '@next/font/google'
import PokemonSection from "./Organisms/PokemonSection";

const quickSand = Quicksand({ subsets: ['latin'] })

export default function Layout() {
 return(
     <main className={styles.main}>
        <style jsx global>{`
        html {
          font-family: ${quickSand.style.fontFamily};
        }
      `}</style>
        <Header />
        <SearchSection />
        <PokemonSection />
    </main>


 )
}