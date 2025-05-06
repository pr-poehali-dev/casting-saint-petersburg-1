
import { Link } from "react-router-dom";
import Icon from '@/components/ui/Icon';

const Header = () => {
  return (
    <header className="border-b border-black py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-2">
            <Icon name="Video" className="h-8 w-8" />
            <h1 className="text-2xl font-serif font-bold tracking-tight">КАСТИНГИ СПБ</h1>
          </div>
          
          <nav className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            <Link to="/" className="newspaper-text hover:underline">Главная</Link>
            <Link to="/about" className="newspaper-text hover:underline">О кастинге</Link>
            <Link to="/tips" className="newspaper-text hover:underline">Советы</Link>
            <Link to="/contact" className="newspaper-text hover:underline">Контакты</Link>
          </nav>
          
          <div className="flex items-center gap-2 newspaper-contact">
            <Icon name="Send" className="h-5 w-5" />
            <a href="https://t.me/vocoders" target="_blank" rel="noopener noreferrer" className="text-sm font-medium">
              t.me/vocoders
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
