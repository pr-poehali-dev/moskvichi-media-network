import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
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
    </div>
  );
};

export default Index;