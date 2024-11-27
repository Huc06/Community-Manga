import Link from 'next/link';
import ProjectCard from './HomeCrad';

const latestProjects = [
  { id: 1, title: "Gây quỹ cộng đồng cho cuốn sách Pop-Up “Sài Gòn Phố”", description: "Một cuốn sách pop-up độc đáo khám phá vẻ đẹp của Sài Gòn qua từng trang sách.", image: "/images/Nha-tho-tan-dinh.jpg", progress: 70, amountRaised: "240,775,200", daysLeft: 10, supporters: 579, successRate: 161 },
  { id: 2, title: "GÂY QUỸ CỘNG ĐỒNG CHO DỰ ÁN TRUYỆN TRANH “TRUYỀN THUYẾT LONG THẦN TƯỚNG” – TẬP 1", description: "Dự án truyện tranh mang đến những câu chuyện huyền thoại về Long Thần Tướng, kết hợp giữa nghệ thuật và văn hóa.", image: "/images/Long-than-tuong.jpg", progress: 50, amountRaised: "120,000,000", daysLeft: 5, supporters: 300, successRate: 120 },
  { id: 3, title: "Dự án Hoạt hình con Thỏ", description: "Một dự án hoạt hình thú vị về cuộc phiêu lưu của những chú thỏ trong thế giới kỳ diệu.", image: "/images/tho-bay-mau-cover.jpg", progress: 90, amountRaised: "548,100,000", daysLeft: 2, supporters: 5481, successRate: 142 },
];

const FeaturedProjects = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">Dự án nổi bật</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestProjects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`} passHref>
              <ProjectCard {...project} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;