'use client'

import * as React from 'react';
import { 
  type BaseError,
  useWaitForTransactionReceipt, 
  useWriteContract 
} from 'wagmi';
import { abi } from '../abis/ProjectFunding';

const contractAddress = '0x7b96aF9Bd211cBf6BA5b0dd53aa61Dc5806b6AcE'; // Địa chỉ hợp đồng

export function CreateProjectForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    description: '',
    targetAmount: '',
  });

  const { 
    data: hash,
    error,
    isPending, 
    writeContract 
  } = useWriteContract();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, description, targetAmount } = formData;

    if (!name || !description || !targetAmount) {
      alert('Please fill in all fields');
      return;
    }

    try {
      await writeContract({
        address: contractAddress,
        abi,
        functionName: 'createProject',
        args: [name, description, targetAmount], // Assuming targetAmount is already in Wei
      });
    } catch (err) {
      console.error(err);
      alert('Transaction failed! ' + (err as BaseError).message);
    }
  };

  const { isLoading: isConfirming, isSuccess: isConfirmed } = 
    useWaitForTransactionReceipt({ 
      hash, 
    });

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold mb-4">Create a New Project</h2>
      <div className="space-y-1">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Project Name</label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter project name"
          required
          className="mb-2 p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Project Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter project description"
          required
          className="mb-2 p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="targetAmount" className="block text-sm font-medium text-gray-700">Target Amount (ETH)</label>
        <input
          id="targetAmount"
          name="targetAmount"
          value={formData.targetAmount}
          onChange={handleChange}
          placeholder="Enter target amount in ETH"
          required
          className="mb-2 p-2 border border-gray-300 rounded"
        />
      </div>
      <button 
        disabled={isPending} 
        type="submit"
        className="bg-blue-500 text-white p-2 rounded"
      >
        {isPending ? 'Creating...' : 'Create Project'}
      </button>
      {hash && <div>Transaction Hash: {hash}</div>}
      {isConfirming && <div>Waiting for confirmation...</div>} 
      {isConfirmed && <div>Project created successfully!</div>} 
      {error && (
        <div className="text-red-500 mt-2">Error: {(error as BaseError).shortMessage || error.message}</div>
      )}
    </form>
  );
}

export default CreateProjectForm; 