import { AppPageStyled } from './styles/app.styled'
import Header from './components/header'
import WelcomeAnimation from './components/welcome-animations/welcome-animation'
import AboutSection from './components/about'
import { LandingPage } from './styles/app.styled'
import ProjectSection from './components/projects/project'
import SkillsSection from './components/skills/skills'
import ContactSection from './components/contact/contact'
import Footer from './components/footer/footer'
import { useFlagStatus } from 'feature-toggles-react-sdk'
import scrollFromLink from './utils/easyScroll'
import { useEffect } from 'react'

function App() {

  const { flagsReady, flagsError } = useFlagStatus()

  useEffect(() => {
    if (flagsReady){
      scrollFromLink()
    }
  }, [flagsReady])

  return (
    <AppPageStyled>
      <LandingPage>
        <Header/>
        {/*<WelcomeAnimation />*/}
      </LandingPage>
      <AboutSection />
      <ProjectSection/>
      <SkillsSection />
      <ContactSection />
      <Footer />
    </AppPageStyled>
  )
}

export default App
