import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';

const Index = () => {
  const [showNewsPopup, setShowNewsPopup] = useState(false);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [showDistrictsModal, setShowDistrictsModal] = useState(false);

  const newsItems = [
    {
      id: 1,
      title: "Новая детская площадка в районе Текстильщики",
      excerpt: "На улице Люблинская открылась современная детская площадка с безопасным покрытием и новым игровым оборудованием.",
      image: "/img/f4c85800-a853-4d71-9475-1b894e02b1f0.jpg",
      channel: "@Tekstilshiki_UVAO",
      link: "https://t.me/Tekstilshiki_UVAO",
      time: "2 часа назад"
    },
    {
      id: 2,
      title: "Изменения в движении транспорта на Кутузовском проспекте",
      excerpt: "С понедельника временно ограничено движение в связи с ремонтными работами. Рекомендуются альтернативные маршруты.",
      image: "/img/0671052c-7062-43b0-b10b-245f53b1f8d0.jpg",
      channel: "@Dorogomilovo_teleg",
      link: "https://t.me/Dorogomilovo_teleg",
      time: "4 часа назад"
    },
    {
      id: 3,
      title: "Благоустройство парка в Северном Медведково",
      excerpt: "Завершены работы по обновлению пешеходных дорожек и установке новых скамеек в парке Отрада.",
      image: "/img/8b36e4f5-f663-4742-9efc-25629d5fab35.jpg",
      channel: "@SevernoeMedvedkovo",
      link: "https://t.me/SevernoeMedvedkovo",
      time: "6 часов назад"
    },
    {
      id: 4,
      title: "Строительство нового ТПУ в Бутово",
      excerpt: "Началось строительство транспортно-пересадочного узла, который свяжет метро, автобусы и маршрутки.",
      image: "/img/6f551308-65a8-423e-b6ef-8e984baf2733.jpg",
      channel: "@Severnoe_Butovo",
      link: "https://t.me/Severnoe_Butovo",
      time: "8 часов назад"
    }
  ];

  const districts = {
    "ЮВАО": [
      { name: "Южнопортовый", link: "https://t.me/uzhnoportovi" },
      { name: "Капотня", link: "https://t.me/teleg_kapotnay" },
      { name: "Лефортово", link: "https://t.me/teleg_lefortovo" },
      { name: "Некрасовка", link: "https://t.me/teleg_Nekrasovka" },
      { name: "Печатники", link: "https://t.me/teleg_Pechatniki" },
      { name: "Выхино-Жулебино", link: "https://t.me/teleg_vixino" },
      { name: "Рязанский", link: "https://t.me/Ryzansky_UVAO" },
      { name: "Текстильщики", link: "https://t.me/Tekstilshiki_UVAO" },
      { name: "Люблино", link: "https://t.me/teleg_Lublino_UVAO" },
      { name: "Марьино", link: "https://t.me/teleg_Marino_UVAO" },
      { name: "Кузьминки", link: "https://t.me/teleg_Kuzminki_UVAO" },
      { name: "Нижегородский", link: "https://t.me/Nizhegorodski" }
    ],
    "ВАО": [
      { name: "Северное Измайлово", link: "https://t.me/official_Severnoe_izmailovo" },
      { name: "Сокольники", link: "https://t.me/official_Sokolniki" },
      { name: "Преображенское", link: "https://t.me/Preobrazhenskoe_official" },
      { name: "Измайлово", link: "https://t.me/teleg_Izmailovo" },
      { name: "Метрогородок", link: "https://t.me/teleg_Metrogorodok" },
      { name: "Новогиреево", link: "https://t.me/teleg_Novogireevo" },
      { name: "Косино-Ухтомский", link: "https://t.me/Kosino_Uhtomskii" },
      { name: "Богородское", link: "https://t.me/teleg_Bogorodskoe" },
      { name: "Гольяново", link: "https://t.me/teleg_Golyanovo" },
      { name: "Новокосино", link: "https://t.me/teleg_Novokosino" },
      { name: "Перово", link: "https://t.me/teleg_Perovo" },
      { name: "Соколиная гора", link: "https://t.me/teleg_Sokolinaya_Gora" },
      { name: "Вешняки", link: "https://t.me/teleg_Veshnyaki" },
      { name: "Восточный", link: "https://t.me/teleg_Vostochnyi" },
      { name: "Ивановское", link: "https://t.me/telwg_ivanovskoe" },
      { name: "Восточное Измайлово", link: "https://t.me/Vostochnoe_izmailovo" }
    ],
    "ЗАО": [
      { name: "Раменки", link: "https://t.me/teleg_Ramenki" },
      { name: "Проспект Вернадского", link: "https://t.me/teleg_ProspektVernadskogo" },
      { name: "Очаково-Матвеевское", link: "https://t.me/teleg_OchakovoMatveevskoe" },
      { name: "Можайский", link: "https://t.me/teleg_Mozjaysk" },
      { name: "Кунцево", link: "https://t.me/teleg_kuntcevo" },
      { name: "Дорогомилово", link: "https://t.me/Dorogomilovo_teleg" },
      { name: "Ново-Переделкино", link: "https://t.me/teleg_NovoPeredelkino" },
      { name: "Крылатское", link: "https://t.me/teleg_Krylatskoe" },
      { name: "Внуково", link: "https://t.me/Vnukovo_teleg" },
      { name: "Солнцево", link: "https://t.me/Solncevotop_bot" },
      { name: "Тропарёво-Никулино", link: "https://t.me/Troparyvo_Nikulino" },
      { name: "Фили-Давыдково", link: "https://t.me/Fili_Davydkovo_top" },
      { name: "Филёвский парк", link: "https://t.me/FilyovskijPark" }
    ],
    "ЗелАО": [
      { name: "Матушкино", link: "https://t.me/matushkinor" },
      { name: "Савёлки", link: "https://t.me/savelkii" },
      { name: "Старое Крюково", link: "https://t.me/oldkru" },
      { name: "Силино", link: "https://t.me/silinoo" },
      { name: "Крюково", link: "https://t.me/krukovoo" }
    ],
    "САО": [
      { name: "Савёловский", link: "https://t.me/Savyolovskij" },
      { name: "Ховрино", link: "https://t.me/Hovrinotop" },
      { name: "Тимирязевский", link: "https://t.me/Timiryazevskijonline" },
      { name: "Хорошёвский", link: "https://t.me/Horoshyovskij" },
      { name: "Сокол", link: "https://t.me/Sokoltoponline" },
      { name: "Молжаниновский", link: "https://t.me/Molzhaninovskij" },
      { name: "Коптево", link: "https://t.me/Koptevoonline" },
      { name: "Западное Дегунино", link: "https://t.me/ZapadnoeDeguninoR" },
      { name: "Левобережный", link: "https://t.me/Levoberezhnyj" },
      { name: "Головинский", link: "https://t.me/Golovinskij" },
      { name: "Войковский", link: "https://t.me/Vojkovskij" },
      { name: "Бескудниковский", link: "https://t.me/Beskudnikovskij" },
      { name: "Дмитровский", link: "https://t.me/Dmitrovskijj" },
      { name: "Восточное Дегунино", link: "https://t.me/WeDeguninoV" },
      { name: "Аэропорт", link: "https://t.me/airportSAO" },
      { name: "Беговой", link: "https://t.me/begovoi_teleg" }
    ],
    "СВАО": [
      { name: "Алтуфьевский", link: "https://t.me/Altufevskij" },
      { name: "Бабушкинский", link: "https://t.me/Babushkinskijr" },
      { name: "Свиблово", link: "https://t.me/Sviblovor" },
      { name: "Северное Медведково", link: "https://t.me/SevernoeMedvedkovo" },
      { name: "Северный", link: "https://t.me/severnyjj" },
      { name: "Южное Медведково", link: "https://t.me/YuzhnoeMedvedkovo" },
      { name: "Ярославский", link: "https://t.me/Yaroslavskij" },
      { name: "Алексеевский", link: "https://t.me/Alekseevskij" },
      { name: "Бибирево", link: "https://t.me/Bibirevor" },
      { name: "Бутырский", link: "https://t.me/Butyrskij" },
      { name: "Лианозово", link: "https://t.me/Lianozovor" },
      { name: "Лосиноостровский", link: "https://t.me/Losinoostrovskij" },
      { name: "Марфино", link: "https://t.me/marfinor" },
      { name: "Марьина роща", link: "https://t.me/MarinaRoshar" },
      { name: "Останкинский", link: "https://t.me/Ostankinskij" },
      { name: "Отрадное", link: "https://t.me/Otradnoer" },
      { name: "Ростокино", link: "https://t.me/rostokinor" }
    ],
    "СЗАО": [
      { name: "Куркино", link: "https://t.me/Kurkinotop" },
      { name: "Митино", link: "https://t.me/Mitinocool" },
      { name: "Покровское-Стрешнево", link: "https://t.me/PokrovskoeStreshnevotop" },
      { name: "Северное Тушино", link: "https://t.me/SevernoeTushinotop" },
      { name: "Строгино", link: "https://t.me/Stroginotop" },
      { name: "Хорошёво-Мнёвники", link: "https://t.me/HoroshyovoMnyovniki" },
      { name: "Щукино", link: "https://t.me/Shukinotop" },
      { name: "Южное Тушино", link: "https://t.me/YuzhnoeTushinotop" }
    ],
    "ЦАО": [
      { name: "Тверской", link: "https://t.me/teleg_Tverskoi" },
      { name: "Мещанский", link: "https://t.me/Meschanskii" },
      { name: "Пресненский", link: "https://t.me/Presnenskii" },
      { name: "Арбат", link: "https://t.me/teleg_Arbat" },
      { name: "Басманный", link: "https://t.me/teleg_Basmannyi" },
      { name: "Хамовники", link: "https://t.me/teleg_Hamovniki" },
      { name: "Таганский", link: "https://t.me/teleg_Taganski" },
      { name: "Красносельский", link: "https://t.me/telwg_Krasnoselski" },
      { name: "Якиманка", link: "https://t.me/telwg_Yakimanka" },
      { name: "Замоскворечье", link: "https://t.me/Zamoskvorech" }
    ],
    "ЮАО": [
      { name: "Орехово-Борисово Северное", link: "https://t.me/Orehovo_Borisovo_Severnoe" },
      { name: "Орехово-Борисово Южное", link: "https://t.me/Orehovo_Borisovo_Uzhnoe" },
      { name: "Чертаново Северное", link: "https://t.me/Chertanovo_Sever" },
      { name: "Чертаново Центральное", link: "https://t.me/Chertanovo_Tsentralnoe" },
      { name: "Чертаново Южное", link: "https://t.me/Chertanovo_Uzhnoe" },
      { name: "Царицыно", link: "https://t.me/Tsaritcyno" },
      { name: "Бирюлёво Восточное", link: "https://t.me/Birulovo_Vostochnoe" },
      { name: "Бирюлёво Западное", link: "https://t.me/Birulovo_Zapadnoe" },
      { name: "Москворечье-Сабурово", link: "https://t.me/Moskvoreche_Saburovo" },
      { name: "Нагатинский Затон", link: "https://t.me/Nagatinskii_Zaton" },
      { name: "Братеево", link: "https://t.me/teleg_Brateevo" },
      { name: "Даниловский", link: "https://t.me/teleg_Danilovskii" },
      { name: "Донской", link: "https://t.me/teleg_Donskoi" },
      { name: "Нагатино-Садовники", link: "https://t.me/teleg_Nagatino_Sadovniki" },
      { name: "Нагорный", link: "https://t.me/teleg_Nagornyi" },
      { name: "Зябликово", link: "https://t.me/teleg_Zyablikovo" }
    ],
    "ЮЗАО": [
      { name: "Академический", link: "https://t.me/teleg_Akademicheskii" },
      { name: "Гагаринский", link: "https://t.me/teleg_Gagarinskii" },
      { name: "Зюзино", link: "https://t.me/teleg_Zuzino" },
      { name: "Коньково", link: "https://t.me/teleg_Konkovo" },
      { name: "Котловка", link: "https://t.me/teleg_Kotlovka" },
      { name: "Ломоносовский", link: "https://t.me/teleg_Lomonosovskii" },
      { name: "Обручевский", link: "https://t.me/Obruchevskii" },
      { name: "Северное Бутово", link: "https://t.me/Severnoe_Butovo" },
      { name: "Тёплый Стан", link: "https://t.me/Warm_Stan" },
      { name: "Южное Бутово", link: "https://t.me/Uzhnoe_Butovo" },
      { name: "Ясенево 1", link: "https://t.me/s29641" },
      { name: "Ясенево 2", link: "https://t.me/s29642" }
    ]
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length);
      setShowNewsPopup(true);
      setTimeout(() => setShowNewsPopup(false), 5000);
    }, 10000);

    return () => clearInterval(interval);
  }, [newsItems.length]);
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/img/c438e9aa-4122-478b-9d70-8efc9b81e816.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="px-6 py-8">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="MapPin" size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">Москвичи</h1>
          </div>
        </header>

        {/* Hero Section */}
        <section className="px-6 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
              Москвичи
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-blue-300">
              Новости Москвы
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Сеть столичных медиа «Москвичи»
            </p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://t.me/Mos_Never_sleep', '_blank')}
            >
              <Icon name="Send" size={20} className="mr-2" />
              Подписаться в Telegram
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section className="px-6 py-16 bg-white bg-opacity-10 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-white">
              Кто мы?
            </h2>
            <div className="text-lg leading-relaxed text-gray-200 space-y-6">
              <p>
                Мы — крупнейшая сеть районных Telegram-каналов Москвы.
              </p>
              <p>
                Проект «Москвичи» объединяет все районы столицы в едином информационном пространстве:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <Icon name="CheckCircle" size={20} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Канал каждого района Москвы — быть в курсе всех новостей своего района, присылать свои инфоповоды и фотографии</span>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle" size={20} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Канал Барахолки — купить, продать, обменять</span>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle" size={20} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Каналы Бюро находок — если потеряли кошелёк, документы или убежала собака</span>
                </li>
                <li className="flex items-start">
                  <Icon name="CheckCircle" size={20} className="text-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span>Окружные чаты — обсудить наболевшие вопросы благоустройства, парковок, безопасности и других тем, которые волнуют каждый микрорайон</span>
                </li>
              </ul>
              <div className="text-center mt-8">
                <Button 
                  variant="outline" 
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
                  onClick={() => window.open('https://t.me/Moscvich_bot', '_blank')}
                >
                  <Icon name="Search" size={20} className="mr-2" />
                  Найти медиа своего района: @Moscvich_bot
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Districts Section */}
        <section className="px-6 py-16 bg-white bg-opacity-5 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-white">
              Районные медиа
            </h2>
            <p className="text-center text-gray-300 mb-8">
              Выберите свой округ и найдите канал вашего района
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(districts).map(([district, channels]) => (
                <Dialog key={district}>
                  <DialogTrigger asChild>
                    <Card className="bg-white bg-opacity-10 backdrop-blur-sm border-blue-400 border hover:bg-opacity-20 transition-all duration-300 cursor-pointer">
                      <CardHeader className="text-center">
                        <CardTitle className="text-white text-lg">{district}</CardTitle>
                        <p className="text-blue-300 text-sm">{channels.length} районов</p>
                      </CardHeader>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-md max-h-96 overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Районы {district}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-2">
                      {channels.map((channel, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className="w-full justify-start text-left"
                          onClick={() => window.open(channel.link, '_blank')}
                        >
                          <Icon name="MapPin" size={16} className="mr-2" />
                          {channel.name}
                        </Button>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>

        {/* Contacts Section */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-white">
              Контакты
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-opacity-20 transition-all duration-300">
                <Icon name="Search" size={32} className="text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Найти канал</h3>
                <Button 
                  variant="ghost" 
                  className="text-blue-400 hover:text-white"
                  onClick={() => window.open('https://t.me/Moscvich_bot', '_blank')}
                >
                  @Moscvich_bot
                </Button>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-opacity-20 transition-all duration-300">
                <Icon name="MessageCircle" size={32} className="text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Админ</h3>
                <Button 
                  variant="ghost" 
                  className="text-blue-400 hover:text-white"
                  onClick={() => window.open('https://t.me/AdmChat_bot', '_blank')}
                >
                  @AdmChat_bot
                </Button>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-opacity-20 transition-all duration-300">
                <Icon name="Gem" size={32} className="text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Реклама</h3>
                <Button 
                  variant="ghost" 
                  className="text-blue-400 hover:text-white"
                  onClick={() => window.open('https://t.me/teleg_reklama_bot', '_blank')}
                >
                  @teleg_reklama_bot
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-8 text-center">
          <p className="text-gray-400">
            © 2025 Москвичи. Сеть столичных медиа.
          </p>
        </footer>
      </div>

      {/* News Popup */}
      {showNewsPopup && (
        <div className="fixed top-4 right-4 z-50 max-w-sm animate-fade-in">
          <Card className="bg-white shadow-2xl border-2 border-blue-500">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <img 
                  src={newsItems[currentNewsIndex].image} 
                  alt="News" 
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-blue-600 font-medium mb-1">
                    {newsItems[currentNewsIndex].channel}
                  </p>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                    {newsItems[currentNewsIndex].title}
                  </h4>
                  <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                    {newsItems[currentNewsIndex].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {newsItems[currentNewsIndex].time}
                    </span>
                    <Button 
                      size="sm" 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-xs"
                      onClick={() => window.open(newsItems[currentNewsIndex].link, '_blank')}
                    >
                      Читать
                    </Button>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-1 h-6 w-6 hover:bg-gray-100"
                  onClick={() => setShowNewsPopup(false)}
                >
                  <Icon name="X" size={12} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;