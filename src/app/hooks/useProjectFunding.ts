'use client';

import { useGetCampaigns } from './useGetCampaigns';
import { useCreateCampaign } from './useCreateCampaign';
import { useDonateToCampaign } from './useDonateToCampaign';

export const useProjectFunding = () => {
  const { getCampaigns } = useGetCampaigns();
  const { createCampaign } = useCreateCampaign();
  const { donateToCampaign } = useDonateToCampaign();

  return {
    getCampaigns,
    createCampaign,
    donateToCampaign,
  };
}; 