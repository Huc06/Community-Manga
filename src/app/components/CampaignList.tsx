'use client';

import React from 'react';
import { useGetCampaigns } from '../hooks/useGetCampaigns';
import ProjectCard from './ProjectCard';

const CampaignList = () => {
  const { getCampaigns } = useGetCampaigns();

  React.useEffect(() => {
    const fetchCampaigns = async () => {
      await getCampaigns();
    };
    fetchCampaigns();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Render campaigns here */}
    </div>
  );
};

export default CampaignList; 