import React from 'react';

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
    <div className="border rounded-lg shadow-lg bg-white p-4 flex">
      <img src={image} alt={title} className="w-1/2 h-auto rounded-l" />
      <div className="flex flex-col justify-between p-4 w-1/2">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-2">{author}</p>
        <div className="flex justify-between text-gray-500 mb-2">
          <span>Đã được ủng hộ <br/> {amountRaised} ₫</span>
          <span>Mục tiêu <br/> {targetAmount} ₫</span>
        </div>
        <div className="relative w-full h-2 bg-gray-200 rounded">
          <div
            className="absolute h-full bg-pink-500 rounded"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-gray-500 mt-2">{progress}% Thành công</p>
      </div>
    </div>
  );
};

export default ProjectCard;