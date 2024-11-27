import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Header = () => {
  return (
    <header className="bg-white-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-black text-4xl font-bold">
            Community Manga
          </Link>
        </div>
        <nav className="flex items-center space-x-4 text-2xl">
          <Link href="/" className="text-black hover:text-pink-500">Trang Chủ</Link>
          <Link href="/projects" className="text-black hover:text-pink-500">Toàn bộ các dự án</Link>
          <Link href="/CurrentPlan" className="text-black hover:text-pink-500">Kế hoạch hiện tại</Link>
        </nav>
        <div className="flex items-center">
          <ConnectButton />
        </div>
      </div>
    </header>
  );
};

export default Header;