
import Icon from '@/components/ui/Icon';

const Footer = () => {
  return (
    <footer className="border-t border-black py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="newspaper-date">© {new Date().getFullYear()} КАСТИНГИ СПБ</p>
            <p className="newspaper-text mt-2">Поиск моделей для творческих проектов в Санкт-Петербурге</p>
          </div>
          
          <div className="flex items-center gap-2 newspaper-contact">
            <Icon name="Send" className="h-5 w-5" />
            <a href="https://t.me/vocoders" target="_blank" rel="noopener noreferrer" className="text-sm font-medium">
              Telegram: t.me/vocoders
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
