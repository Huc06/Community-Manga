'use client';

import { useState } from 'react';
import ProjectCard from './HomeCrad';
import SendTransaction from './SendTransaction';
import CreateProjectForm from './CreateProjectForm';

const latestProjects = [
  { id: 1, title: "Chainsaw Man", description: "A story about Denji, a young man who partners with a devil to become Chainsaw Man.", image: "/images/best-chainsaw-man-characters.jpg", progress: 80, amountRaised: 50000000, daysLeft: 5, supporters: 1200, successRate: 150 },
  { id: 2, title: "Jujutsu Kaisen", description: "The story of Yuji Itadori, a high school student fighting against curses.", image: "/images/jujutsu-kaisen.jpg", progress: 70, amountRaised: 30000000, daysLeft: 10, supporters: 800, successRate: 130 },
  { id: 3, title: "Spy x Family", description: "A spy must create a fake family to complete his mission.", image: "/images/spy_x_family.jpg", progress: 90, amountRaised: 60000000, daysLeft: 2, supporters: 1500, successRate: 160 },
];

const LatestProjects = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <div className="flex flex-row items-center justify-between mb-12 border p-4">
          <h2 className="text-3xl font-semibold text-black mb-4">Latest Projects</h2>
          <span 
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="text-3xl font-semibold text-black mb-4 cursor-pointer"
          >
            {showCreateForm ? 'Hide Create Project' : 'Create New Project'}
          </span>
        </div>
        {showCreateForm && <CreateProjectForm />}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {latestProjects.map((project) => (
            <div key={project.id} className="text-black">
              <ProjectCard {...project} />
              <SendTransaction contractAddress="0x7b96aF9Bd211cBf6BA5b0dd53aa61Dc5806b6AcE" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;