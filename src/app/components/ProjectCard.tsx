import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  image: string;
  progress: number;
  author: string;
  amountRaised: string;
  targetAmount: string;
}

const ProjectCard = ({ title, image, progress, author, amountRaised, targetAmount }: ProjectCardProps) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg flex flex-col items-center">
      <Image src={image} alt={title} width={500} height={192} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col items-center flex-grow">
        <h2 className="font-bold text-xl text-center mb-2">{title}</h2>
        <p className="text-gray-700 text-center mb-4">{author}</p>
        <div className="mt-2 w-full">
          <p className="text-sm text-gray-600 text-center">{amountRaised} has been raised</p>
          <div className="bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-600 flex justify-center space-x-8">
          <div className="text-center">
            <p className="font-bold">{targetAmount} ₫</p>
            <p className="text-pink-600">Target</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;