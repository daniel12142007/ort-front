import { About } from "./About"
import { Advantage } from "./Advantage"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { PrepareWithUs } from "./PrepareWithUs"
import { Testing } from "./Testing"
import { WelcomeMessage } from "./WelcomeMessage"
import { WhyChooseUs } from "./WhyChooseUs"

export function Lending() {
  return (
    <div>
      <Header />
      <WelcomeMessage />
      <About />
      <Testing />
      <WhyChooseUs />
      <Advantage />
      <PrepareWithUs />
      <Footer />
    </div>
  )
}
