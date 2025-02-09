import Header from "../components/Header";
import Footer from "../components/Footer";
import CampaignList from "../components/CampaignList";

const CurrentPlan = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <section className="py-16 bg-gray-50 flex-grow">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Current Campaigns</h2>
          <CampaignList />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CurrentPlan;