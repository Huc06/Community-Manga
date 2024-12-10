'use client';

import React, { useState } from 'react';
import { useAccount } from 'wagmi';
import { ethers } from 'ethers';
import CrowdfundingContract from '../contracts/artifacts/Crowdfunding.json';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const CreateCampaign = () => {
  const [title, setTitle] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const { isConnected } = useAccount();

  const createCampaign = async () => {
    if (!isConnected) {
      toast.error('Please connect your wallet!');
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contract = new ethers.Contract('0xFE0eD87d5A9c960469DEbf019f8BADe5d64f56CC', CrowdfundingContract.abi, signer);

      const tx = await contract.createCampaign(title, ethers.utils.parseEther(targetAmount), date, description);
      await tx.wait();
      toast.success('Campaign created successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to create campaign! ' + (error as Error).message);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4">Tạo Chiến Dịch Mới</h2>
        <input
          type="text"
          placeholder="Tiêu đề"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          placeholder="Mục tiêu (ETH)"
          value={targetAmount}
          onChange={(e) => setTargetAmount(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <textarea
          placeholder="Miêu tả"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <button onClick={createCampaign} className="bg-blue-500 text-white p-2 rounded">
          Tạo Chiến Dịch
        </button>
      </div>
    </>
  );
};

export default CreateCampaign; 