
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/Icon';

const Tips = () => {
  return (
    <>
      <Helmet>
        <title>Советы для моделей | Кастинги СПб</title>
        <meta name="description" content="Полезные советы для моделей по подготовке к кастингам и съёмкам в Санкт-Петербурге. Как успешно пройти кастинг." />
        <meta name="keywords" content="советы моделям, подготовка к кастингу, как пройти кастинг, ТФП съёмки, советы для начинающих моделей" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <h1 className="newspaper-title text-center">СОВЕТЫ ДЛЯ МОДЕЛЕЙ</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-8">
            <div className="md:col-span-8">
              <article className="newspaper-column">
                <h2 className="newspaper-heading">КАК УСПЕШНО ПРОЙТИ КАСТИНГ</h2>
                
                <p className="mb-4">
                  Успешное прохождение кастинга требует не только внешних данных, но и правильного подхода к подготовке и презентации себя. Мы собрали полезные рекомендации, которые помогут вам увеличить шансы на успех.
                </p>
                
                <h3 className="font-serif text-xl font-bold my-4">ПОДГОТОВКА К КАСТИНГУ</h3>
                
                <p className="mb-4">
                  <strong>1. Подготовьте качественное портфолио.</strong> Даже если у вас нет опыта работы моделью, можно сделать несколько хороших фотографий, которые продемонстрируют вашу внешность и потенциал. Включите фото в полный рост, портрет и несколько снимков с разных ракурсов.
                </p>
                
                <p className="mb-4">
                  <strong>2. Изучите информацию о проекте.</strong> Постарайтесь узнать как можно больше о том, для чего проводится кастинг, какой образ ищут организаторы. Это поможет вам правильно себя преподнести.
                </p>
                
                <p className="mb-4">
                  <strong>3. Подготовьте краткое резюме.</strong> Укажите ваш возраст, рост, вес, параметры (если это релевантно), опыт работы (если есть) и контактную информацию.
                </p>
                
                <blockquote className="newspaper-quote">
                  "Первое впечатление складывается не только из внешности, но и из вашего отношения к делу, пунктуальности и способности следовать инструкциям при подаче заявки."
                </blockquote>
                
                <h3 className="font-serif text-xl font-bold my-4">ВО ВРЕМЯ КАСТИНГА</h3>
                
                <p className="mb-4">
                  <strong>1. Будьте пунктуальны.</strong> Опоздание может негативно повлиять на решение, даже если ваша внешность идеально подходит для проекта.
                </p>
                
                <p className="mb-4">
                  <strong>2. Оденьтесь соответствующе.</strong> Если нет специальных требований, выбирайте простую одежду, которая хорошо сидит и не отвлекает внимание от вас. Минимум макияжа, чтобы организаторы могли оценить вашу естественную внешность.
                </p>
                
                <p className="mb-4">
                  <strong>3. Будьте естественны.</strong> Избегайте наигранности и неестественных поз. Двигайтесь плавно и уверенно, показывая свою индивидуальность.
                </p>
                
                <p className="mb-4">
                  <strong>4. Следуйте инструкциям.</strong> Внимательно слушайте, что вам говорят, и выполняйте указания режиссера или фотографа.
                </p>
                
                <h3 className="font-serif text-xl font-bold my-4">ПОДГОТОВКА К СЪЁМКАМ</h3>
                
                <p className="mb-4">
                  <strong>1. Высыпайтесь.</strong> Недостаток сна сразу отражается на внешности. Постарайтесь хорошо отдохнуть перед съёмкой.
                </p>
                
                <p className="mb-4">
                  <strong>2. Следите за питанием.</strong> За несколько дней до съёмки рекомендуется исключить продукты, которые могут вызвать отеки или проблемы с кожей (соленое, острое, алкоголь).
                </p>
                
                <p className="mb-4">
                  <strong>3. Подготовьте кожу и волосы.</strong> Используйте увлажняющие средства для лица и тела, маски для волос — это поможет выглядеть свежее и ухоженнее.
                </p>
                
                <div className="border-2 border-black p-4 my-6">
                  <h3 className="font-serif text-xl font-bold mb-3">ТИПИЧНЫЕ ОШИБКИ НАЧИНАЮЩИХ МОДЕЛЕЙ:</h3>
                  
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Чрезмерный макияж на кастинге</li>
                    <li>Неестественные позы и выражения лица</li>
                    <li>Игнорирование указаний фотографа/режиссера</li>
                    <li>Отсутствие пунктуальности</li>
                    <li>Недостаток подготовки (не изучили информацию о проекте)</li>
                    <li>Переоценка своих возможностей или неуверенность в себе</li>
                    <li>Отсутствие базовых знаний о работе модели</li>
                  </ul>
                </div>
                
                <h3 className="font-serif text-xl font-bold my-4">ВО ВРЕМЯ СЪЁМОК</h3>
                
                <p className="mb-4">
                  <strong>1. Будьте готовы к повторениям.</strong> Иногда для получения идеального кадра требуется много дублей и повторений одних и тех же действий.
                </p>
                
                <p className="mb-4">
                  <strong>2. Поддерживайте энергию.</strong> Съёмки могут быть длительными, поэтому важно сохранять энтузиазм и энергию на протяжении всего процесса.
                </p>
                
                <p className="mb-4">
                  <strong>3. Будьте открыты для экспериментов.</strong> Не бойтесь пробовать разные образы и эмоции, даже если они кажутся вам необычными.
                </p>
                
                <p className="mb-4">
                  <strong>4. Задавайте вопросы.</strong> Если вам что-то непонятно, лучше уточнить, чем делать по-своему и потом переснимать.
                </p>
              </article>
            </div>
            
            <div className="md:col-span-4">
              <div className="border border-black p-4 mb-6">
                <h3 className="newspaper-subtitle border-b border-black pb-2 mb-4">ПОЛЕЗНЫЕ НАВЫКИ ДЛЯ МОДЕЛЕЙ</h3>
                
                <div className="space-y-4 newspaper-text">
                  <div>
                    <p className="font-bold">Основы актерского мастерства</p>
                    <p>Помогут передавать эмоции и вживаться в образ</p>
                  </div>
                  
                  <div>
                    <p className="font-bold">Умение двигаться перед камерой</p>
                    <p>Плавные, естественные движения делают кадры более живыми</p>
                  </div>
                  
                  <div>
                    <p className="font-bold">Знание своих выигрышных ракурсов</p>
                    <p>Понимание, как выгодно подать свою внешность</p>
                  </div>
                  
                  <div>
                    <p className="font-bold">Базовые навыки позирования</p>
                    <p>Разнообразие поз для фото и видеосъемки</p>
                  </div>
                  
                  <div>
                    <p className="font-bold">Умение работать с мимикой</p>
                    <p>Контроль над выражением лица для передачи разных эмоций</p>
                  </div>
                </div>
              </div>
              
              <div className="border border-black p-4 mb-6">
                <h3 className="newspaper-subtitle border-b border-black pb-2 mb-4">ПРАВИЛА ПРОФЕССИОНАЛЬНОГО ПОВЕДЕНИЯ</h3>
                
                <ul className="list-disc pl-5 space-y-2 newspaper-text">
                  <li>Уважайте время всей команды, приходите вовремя</li>
                  <li>Поддерживайте позитивную атмосферу на площадке</li>
                  <li>Не используйте телефон во время работы</li>
                  <li>Берегите реквизит и костюмы</li>
                  <li>Следуйте всем инструкциям режиссера и фотографа</li>
                  <li>Не стесняйтесь задавать уточняющие вопросы</li>
                  <li>Будьте готовы к длительным съемкам</li>
                </ul>
              </div>
              
              <div className="border border-black p-4">
                <h3 className="newspaper-subtitle border-b border-black pb-2 mb-4">ПОДГОТОВКА К СЪЁМКЕ</h3>
                
                <div className="space-y-4 newspaper-text">
                  <div>
                    <p className="font-bold">За неделю до съёмки:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Начните питаться правильно</li>
                      <li>Пейте больше воды</li>
                      <li>Сделайте увлажняющие маски для лица и волос</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-bold">За день до съёмки:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Исключите соленую и острую пищу</li>
                      <li>Подготовьте одежду по рекомендациям организаторов</li>
                      <li>Ложитесь спать пораньше</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-bold">В день съёмки:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Примите контрастный душ для тонуса</li>
                      <li>Не наносите макияж, если это не оговорено отдельно</li>
                      <li>Выходите из дома с запасом времени</li>
                    </ul>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="text-center p-2">
                  <p className="newspaper-text mb-3">
                    Если у вас остались вопросы о подготовке к кастингу или съёмкам, вы всегда можете уточнить их у нас:
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
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Tips;
