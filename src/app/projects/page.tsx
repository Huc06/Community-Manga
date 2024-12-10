import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import All_Project from "../components/All_Project";

const featuredProjects = [
  { title: "Tokyo Revengers", image: "/images/tokyo_revengers.jpg", progress: 85, author: "Nhóm Dịch A", amountRaised: "1,000,000", targetAmount: "1,200,000" },
  { title: "My Dress-Up Darling", image: "/images/my_dress_up_darling.jpg", progress: 80, author: "Nhóm Dịch B", amountRaised: "800,000", targetAmount: "1,000,000" },
  { title: "Spy x Family", image: "/images/spy_x_family.jpg", progress: 88, author: "Nhóm Dịch C", amountRaised: "900,000", targetAmount: "1,000,000" },
  { title: "Blue Lock", image: "/images/blue_lock.jpg", progress: 92, author: "Nhóm Dịch D", amountRaised: "950,000", targetAmount: "1,000,000" },
  { title: "Hell's Paradise", image: "/images/hells_paradise.jpg", progress: 75, author: "Nhóm Dịch E", amountRaised: "700,000", targetAmount: "1,000,000" },
  { title: "Tokyo Revengers: Christmas Showdown", image: "/images/tokyo_revengers_christmas.jpg", progress: 80, author: "Nhóm Dịch F", amountRaised: "850,000", targetAmount: "1,000,000" },
];

const FeaturedProjects = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <section className="py-16 bg-gray-100 flex-grow" id="explore">
        <All_Project />
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FeaturedProjects;