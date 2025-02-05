'use client';

import { useContractRead, useWriteContract } from 'wagmi';
import ProjectFundingABI from '../abis/ProjectFunding';

const contractAddress = '0x7b96aF9Bd211cBf6BA5b0dd53aa61Dc5806b6AcE'; // Địa chỉ hợp đồng

export const useProjectFunding = () => {
  const { data: campaigns, error: campaignsError, isLoading: isLoadingCampaigns } = useContractRead({
    address: contractAddress,
    abi: ProjectFundingABI,
    functionName: 'getCampaigns',
  });

  const { write: createCampaign } = useWriteContract();

  return {
    campaigns,
    campaignsError,
    isLoadingCampaigns,
    createCampaign,
  };
}; 