
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/Icon';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Контакты | Кастинги СПб | ТФП съёмки</title>
        <meta name="description" content="Контактная информация для связи с организаторами кастингов в Санкт-Петербурге. Telegram: t.me/vocoders" />
        <meta name="keywords" content="контакты, кастинги СПб, связаться, ТФП съёмки, telegram vocoders" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <h1 className="newspaper-title text-center">КОНТАКТЫ</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-8">
            <div className="md:col-span-8">
              <article>
                <h2 className="newspaper-heading">КАК С НАМИ СВЯЗАТЬСЯ</h2>
                
                <p className="newspaper-text mb-4">
                  Для участия в кастинге и получения дополнительной информации о проектах, пожалуйста, свяжитесь с нами через Telegram. Это наш основной канал коммуникации, обеспечивающий быструю и удобную связь.
                </p>
                
                <div className="border-2 border-black p-6 my-8 text-center">
                  <h3 className="font-serif text-xl font-bold mb-4">НАШИ КОНТАКТЫ:</h3>
                  
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Icon name="Send" className="h-8 w-8" />
                    <a 
                      href="https://t.me/vocoders" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="newspaper-contact text-2xl underline"
                    >
                      t.me/vocoders
                    </a>
                  </div>
                  
                  <p className="newspaper-text mt-4">
                    Мы рассматриваем все заявки и отвечаем в течение 1-2 рабочих дней.
                  </p>
                </div>
                
                <h3 className="font-serif text-xl font-bold my-4">ЧТО УКАЗАТЬ В СООБЩЕНИИ</h3>
                
                <p className="newspaper-text mb-4">
                  Для более эффективного рассмотрения вашей кандидатуры, пожалуйста, включите в сообщение следующую информацию:
                </p>
                
                <ul className="list-disc pl-5 space-y-2 newspaper-text mb-6">
                  <li>Ваше имя</li>
                  <li>Возраст</li>
                  <li>Рост и параметры (если применимо)</li>
                  <li>Опыт работы моделью (если есть)</li>
                  <li>Несколько актуальных фотографий (портрет и в полный рост)</li>
                  <li>Контактный телефон (для оперативной связи)</li>
                  <li>Предпочтительный формат проектов (музыкальные ролики, короткометражные фильмы и т.д.)</li>
                </ul>
                
                <blockquote className="newspaper-quote">
                  "Четкое и информативное первое сообщение значительно увеличивает ваши шансы на участие в проекте. Мы ценим профессиональный подход с самого начала коммуникации."
                </blockquote>
                
                <h3 className="font-serif text-xl font-bold my-4">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h3>
                
                <div className="space-y-4 newspaper-text">
                  <div>
                    <p className="font-bold">Вопрос: Обязателен ли опыт работы моделью?</p>
                    <p>Ответ: Нет, опыт не обязателен. Мы рассматриваем кандидатов с разным уровнем опыта, включая начинающих моделей. Главное — соответствие внешним требованиям и готовность к творческой работе.</p>
                  </div>
                  
                  <div>
                    <p className="font-bold">Вопрос: Как долго длятся съёмки?</p>
                    <p>Ответ: Продолжительность съёмок зависит от проекта. Музыкальные ролики обычно снимаются за 1-2 дня, короткометражные фильмы могут требовать нескольких съёмочных дней, иногда с перерывами.</p>
                  </div>
                  
                  <div>
                    <p className="font-bold">Вопрос: Предоставляются ли костюмы и макияж?</p>
                    <p>Ответ: Да, для большинства проектов мы обеспечиваем стилистов, визажистов и костюмеров. В некоторых случаях может потребоваться что-то из вашего гардероба, но об этом вас предупредят заранее.</p>
                  </div>
                  
                  <div>
                    <p className="font-bold">Вопрос: Когда я получу материалы для портфолио?</p>
                    <p>Ответ: Отобранные и обработанные материалы предоставляются в течение 2-4 недель после завершения съёмок, в зависимости от сложности постобработки.</p>
                  </div>
                </div>
              </article>
            </div>
            
            <div className="md:col-span-4">
              <div className="border border-black p-4 mb-6">
                <h3 className="newspaper-subtitle border-b border-black pb-2 mb-4">НАШИ ПРЕИМУЩЕСТВА</h3>
                
                <div className="space-y-4 newspaper-text">
                  <div>
                    <p className="font-bold">Профессиональная команда</p>
                    <p>Работаем с опытными специалистами в области режиссуры, операторского искусства и фотографии.</p>
                  </div>
                  
                  <div>
                    <p className="font-bold">Качественное оборудование</p>
                    <p>Используем современную технику для создания продукта высокого качества.</p>
                  </div>
                  
                  <div>
                    <p className="font-bold">Творческий подход</p>
                    <p>Стремимся к созданию уникальных и атмосферных работ с индивидуальным стилем.</p>
                  </div>
                  
                  <div>
                    <p className="font-bold">Взаимовыгодное сотрудничество</p>
                    <p>Вы получаете качественные материалы для портфолио, мы — возможность реализовать творческие идеи.</p>
                  </div>
                </div>
              </div>
              
              <div className="border border-black p-4 mb-6">
                <h3 className="newspaper-subtitle border-b border-black pb-2 mb-4">ОТЗЫВЫ УЧАСТНИКОВ</h3>
                
                <div className="space-y-6 newspaper-text">
                  <div>
                    <p className="italic">«Прекрасный опыт сотрудничества! Творческая и дружелюбная атмосфера на съёмках, профессиональный подход к делу. Очень довольна полученными материалами для портфолио».</p>
                    <p className="text-right font-bold mt-1">— Анна, 24 года</p>
                  </div>
                  
                  <div>
                    <p className="italic">«Для меня это был первый опыт в съёмках музыкального видео. Несмотря на отсутствие опыта, команда помогла раскрыться перед камерой. Рекомендую всем, кто хочет попробовать себя в этом направлении».</p>
                    <p className="text-right font-bold mt-1">— Михаил, 22 года</p>
                  </div>
                  
                  <div>
                    <p className="italic">«Профессиональный подход, чёткая организация процесса съёмок, внимание к деталям. Результат превзошёл ожидания!»</p>
                    <p className="text-right font-bold mt-1">— Екатерина, 26 лет</p>
                  </div>
                </div>
              </div>
              
              <div className="border border-black p-4 text-center">
                <h3 className="newspaper-subtitle border-b border-black pb-2 mb-4">СВЯЖИТЕСЬ С НАМИ</h3>
                
                <div className="p-4">
                  <p className="newspaper-text mb-4">
                    Не откладывайте — ваша творческая карьера может начаться прямо сейчас! Отправьте ваше портфолио или несколько фотографий через Telegram.
                  </p>
                  
                  <div className="flex items-center justify-center gap-2 mt-4 mb-4">
                    <Icon name="Send" className="h-6 w-6" />
                    <a 
                      href="https://t.me/vocoders" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="newspaper-contact text-xl underline"
                    >
                      t.me/vocoders
                    </a>
                  </div>
                  
                  <p className="newspaper-text mt-2">
                    Ждем ваших сообщений!
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

export default Contact;
