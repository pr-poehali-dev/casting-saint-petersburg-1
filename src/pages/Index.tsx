
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/Icon';

const Index = () => {
  const currentDate = new Date().toLocaleDateString('ru-RU', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Helmet>
        <title>Кастинги СПб | ТФП съёмки СПб | Ищу модель СПб</title>
        <meta name="description" content="Ищу модель ТФП СПб, ищу модель в СПб, кастинги СПб, фотограф ТФП, фотосессии ТФП, видеограф ТФП" />
        <meta name="keywords" content="модель, ищу модель ТФП, СПб, кастинги СПб, ТФП модель, ищу модель для в СПб" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="newspaper-date text-center">{currentDate}</div>
          
          <h1 className="newspaper-title text-center mt-4">КАСТИНГ МОДЕЛЕЙ В САНКТ-ПЕТЕРБУРГЕ</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-8">
            <div className="md:col-span-8">
              <article>
                <h2 className="newspaper-heading">ОБЪЯВЛЕНИЕ О КАСТИНГЕ</h2>
                
                <p className="newspaper-text mb-4">
                  <span className="font-bold">ВНИМАНИЕ!</span> Проводится набор моделей для участия в творческих проектах на условиях ТФП (Time for Print) в Санкт-Петербурге. Мы ищем талантливых моделей для съёмок музыкальных роликов и короткометражных фильмов.
                </p>
                
                <div className="border-2 border-black p-4 mb-6">
                  <h3 className="font-serif text-xl font-bold mb-2">ТРЕБОВАНИЯ К КАНДИДАТАМ:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Возраст от 18 лет</li>
                    <li>Славянский тип внешности</li>
                    <li>Стройное телосложение</li>
                    <li>Длинные волосы</li>
                    <li>Светлые глаза</li>
                    <li>Обаяние и харизма</li>
                  </ul>
                </div>
                
                <p className="newspaper-text mb-4">
                  Мы предлагаем уникальную возможность стать частью креативных проектов, пополнить портфолио качественными работами и получить ценный опыт в сфере музыкальной и кинематографической индустрии.
                </p>
                
                <p className="newspaper-text mb-4">
                  Съёмки проводятся в различных локациях Санкт-Петербурга. График работы обсуждается индивидуально. Все проекты реализуются на условиях взаимовыгодного сотрудничества.
                </p>
                
                <blockquote className="newspaper-quote">
                  "Наши проекты — это возможность для творческой самореализации и создания запоминающихся образов в уникальном визуальном стиле."
                </blockquote>
                
                <div className="border-t border-b border-black py-4 my-6">
                  <div className="flex items-center gap-2 justify-center">
                    <Icon name="Send" className="h-6 w-6" />
                    <p className="newspaper-contact text-lg">Для связи: <a href="https://t.me/vocoders" target="_blank" rel="noopener noreferrer" className="underline">t.me/vocoders</a></p>
                  </div>
                </div>
              </article>
              
              <Separator className="my-8" />
              
              <article>
                <h2 className="newspaper-heading">ПРЕИМУЩЕСТВА УЧАСТИЯ</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-serif text-lg font-bold mb-2">ПРОФЕССИОНАЛЬНОЕ ПОРТФОЛИО</h3>
                    <p className="newspaper-text">
                      Участие в наших проектах позволит вам пополнить своё портфолио высококачественными работами в различных жанрах и стилях. Все материалы передаются моделям для личного и профессионального использования.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-serif text-lg font-bold mb-2">ОПЫТ РАБОТЫ</h3>
                    <p className="newspaper-text">
                      Вы получите ценный опыт работы в творческих проектах, который поможет развить ваши навыки позирования, работы перед камерой и взаимодействия с командой профессионалов.
                    </p>
                  </div>
                </div>
              </article>
            </div>
            
            <div className="md:col-span-4">
              <div className="border border-black p-4">
                <h3 className="newspaper-subtitle border-b border-black pb-2 mb-4">ВАЖНАЯ ИНФОРМАЦИЯ</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-serif font-bold mb-1">ДАТА КАСТИНГА:</h4>
                    <p className="newspaper-text">Постоянный набор</p>
                  </div>
                  
                  <div>
                    <h4 className="font-serif font-bold mb-1">МЕСТО ПРОВЕДЕНИЯ:</h4>
                    <p className="newspaper-text">Санкт-Петербург</p>
                  </div>
                  
                  <div>
                    <h4 className="font-serif font-bold mb-1">ТИП ПРОЕКТОВ:</h4>
                    <p className="newspaper-text">Музыкальные ролики, короткометражные фильмы</p>
                  </div>
                  
                  <div>
                    <h4 className="font-serif font-bold mb-1">УСЛОВИЯ:</h4>
                    <p className="newspaper-text">ТФП (Time for Print)</p>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="text-center p-4 border border-black">
                  <h4 className="font-serif font-bold mb-2">КАК ПРИНЯТЬ УЧАСТИЕ:</h4>
                  <p className="newspaper-text mb-3">
                    Отправьте заявку с вашими фото и кратким описанием опыта работы (при наличии)
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <Icon name="Send" className="h-5 w-5" />
                    <a 
                      href="https://t.me/vocoders" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="newspaper-contact underline"
                    >
                      t.me/vocoders
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="border border-black p-4 mt-6">
                <h3 className="newspaper-subtitle border-b border-black pb-2 mb-4">ПОСЛЕДНИЕ ПРОЕКТЫ</h3>
                
                <ul className="space-y-3 newspaper-text">
                  <li>• Музыкальный видеоклип "Городские мотивы"</li>
                  <li>• Короткометражный фильм "Отражения"</li>
                  <li>• Музыкальный ролик "Тихие улицы"</li>
                  <li>• Художественная короткометражка "Невский этюд"</li>
                </ul>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
