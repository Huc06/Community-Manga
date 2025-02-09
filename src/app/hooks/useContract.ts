'use client';

import { useWriteContract, useReadContract } from 'wagmi';
import { readContract } from '@wagmi/core';
import { ProjectFundingABI } from '../abis/ProjectFunding'; // Import ABI của hợp đồng
import { config } from '../_app'; // Import cấu hình wagmi
import { parseEther } from 'ethers';

type ContractName = 'ProjectFunding';

export function useContract(contractName: ContractName) {
  const { writeContractAsync } = useWriteContract();

  // Write functions - Các hàm ghi dữ liệu lên blockchain
  const createCampaign = async (args: any) => {
    return await writeContractAsync({
      address: process.env.NEXT_PUBLIC_ADDRESS_CONTRACT as `0x${string}`,
      abi: ProjectFundingABI,
      functionName: 'createCampaign',
      args,
    });
  };

  const donateToCampaign = async (id: number, amount: string) => {
    return await writeContractAsync({
      address: process.env.NEXT_PUBLIC_ADDRESS_CONTRACT as `0x${string}`,
      abi: ProjectFundingABI,
      functionName: 'donateToCampaign',
      args: [id],
      value: parseEther(amount), // Chuyển đổi số tiền quyên góp
    });
  };

  // Read functions - Các hàm đọc dữ liệu từ blockchain
  const getCampaigns = async () => {
    return await readContract(config, {
      address: process.env.NEXT_PUBLIC_ADDRESS_CONTRACT as `0x${string}`,
      abi: ProjectFundingABI,
      functionName: 'getCampaigns',
    });
  };

  const getDonators = async (id: number) => {
    return await readContract(config, {
      address: process.env.NEXT_PUBLIC_ADDRESS_CONTRACT as `0x${string}`,
      abi: ProjectFundingABI,
      functionName: 'getDonators',
      args: [id],
    });
  };

  // Reactive data - Dữ liệu tự động cập nhật khi có thay đổi
  const { data: campaigns } = useReadContract({
    address: process.env.NEXT_PUBLIC_ADDRESS_CONTRACT as `0x${string}`,
    abi: ProjectFundingABI,
    functionName: 'getCampaigns',
  });

  return {
    createCampaign,
    donateToCampaign,
    getCampaigns,
    getDonators,
    campaigns,
  };
} 