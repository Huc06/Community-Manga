'use client';

import { useContract } from './useContract';

export const useDonateToCampaign = () => {
  const { donateToCampaign } = useContract('ProjectFunding');

  return {
    donateToCampaign,
  };
}; 