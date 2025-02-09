'use client';

import { useContract } from './useContract';

export const useCreateCampaign = () => {
  const { createCampaign } = useContract('ProjectFunding');

  return {
    createCampaign,
  };
}; 