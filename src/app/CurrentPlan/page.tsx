import Header from "../components/Header";
import Footer from "../components/Footer";

const CurrentPlan = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <section className="py-16 bg-gray-50 flex-grow">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-8 text-gray-900">Fundraising Plans for Community Manga</h2>
          <p className="text-lg mb-6 text-gray-700">
            We are striving to develop and expand our manga community through fundraising activities. Here are the current plans we are implementing:
          </p>
          <ul className="list-disc list-inside mb-8 text-left mx-auto max-w-2xl">
            <li className="mb-4 p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
              Organizing online fundraising events: We will hold online events such as livestreams, auctions, and author talks to attract interest and support from the community.
            </li>
            <li className="mb-4 p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
              Releasing limited edition prints: We will release limited edition prints of manga and merchandise to raise funds, with a portion of the revenue used to develop the community.
            </li>
            <li className="mb-4 p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
              Collaborating with other translation groups: We will collaborate with other translation groups to expand the manga list and organize joint fundraising activities.
            </li>
            <li className="mb-4 p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
              Encouraging community participation: We will organize contests and interactive activities to encourage community participation, thereby attracting support and raising funds.
            </li>
            <li className="mb-4 p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
              Building an online platform: We will develop an online platform for users to easily access and track projects while supporting fundraising efforts.
            </li>
          </ul>
          <p className="text-lg mb-4 text-gray-700">
            We hope to receive your support to implement these plans and grow the manga community stronger.
          </p>
          <p className="text-lg font-bold text-gray-900">
            Thank you for joining us on this journey!
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CurrentPlan;