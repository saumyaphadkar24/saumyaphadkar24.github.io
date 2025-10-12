import Header from './components/header';
import HeroSection from './components/HeroSection'
import Divider from './components/Divider'
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import CertificationsSection from './components/CertificationsSection';


function App() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-100 font-sans">
      <Header />
      <HeroSection />
      <Divider />
      <AboutSection />
      <Divider />
      <ExperienceSection />
      <Divider />
      <ProjectsSection />
      <Divider />
      <EducationSection />
      <Divider />
      <CertificationsSection />
      <Divider />
      <SkillsSection />
      <Divider />
    </div>
  );
}

export default App;