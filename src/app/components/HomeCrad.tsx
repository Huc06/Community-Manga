interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    progress: number;
    amountRaised: number;
    daysLeft: number;
    supporters: number;
    successRate: number;
  }
  
  const ProjectCard = ({ title, description, image, progress, amountRaised, daysLeft, supporters, successRate }: ProjectCardProps) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-lg flex flex-col items-center">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col items-center flex-grow">
                <h2 className="font-bold text-xl text-center mb-2">{title}</h2>
                <p className="text-gray-700 text-center mb-4">{description}</p>
                <div className="mt-2 w-full">
                    <p className="text-sm text-gray-600 text-center">{amountRaised} đã được ủng hộ</p>
                    <div className="bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
                <div className="mt-4 text-sm text-gray-600 flex justify-center space-x-8">
                    <div className="text-center">
                        <p className="font-bold">{daysLeft}</p>
                        <p className="text-pink-600">Ngày còn lại</p>
                    </div>
                    <div className="text-center">
                        <p className="font-bold">{supporters}</p>
                        <p className="text-pink-600">Người ủng hộ</p>
                    </div>
                    <div className="text-center">
                        <p className="font-bold">{successRate}%</p>
                        <p className="text-pink-600">Thành công</p>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default ProjectCard;