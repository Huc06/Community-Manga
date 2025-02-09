'use client';

import React, { useEffect, useState } from 'react';
import { useGetCampaigns } from '../hooks/useGetCampaigns';
import ProjectCard from './ProjectCard';

const CampaignList = () => {
  const { getCampaigns } = useGetCampaigns();
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      const fetchedCampaigns = await getCampaigns();
      setCampaigns(fetchedCampaigns);
    };
    fetchCampaigns();
  }, [getCampaigns]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {campaigns.map((campaign, index) => (
        <ProjectCard
          key={index}
          title={campaign.title}
          description={campaign.description}
          image={campaign.image}
          progress={(campaign.totalFunds / campaign.target) * 100}
          amountRaised={campaign.totalFunds}
          targetAmount={campaign.target}
        />
      ))}
    </div>
  );
};

export default CampaignList; 