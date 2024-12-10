'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ethers } from 'ethers';
import ProjectCard from './HomeCrad';

const latestProjects = [
  { id: 1, title: "Chainsaw Man", description: "Một câu chuyện về Denji, một chàng trai trẻ hợp tác với một con quỷ để trở thành Chainsaw Man.", image: "/images/best-chainsaw-man-characters.jpg", progress: 80, amountRaised: "50,000,000", daysLeft: 5, supporters: 1200, successRate: 150 },
  { id: 2, title: "Jujutsu Kaisen", description: "Câu chuyện về Yuji Itadori, một học sinh trung học chiến đấu chống lại những lời nguyền.", image: "/images/jujutsu-kaisen.jpg", progress: 70, amountRaised: "30,000,000", daysLeft: 10, supporters: 800, successRate: 130 },
  { id: 3, title: "Spy x Family", description: "Một điệp viên phải tạo ra một gia đình giả để hoàn thành nhiệm vụ của mình.", image: "/images/spy_x_family.jpg", progress: 90, amountRaised: "60,000,000", daysLeft: 2, supporters: 1500, successRate: 160 },
];

const LatestProjects = () => {
  const [amount, setAmount] = useState('');

  const fundProject = async (projectId: number) => {
    if (!window.ethereum) {
      alert('Please install MetaMask!');
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contract = new ethers.Contract('0xFE0eD87d5A9c960469DEbf019f8BADe5d64f56CC', FundraisingContract.abi, signer);

      const tx = await contract.fundCampaign(projectId, { value: ethers.utils.parseEther(amount) });
      await tx.wait();
      alert('Transaction successful!');
    } catch (error) {
      console.error(error);
      alert('Transaction failed! ' + (error as Error).message);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">Dự án mới nhất</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestProjects.map((project) => (
            <div key={project.id}>
              <Link href={`/projects/${project.id}`} passHref>
                <ProjectCard {...project} />
              </Link>
              <input
                type="text"
                placeholder="Số lượng (ETH)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="border p-2 mb-4 w-full"
              />
              <button onClick={() => fundProject(project.id)} className="bg-blue-500 text-white p-2 rounded">
                Gửi Tiền
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;