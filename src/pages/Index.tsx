import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-bebas text-rap-cyan tracking-widest">MC STORM</div>
            <div className="hidden md:flex space-x-8 font-urban font-medium">
              <a href="#home" className="hover:text-rap-cyan transition-colors duration-300">ГЛАВНАЯ</a>
              <a href="#about" className="hover:text-rap-cyan transition-colors duration-300">О СЕБЕ</a>
              <a href="#music" className="hover:text-rap-cyan transition-colors duration-300">МУЗЫКА</a>
              <a href="#contact" className="hover:text-rap-cyan transition-colors duration-300">КОНТАКТЫ</a>
            </div>
            <Button className="md:hidden" variant="ghost" size="sm">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        {/* Urban Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-gray-700"></div>
            ))}
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rap-cyan/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rap-orange/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bebas font-black leading-none mb-4 bg-gradient-to-r from-rap-cyan via-white to-rap-orange bg-clip-text text-transparent animate-fade-in">
              MC
            </h1>
            <h1 className="text-9xl md:text-[12rem] font-bebas font-black leading-none mb-8 bg-gradient-to-r from-rap-orange via-white to-rap-cyan bg-clip-text text-transparent animate-fade-in delay-300">
              STORM
            </h1>
          </div>
          
          <div className="text-2xl md:text-3xl font-urban font-light mb-8 text-gray-300 max-w-4xl mx-auto animate-fade-in delay-500">
            <span className="text-rap-cyan font-bold">УЛИЧНЫЕ БИТЫ</span> × 
            <span className="text-rap-orange font-bold"> ЧЕСТНЫЕ ТЕКСТЫ</span> × 
            <span className="text-white font-bold"> МОЩНАЯ ПОДАЧА</span>
          </div>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-400 max-w-3xl mx-auto font-urban animate-fade-in delay-700">
            Рождённый на улицах Москвы. Каждый трек — это моя история, каждая строчка — кусочек души.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in delay-1000">
            <Button size="lg" className="bg-gradient-to-r from-rap-cyan to-blue-500 hover:from-rap-cyan/80 hover:to-blue-500/80 text-black font-bebas text-xl px-12 py-6 rounded-none transform hover:scale-105 transition-all duration-300 shadow-lg shadow-rap-cyan/25">
              <Icon name="Play" size={24} className="mr-3" />
              СЛУШАТЬ СЕЙЧАС
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-rap-orange text-rap-orange hover:bg-rap-orange hover:text-black font-bebas text-xl px-12 py-6 rounded-none transform hover:scale-105 transition-all duration-300">
              <Icon name="User" size={24} className="mr-3" />
              МОЯ ИСТОРИЯ
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-rap-cyan" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23333333" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-7xl md:text-8xl font-bebas text-center mb-20 bg-gradient-to-r from-rap-orange to-rap-cyan bg-clip-text text-transparent">
            ОТ УЛИЦ ДО СТУДИИ
          </h2>
          
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="font-bebas text-4xl text-rap-cyan mb-8">МОЙ ПУТЬ В РЭП</h3>
                <p className="text-xl leading-relaxed text-gray-300 font-urban">
                  Начинал с фристайла в подъездах и на школьных дворах. 
                  В 16 лет написал первый серьёзный трек про жизнь в спальных районах. 
                  С тех пор музыка стала моим языком общения с миром.
                </p>
                <p className="text-xl leading-relaxed text-gray-300 font-urban">
                  Каждый бит, каждая рифма рождается из реального опыта. 
                  Не пишу про то, чего не видел. Не говорю того, во что сам не верю.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div className="bg-gradient-to-br from-rap-cyan/20 to-blue-500/20 p-6 border border-rap-cyan/30">
                  <div className="text-4xl font-bebas text-rap-cyan mb-2">50+</div>
                  <div className="text-gray-300 font-urban">Треков записано</div>
                </div>
                <div className="bg-gradient-to-br from-rap-orange/20 to-red-500/20 p-6 border border-rap-orange/30">
                  <div className="text-4xl font-bebas text-rap-orange mb-2">1M+</div>
                  <div className="text-gray-300 font-urban">Прослушиваний</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-gray-700 hover:border-rap-cyan/50 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="p-4 bg-rap-cyan/20 rounded-full">
                      <Icon name="Mic" size={32} className="text-rap-cyan" />
                    </div>
                    <div>
                      <h4 className="font-bebas text-2xl text-white">STUDIO WORK</h4>
                      <p className="text-gray-400 font-urban">Профессиональная запись</p>
                    </div>
                  </div>
                  <p className="text-gray-300 font-urban leading-relaxed">
                    Работаю с топовыми продюсерами города. Каждый трек — это минимум 
                    20 дублей, пока звучание не станет идеальным.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-gray-700 hover:border-rap-orange/50 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="p-4 bg-rap-orange/20 rounded-full">
                      <Icon name="Users" size={32} className="text-rap-orange" />
                    </div>
                    <div>
                      <h4 className="font-bebas text-2xl text-white">КОЛЛАБЫ</h4>
                      <p className="text-gray-400 font-urban">Сотрудничество с артистами</p>
                    </div>
                  </div>
                  <p className="text-gray-300 font-urban leading-relaxed">
                    Всегда открыт для совместных проектов. Лучшие треки рождаются 
                    когда энергия нескольких MC сливается в одном бите.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Style Tags */}
          <div className="flex flex-wrap justify-center gap-4 mt-16">
            <span className="bg-gradient-to-r from-rap-cyan to-blue-500 text-black px-6 py-3 font-bebas text-lg tracking-wider">BOOM BAP</span>
            <span className="bg-gradient-to-r from-rap-orange to-red-500 text-black px-6 py-3 font-bebas text-lg tracking-wider">OLD SCHOOL</span>
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 font-bebas text-lg tracking-wider">TRAP</span>
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-black px-6 py-3 font-bebas text-lg tracking-wider">DRILL</span>
          </div>
        </div>
      </section>

      {/* Music Platforms Section */}
      <section id="music" className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-r from-rap-cyan/5 via-transparent to-rap-orange/5"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-7xl md:text-8xl font-bebas text-center mb-8 bg-gradient-to-r from-rap-cyan to-rap-orange bg-clip-text text-transparent">
            СЛУШАЙ ВЕЗДЕ
          </h2>
          <p className="text-2xl text-center text-gray-400 mb-16 max-w-4xl mx-auto font-urban">
            Мои треки доступны на всех крупных платформах. 
            Выбирай удобный сервис и погружайся в мой мир.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group bg-gradient-to-br from-blue-600 to-blue-800 border-none hover:scale-110 transition-all duration-500 transform hover:rotate-3 cursor-pointer">
              <CardContent className="p-10 text-center">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Music" size={64} className="text-white mx-auto" />
                </div>
                <h3 className="font-bebas text-3xl text-white mb-3 tracking-wider">ВК МУЗЫКА</h3>
                <p className="text-blue-100 mb-8 font-urban text-lg">Весь каталог + эксклюзивы</p>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 font-bebas text-lg px-8 py-3 w-full">
                  СЛУШАТЬ
                </Button>
              </CardContent>
            </Card>
            
            <Card className="group bg-gradient-to-br from-yellow-500 to-red-500 border-none hover:scale-110 transition-all duration-500 transform hover:-rotate-3 cursor-pointer">
              <CardContent className="p-10 text-center">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Music" size={64} className="text-white mx-auto" />
                </div>
                <h3 className="font-bebas text-3xl text-white mb-3 tracking-wider">ЯНДЕКС</h3>
                <p className="text-yellow-100 mb-8 font-urban text-lg">Hi-Fi качество звука</p>
                <Button className="bg-white text-red-600 hover:bg-gray-100 font-bebas text-lg px-8 py-3 w-full">
                  СЛУШАТЬ
                </Button>
              </CardContent>
            </Card>
            
            <Card className="group bg-gradient-to-br from-gray-700 to-black border-2 border-gray-600 hover:scale-110 transition-all duration-500 transform hover:rotate-3 cursor-pointer">
              <CardContent className="p-10 text-center">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Music" size={64} className="text-white mx-auto" />
                </div>
                <h3 className="font-bebas text-3xl text-white mb-3 tracking-wider">APPLE MUSIC</h3>
                <p className="text-gray-300 mb-8 font-urban text-lg">Для iOS пользователей</p>
                <Button className="bg-white text-black hover:bg-gray-100 font-bebas text-lg px-8 py-3 w-full">
                  СЛУШАТЬ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-t from-gray-900 to-black relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M20 20c0 11.046-8.954 20-20 20v20h40V20H20z"/%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-7xl md:text-8xl font-bebas text-center mb-20 bg-gradient-to-r from-rap-orange via-rap-cyan to-rap-orange bg-clip-text text-transparent">
            СВЯЗЬ СО МНОЙ
          </h2>
          
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="font-bebas text-4xl text-rap-cyan mb-8">РАБОТАЕМ ВМЕСТЕ</h3>
              <p className="text-xl text-gray-300 leading-relaxed font-urban mb-8">
                Открыт для коллабораций, выступлений и новых проектов. 
                Если у тебя есть идеи или предложения — не стесняйся писать.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded border-l-4 border-rap-cyan">
                  <Icon name="Mail" size={28} className="text-rap-cyan" />
                  <div>
                    <div className="font-bebas text-xl text-white">EMAIL</div>
                    <div className="text-gray-300 font-urban">mc.storm.official@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded border-l-4 border-rap-orange">
                  <Icon name="Phone" size={28} className="text-rap-orange" />
                  <div>
                    <div className="font-bebas text-xl text-white">МЕНЕДЖЕР</div>
                    <div className="text-gray-300 font-urban">+7 (999) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded border-l-4 border-purple-500">
                  <Icon name="MapPin" size={28} className="text-purple-500" />
                  <div>
                    <div className="font-bebas text-xl text-white">ЛОКАЦИЯ</div>
                    <div className="text-gray-300 font-urban">Москва, Россия</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h3 className="font-bebas text-4xl text-rap-orange mb-8">СОЦИАЛЬНЫЕ СЕТИ</h3>
              <div className="grid grid-cols-2 gap-4">
                <Button size="lg" className="bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bebas text-lg py-6 flex flex-col items-center space-y-2 h-auto">
                  <Icon name="Instagram" size={32} />
                  <span>INSTAGRAM</span>
                </Button>
                <Button size="lg" className="bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bebas text-lg py-6 flex flex-col items-center space-y-2 h-auto">
                  <Icon name="Youtube" size={32} />
                  <span>YOUTUBE</span>
                </Button>
                <Button size="lg" className="bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bebas text-lg py-6 flex flex-col items-center space-y-2 h-auto">
                  <Icon name="MessageCircle" size={32} />
                  <span>TELEGRAM</span>
                </Button>
                <Button size="lg" className="bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bebas text-lg py-6 flex flex-col items-center space-y-2 h-auto">
                  <Icon name="Music" size={32} />
                  <span>SOUNDCLOUD</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-4xl font-bebas text-rap-cyan mb-6 md:mb-0 tracking-widest">MC STORM</div>
            <div className="text-gray-400 text-center md:text-right font-urban">
              <p>&copy; 2024 MC Storm. Все права защищены.</p>
              <p className="text-sm mt-2 bg-gradient-to-r from-rap-cyan to-rap-orange bg-clip-text text-transparent">
                Создано с 🔥 для уличной культуры
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;