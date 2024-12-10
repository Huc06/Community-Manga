import Header from './components/Header';
import Hero from './components/Hero';
import LatestProjects from './components/LatestProjects';
import Tips from './components/Tips';
import Footer from './components/Footer';

const Home = () => {
  return (
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <Header />
        <Hero />
        <LatestProjects />
        <Tips />
        <Footer />
      </div>
  );
};

export default Home;