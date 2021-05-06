// Write your code here
import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import HomeSection from '../HomeSection'
import ProjectsSection from '../ProjectsSection'
import AboutSection from '../AboutSection'
import ContactSection from '../ContactSection'

const sections = {
  about: 'ABOUT',
  contact: 'CONTACT',
  home: 'HOME',
  projects: 'PROJECTS',
}

class Portfolio extends Component {
  state = {selectedSection: 'HOME'}

  getSection = () => {
    const {selectedSection} = this.state

    switch (selectedSection) {
      case sections.projects:
        console.log(`you clicked ProjectsSection`)
        return <ProjectsSection />

      case sections.about:
        console.log(`you clicked AboutSection`)
        return <AboutSection />

      case sections.contact:
        console.log(`you clicked ContactSection`)
        return <ContactSection />

      default:
        console.log(`you clicked HomeSection`)
        return <HomeSection />
    }
  }

  changeSelectedSection = selectedSection => {
    this.setState({
      selectedSection,
    })
  }

  render() {
    const {selectedSection} = this.state

    return (
      <div className="portfolio-page">
        <NavBar
          changeSelectedSection={this.changeSelectedSection}
          selectedSection={this.selectedSection}
        />
        <div>{this.getSection()}</div>
      </div>
    )
  }
}
export default Portfolio
