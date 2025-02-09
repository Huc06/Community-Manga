'use client';

import { useContract } from './useContract';

export const useGetCampaigns = () => {
  const { getCampaigns } = useContract('ProjectFunding');

  return {
    getCampaigns,
  };
}; 