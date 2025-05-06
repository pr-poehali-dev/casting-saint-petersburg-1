
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/Icon';

const About = () => {
  return (
    <>
      <Helmet>
        <title>О кастинге | Кастинги СПб | ТФП съёмки</title>
        <meta name="description" content="Информация о кастингах моделей в Санкт-Петербурге для ТФП съёмок. Требования к моделям, условия сотрудничества." />
        <meta name="keywords" content="кастинги СПб, информация о кастинге, модели СПб, ТФП съёмки, требования к моделям" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <h1 className="newspaper-title text-center">О КАСТИНГЕ</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-8">
            <div className="md:col-span-8">
              <article className="newspaper-column">
                <h2 className="newspaper-heading">ПОДРОБНАЯ ИНФОРМАЦИЯ О КАСТИНГЕ</h2>
                
                <p className="mb-4">
                  Мы проводим кастинг моделей для участия в создании музыкальных роликов и короткометражных фильмов в Санкт-Петербурге. Наши проекты отличаются творческим подходом, вниманием к деталям и профессиональным исполнением.
                </p>
                
                <p className="mb-4">
                  Съёмки проводятся на условиях ТФП (Time for Print), что означает взаимовыгодное сотрудничество между моделью и создателями проекта. Модель получает качественные материалы для своего портфолио, а мы — возможность воплотить творческие идеи с вашим участием.
                </p>
                
                <h3 className="font-serif text-xl font-bold my-4">ЦЕЛИ НАШИХ ПРОЕКТОВ</h3>
                
                <p className="mb-4">
                  Основная цель наших проектов — создание высококачественного визуального контента, который будет интересен зрителям и позволит раскрыть таланты участников. Мы стремимся к созданию атмосферных работ, отражающих уникальный характер Санкт-Петербурга и его жителей.
                </p>
                
                <p className="mb-4">
                  Музыкальные ролики и короткометражные фильмы представляют собой синтез визуального искусства, музыки и актёрской игры. Это позволяет моделям проявить себя в разных амплуа и получить разносторонний опыт.
                </p>
                
                <blockquote className="newspaper-quote">
                  "Каждый проект — это возможность создать нечто особенное, что запомнится и моделям, и зрителям. Мы ценим индивидуальность и стремимся подчеркнуть уникальные черты каждой модели."
                </blockquote>
                
                <h3 className="font-serif text-xl font-bold my-4">ПРОЦЕСС ОТБОРА</h3>
                
                <p className="mb-4">
                  Отбор моделей происходит на основе присланных фотографий и описания. Мы внимательно рассматриваем каждую заявку и подбираем подходящих кандидатов для каждого конкретного проекта с учетом его концепции и требований.
                </p>
                
                <p className="mb-4">
                  После предварительного отбора мы связываемся с выбранными кандидатами для обсуждения деталей сотрудничества, уточнения графика и других организационных вопросов.
                </p>
                
                <div className="border-2 border-black p-4 my-6">
                  <h3 className="font-serif text-xl font-bold mb-3">ДЕТАЛЬНЫЕ ТРЕБОВАНИЯ К МОДЕЛЯМ:</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-serif font-bold">Возраст:</h4>
                      <p>От 18 лет и старше. Мы работаем только с совершеннолетними моделями.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-serif font-bold">Внешность:</h4>
                      <p>Славянский тип внешности, гармоничные черты лица, выразительная мимика.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-serif font-bold">Телосложение:</h4>
                      <p>Стройное, пропорциональное телосложение. Спортивное телосложение приветствуется.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-serif font-bold">Волосы:</h4>
                      <p>Предпочтительно длинные, ухоженные. Натуральный цвет или качественное окрашивание.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-serif font-bold">Глаза:</h4>
                      <p>Светлые (голубые, серые, зеленые). Выразительный взгляд.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-serif font-bold">Личные качества:</h4>
                      <p>Обаяние, харизма, умение работать в команде, пунктуальность, ответственность.</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-serif text-xl font-bold my-4">ФОРМАТЫ ПРОЕКТОВ</h3>
                
                <p className="mb-4">
                  <strong>Музыкальные ролики:</strong> Короткие видео (от 1 до 5 минут) с акцентом на визуальное сопровождение музыкальных композиций. Могут иметь сюжетную линию или представлять собой серию атмосферных сцен.
                </p>
                
                <p className="mb-4">
                  <strong>Короткометражные фильмы:</strong> Художественные работы продолжительностью от 5 до 20 минут с полноценным сюжетом, диалогами и развитием персонажей.
                </p>
              </article>
            </div>
            
            <div className="md:col-span-4">
              <div className="border border-black p-4 mb-6">
                <h3 className="newspaper-subtitle border-b border-black pb-2 mb-4">УСЛОВИЯ СОТРУДНИЧЕСТВА</h3>
                
                <div className="space-y-4 newspaper-text">
                  <p><strong>Формат работы:</strong> ТФП (Time for Print)</p>
                  <p><strong>Продолжительность съёмок:</strong> От нескольких часов до нескольких дней (в зависимости от проекта)</p>
                  <p><strong>Локации:</strong> Студии и натурные объекты Санкт-Петербурга</p>
                  <p><strong>Результат для модели:</strong> Отобранные и обработанные фото/видео материалы для портфолио</p>
                  <p><strong>Сроки предоставления материалов:</strong> В течение 2-4 недель после завершения съёмок</p>
                </div>
              </div>
              
              <div className="border border-black p-4 mb-6">
                <h3 className="newspaper-subtitle border-b border-black pb-2 mb-4">ЧТО МЫ ПРЕДЛАГАЕМ</h3>
                
                <ul className="list-disc pl-5 space-y-2 newspaper-text">
                  <li>Профессиональную команду (режиссер, оператор, стилист)</li>
                  <li>Качественное оборудование для съёмок</li>
                  <li>Интересные локации</li>
                  <li>Гибкий график работы</li>
                  <li>Возможность участия в разноплановых проектах</li>
                  <li>Креативный подход к созданию образов</li>
                </ul>
              </div>
              
              <div className="border border-black p-4">
                <h3 className="newspaper-subtitle border-b border-black pb-2 mb-4">КОНТАКТНАЯ ИНФОРМАЦИЯ</h3>
                
                <div className="text-center p-4">
                  <p className="newspaper-text mb-3">
                    Для участия в кастинге отправьте ваше портфолио или несколько фотографий (в полный рост и крупным планом) через Telegram.
                  </p>
                  
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <Icon name="Send" className="h-5 w-5" />
                    <a 
                      href="https://t.me/vocoders" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="newspaper-contact text-lg underline"
                    >
                      t.me/vocoders
                    </a>
                  </div>
                  
                  <p className="newspaper-text mt-4">
                    Мы рассмотрим все заявки и свяжемся с подходящими кандидатами в кратчайшие сроки.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default About;
