import Header from './components/header';
import HeroSection from './components/HeroSection'
import Divider from './components/Divider'
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';


function App() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-100 via-blue-100 to-purple-200 font-sans">
      <Header />
      <HeroSection />
      <Divider />
      <AboutSection />
      <Divider />
      <SkillsSection />
      <Divider />
      <ProjectsSection />
      <Divider />
      <EducationSection />
      <Divider />
      <ExperienceSection />
      <Divider />
    </div>
  );
}

export default App;