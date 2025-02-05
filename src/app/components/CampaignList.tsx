'use client';

import React from 'react';
import { useProjectFunding } from '../hooks/useProjectFunding';
import ProjectCard from './ProjectCard';

const CampaignList = () => {
  const { campaigns, campaignsError, isLoadingCampaigns } = useProjectFunding();

  if (isLoadingCampaigns) return <div>Loading campaigns...</div>;
  if (campaignsError) return <div>Error loading campaigns: {campaignsError.message}</div>;

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