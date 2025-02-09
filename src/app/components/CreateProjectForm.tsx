'use client'

import * as React from 'react';
import { 
  type BaseError,
  useWaitForTransactionReceipt, 
  useWriteContract 
} from 'wagmi';
import ProjectCard from './HomeCrad'; // Import ProjectCard
import SendTransaction from './SendTransaction'; // Import SendTransaction
import { parseEther } from 'ethers';
import { useProjectFunding } from '../hooks/useProjectFunding';
import { useCreateCampaign } from '../hooks/useCreateCampaign';
import { useContract } from '../hooks/useContract';

const contractAddress = '0x7b96aF9Bd211cBf6BA5b0dd53aa61Dc5806b6AcE'; // Contract address

interface Project {
  id: number;
  title: string;
  description: string;
  image: string; // Image URL or base64 string
  progress: number;
  amountRaised: number;
  daysLeft: number;
  supporters: number;
  successRate: number;
}

export function CreateProjectForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    description: '',
    targetAmount: '',
    image: '',
    startTime: '',
    endTime: '',
  });

  const [projects, setProjects] = React.useState<Project[]>([]); // State to hold created projects
  const [transactionHash, setTransactionHash] = React.useState<string | null>(null); // Declare hash state

  const { createCampaign } = useProjectFunding();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({ ...prevData, image: reader.result as string }));
      };
      reader.readAsDataURL(file); // Convert the file to base64
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, description, targetAmount, image, startTime, endTime } = formData;

    if (!name || !description || !targetAmount || !image || !startTime || !endTime) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const tx = await createCampaign([
        contractAddress, // _owner
        name,            // _title
        description,     // _description
        parseEther(targetAmount), // _target
        Math.floor(new Date(startTime).getTime() / 1000), // _startTime
        Math.floor(new Date(endTime).getTime() / 1000),   // _endTime
        image            // _image
      ]);

      setTransactionHash(tx.hash); // Set the transaction hash
      alert('Campaign created successfully!');
      // Optionally, you can add the new project to the projects state here
    } catch (err) {
      console.error(err);
      alert('Transaction failed! ' + err.message);
    }
  };

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash: transactionHash });

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-2">
        <h2 className="text-2xl font-bold mb-2">Create a New Project</h2>
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
        <div className="space-y-1">
          <label htmlFor="startTime" className="block text-sm font-medium text-gray-700">Start Time</label>
          <input
            id="startTime"
            name="startTime"
            type="datetime-local"
            value={formData.startTime}
            onChange={handleChange}
            required
            className="mb-2 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="endTime" className="block text-sm font-medium text-gray-700">End Time</label>
          <input
            id="endTime"
            name="endTime"
            type="datetime-local"
            value={formData.endTime}
            onChange={handleChange}
            required
            className="mb-2 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Project Image</label>
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mb-2 p-2 border border-gray-300 rounded"
          />
        </div>
        <button 
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Create Project
        </button>
        {isConfirmed && transactionHash && <div>Transaction Hash: {transactionHash}</div>}
        {isConfirming && <div>Waiting for confirmation...</div>} 
      </form>

      {/* Display created projects */}
      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="border p-4 rounded">
              <ProjectCard {...project} />
              <SendTransaction contractAddress={contractAddress} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreateProjectForm; 