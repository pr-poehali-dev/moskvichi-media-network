import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { useState, useEffect } from 'react';

const Index = () => {
  const [showNewsPopup, setShowNewsPopup] = useState(false);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  const newsItems = [
    {
      id: 1,
      title: "Благоустройство дворов в Текстильщиках",
      excerpt: "Завершено благоустройство 12 дворовых территорий в районе. Обновлены детские площадки, установлены новые скамейки и урны.",
      image: "/img/cac52f1c-82b4-4c49-a5cf-e6fd542baad4.jpg",
      channel: "@Tekstilshiki_UVAO",
      link: "https://t.me/Tekstilshiki_UVAO",
      time: "2 часа назад"
    },
    {
      id: 2,
      title: "Ремонт дорог в Дорогомилово",
      excerpt: "На улице Кутузовский проспект продолжается капитальный ремонт дорожного покрытия. Движение частично ограничено.",
      image: "/img/98589c86-5774-410e-aadb-776532bd4ba1.jpg",
      channel: "@Dorogomilovo_teleg",
      link: "https://t.me/Dorogomilovo_teleg",
      time: "4 часа назад"
    },
    {
      id: 3,
      title: "Строительство ТПУ в Северном Бутово",
      excerpt: "Началось строительство транспортно-пересадочного узла. Проект объединит станцию метро с автобусными маршрутами.",
      image: "/img/5a305028-254c-46ba-9bde-ff807cdf2d29.jpg",
      channel: "@Severnoe_Butovo",
      link: "https://t.me/Severnoe_Butovo",
      time: "6 часов назад"
    },
    {
      id: 4,
      title: "Общественные мероприятия в Северном Медведково",
      excerpt: "В районе прошел день соседских сообществ. Жители обсудили вопросы благоустройства и безопасности.",
      image: "/img/4a5077b8-22b0-43d9-ab13-829f57ad2736.jpg",
      channel: "@SevernoeMedvedkovo",
      link: "https://t.me/SevernoeMedvedkovo",
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
      { name: "Новые Черёмушки", link: "https://t.me/s29641" },
      { name: "Ясенево", link: "https://t.me/s29642" }
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
    <div className="min-h-screen relative overflow-hidden font-sans">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/img/8b308e80-8a37-4359-8be3-05d4d923a9ec.jpg')`,
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header with Logo */}
        <header className="px-6 py-4">
          <div className="flex items-center">
            <img 
              src="https://cdn.poehali.dev/files/505ff971-381c-47f1-8278-207e3bea1b7a.jpg" 
              alt="Москвичи" 
              className="h-12 w-12 mr-3 rounded-full object-cover"
            />
            <div className="text-white">
              <h1 className="text-2xl font-bold">Москвичи</h1>
              <p className="text-sm text-blue-300">Новости Москвы</p>
            </div>
          </div>
        </header>

        {/* Main Hero Section */}
        <section className="px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Москвичи
            </h1>
            <h2 className="text-2xl md:text-3xl mb-4 text-blue-300">
              Новости Москвы
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-gray-200">
              Сеть столичных медиа «Москвичи»
            </p>
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://t.me/Mos_Never_sleep', '_blank')}
            >
              <Icon name="Send" className="mr-3" size={24} />
              Подписаться в Telegram
            </Button>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-white drop-shadow-lg">
              Кто мы?
            </h2>
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-200">
              <p className="text-lg text-gray-800 mb-6 leading-relaxed text-center">
                Мы — крупнейшая сеть районных Telegram-каналов Москвы.
              </p>
              <p className="text-lg text-gray-800 mb-6 leading-relaxed text-center">
                Проект «Москвичи» объединяет все районы столицы в едином информационном пространстве:
              </p>
              <ul className="space-y-4 text-gray-700 mb-8">
                <li className="flex items-start">
                  <Icon name="MapPin" className="mr-3 mt-1 text-blue-600" size={20} />
                  <span>Канал каждого района Москвы — быть в курсе всех новостей своего района, присылать свои инфоповоды и фотографии</span>
                </li>
                <li className="flex items-start">
                  <Icon name="ShoppingCart" className="mr-3 mt-1 text-blue-600" size={20} />
                  <span>Канал Барахолки — купить, продать, обменять</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Search" className="mr-3 mt-1 text-blue-600" size={20} />
                  <span>Каналы Бюро находок — если потеряли кошелёк, документы или убежала собака</span>
                </li>
                <li className="flex items-start">
                  <Icon name="MessageCircle" className="mr-3 mt-1 text-blue-600" size={20} />
                  <span>Окружные чаты — обсудить наболевшие вопросы благоустройства, парковок, безопасности и других тем, которые волнуют каждый микрорайон</span>
                </li>
              </ul>
              <div className="text-center">
                <p className="text-lg text-gray-800 mb-4 font-medium">
                  Найди медиа своего района:
                </p>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg mb-4"
                  onClick={() => window.open('https://t.me/Moscvich_bot', '_blank')}
                >
                  @Moscvich_bot
                </Button>
                <div className="mt-4">
                  <p className="text-lg text-gray-800 mb-4 font-medium">
                    Подпишись на наш главный канал:
                  </p>
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg"
                    onClick={() => window.open('https://t.me/Mos_Never_sleep', '_blank')}
                  >
                    @Mos_Never_sleep
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Districts Section */}
        <section className="px-6 py-16 bg-white/5 backdrop-blur-sm">
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
            <h2 className="text-4xl font-bold mb-12 text-center text-white">
              Контакты
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/30 transition-all duration-300 shadow-xl">
                <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Icon name="Search" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Найти канал своего района</h3>
                <Button 
                  variant="ghost" 
                  className="text-blue-300 hover:text-white hover:bg-blue-600/20 rounded-full px-6 py-2"
                  onClick={() => window.open('https://t.me/Moscvich_bot', '_blank')}
                >
                  @Moscvich_bot
                </Button>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/30 transition-all duration-300 shadow-xl">
                <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Icon name="MessageCircle" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Админ</h3>
                <Button 
                  variant="ghost" 
                  className="text-blue-300 hover:text-white hover:bg-blue-600/20 rounded-full px-6 py-2"
                  onClick={() => window.open('https://t.me/AdmChat_bot', '_blank')}
                >
                  @AdmChat_bot
                </Button>
              </div>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/30 transition-all duration-300 shadow-xl">
                <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Icon name="Gem" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Реклама</h3>
                <Button 
                  variant="ghost" 
                  className="text-blue-300 hover:text-white hover:bg-blue-600/20 rounded-full px-6 py-2"
                  onClick={() => window.open('https://t.me/teleg_reklama_bot', '_blank')}
                >
                  @teleg_reklama_bot
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-8 text-center border-t border-white/20">
          <p className="text-gray-300">
            © 2022 Москвичи. Сеть столичных медиа.
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