import Header from './components/Header';
import Hero from './components/Hero';
import LatestProjects from './components/LatestProjects';
import Footer from './components/Footer';
import CreateProjectForm from './components/CreateProjectForm';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <Hero />
      <LatestProjects />
      <CreateProjectForm />
      <Footer />
    </div>
  );
};

export default Home;