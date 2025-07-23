import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
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
              src="/img/5f9567c5-efd0-40c2-b3a1-7c6d6333ced9.jpg" 
              alt="Москвичи" 
              className="h-12 w-auto mr-3 rounded-lg"
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
        <section className="px-6 py-16 bg-white/10 backdrop-blur-md">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-white">
              Кто мы?
            </h2>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <p className="text-lg text-gray-100 mb-6 leading-relaxed">
                Мы — крупнейшая сеть районных Telegram-каналов Москвы.
              </p>
              <p className="text-lg text-gray-100 mb-6 leading-relaxed">
                Проект «Москвичи» объединяет все районы столицы в едином информационном пространстве:
              </p>
              <ul className="space-y-4 text-gray-100 mb-8">
                <li className="flex items-start">
                  <Icon name="MapPin" className="mr-3 mt-1 text-blue-400" size={20} />
                  <span>Канал каждого района Москвы — быть в курсе всех новостей своего района, присылать свои инфоповоды и фотографии</span>
                </li>
                <li className="flex items-start">
                  <Icon name="ShoppingCart" className="mr-3 mt-1 text-blue-400" size={20} />
                  <span>Канал Барахолки — купить, продать, обменять</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Search" className="mr-3 mt-1 text-blue-400" size={20} />
                  <span>Каналы Бюро находок — если потеряли кошелёк, документы или убежала собака</span>
                </li>
                <li className="flex items-start">
                  <Icon name="MessageCircle" className="mr-3 mt-1 text-blue-400" size={20} />
                  <span>Окружные чаты — обсудить наболевшие вопросы благоустройства, парковок, безопасности и других тем, которые волнуют каждый микрорайон</span>
                </li>
              </ul>
              <div className="text-center">
                <p className="text-lg text-gray-100 mb-4">
                  Найти медиа своего района и подпишись:
                </p>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg"
                  onClick={() => window.open('https://t.me/Moscvich_bot', '_blank')}
                >
                  @Moscvich_bot
                </Button>
              </div>
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
            © 2025 Москвичи. Сеть столичных медиа.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;