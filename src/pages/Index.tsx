import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white font-urban">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-rap font-bold text-primary">RAP ARTIST</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-primary transition-colors duration-300">Главная</a>
              <a href="#about" className="hover:text-primary transition-colors duration-300">О себе</a>
              <a href="#music" className="hover:text-primary transition-colors duration-300">Музыка</a>
              <a href="#contact" className="hover:text-primary transition-colors duration-300">Контакты</a>
            </div>
            <Button className="md:hidden" variant="ghost" size="sm">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Urban Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-500"></div>
            <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-accent rounded-full animate-pulse delay-1500"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-8xl md:text-9xl font-rap font-black mb-6 animate-fade-in">
            <span className="text-primary">RAP</span>
            <br />
            <span className="text-white">ARTIST</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto animate-slide-up font-urban">
            Уличная культура. Честные тексты. Мощные биты.
            <br />
            Живу рэпом. Дышу музыкой.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-rap font-bold text-lg px-8 py-4">
              <Icon name="Play" size={20} className="mr-2" />
              Слушать музыку
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-rap font-bold text-lg px-8 py-4">
              <Icon name="User" size={20} className="mr-2" />
              Обо мне
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-6xl md:text-7xl font-rap font-black text-center mb-16">
            МОЯ <span className="text-primary">ИСТОРИЯ</span>
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="font-rap font-bold text-3xl mb-6 text-accent">От улиц до студии</h3>
              <p className="text-lg leading-relaxed text-gray-300">
                Начал писать тексты в подворотнях, где каждое слово — это правда жизни. 
                Рэп для меня не просто музыка, это способ рассказать миру о том, что происходит на улицах.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                Мой стиль формировался под звуки города: гудки машин, голоса людей, ритм мегаполиса. 
                Каждый трек — это история, каждая строчка — это опыт.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <span className="bg-primary/20 text-primary px-4 py-2 rounded-full font-rap font-bold">BOOM BAP</span>
                <span className="bg-accent/20 text-accent px-4 py-2 rounded-full font-rap font-bold">OLD SCHOOL</span>
                <span className="bg-primary/20 text-primary px-4 py-2 rounded-full font-rap font-bold">TRAP</span>
                <span className="bg-accent/20 text-accent px-4 py-2 rounded-full font-rap font-bold">DRILL</span>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Icon name="Mic" size={40} className="text-primary" />
                    <div>
                      <h4 className="font-rap font-bold text-2xl">Студийная работа</h4>
                      <p className="text-gray-400">Профессиональная запись</p>
                    </div>
                  </div>
                  <p className="text-gray-300">Работаю с лучшими продюсерами города. Каждый трек проходит через множество итераций, пока не зазвучит идеально.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-accent/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Icon name="Users" size={40} className="text-accent" />
                    <div>
                      <h4 className="font-rap font-bold text-2xl">Коллаборации</h4>
                      <p className="text-gray-400">Работа с артистами</p>
                    </div>
                  </div>
                  <p className="text-gray-300">Открыт для сотрудничества с другими MC. Вместе мы можем создать что-то действительно мощное и значимое.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Music Platforms Section */}
      <section id="music" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-6xl md:text-7xl font-rap font-black text-center mb-16">
            МОЯ <span className="text-primary">МУЗЫКА</span>
          </h2>
          <p className="text-xl text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Слушайте мои треки на всех популярных платформах. Каждая песня — это часть моей души.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-600 to-blue-800 border-none hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <Icon name="Music" size={48} className="text-white mx-auto mb-4" />
                <h3 className="font-rap font-bold text-2xl text-white mb-2">ВК Музыка</h3>
                <p className="text-blue-100 mb-6">Все мои треки и эксклюзивы</p>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 font-rap font-bold">
                  Слушать
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-yellow-500 to-red-500 border-none hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <Icon name="Music" size={48} className="text-white mx-auto mb-4" />
                <h3 className="font-rap font-bold text-2xl text-white mb-2">Яндекс Музыка</h3>
                <p className="text-yellow-100 mb-6">Качественное стриминг воспроизведение</p>
                <Button className="bg-white text-red-600 hover:bg-gray-100 font-rap font-bold">
                  Слушать
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-gray-800 to-black border-none hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <Icon name="Music" size={48} className="text-white mx-auto mb-4" />
                <h3 className="font-rap font-bold text-2xl text-white mb-2">Apple Music</h3>
                <p className="text-gray-300 mb-6">Для iOS и macOS пользователей</p>
                <Button className="bg-white text-black hover:bg-gray-100 font-rap font-bold">
                  Слушать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-t from-black to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-6xl md:text-7xl font-rap font-black text-center mb-16">
            <span className="text-primary">СВЯЗЬ</span> СО МНОЙ
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="font-rap font-bold text-3xl text-accent mb-6">Давайте работать вместе</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Открыт для новых проектов, коллабораций и предложений. 
                Если у вас есть идеи или вы хотите обсудить сотрудничество — пишите!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Icon name="Mail" size={24} className="text-primary" />
                  <span className="text-gray-300">rap.artist@email.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                  <span className="text-gray-300">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                  <span className="text-gray-300">Москва, Россия</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="font-rap font-bold text-3xl text-accent mb-6">Социальные сети</h3>
              <div className="grid grid-cols-2 gap-4">
                <Button size="lg" className="bg-gray-800 hover:bg-primary text-white font-rap font-bold border border-gray-700 hover:border-primary">
                  <Icon name="Instagram" size={24} className="mr-2" />
                  Instagram
                </Button>
                <Button size="lg" className="bg-gray-800 hover:bg-primary text-white font-rap font-bold border border-gray-700 hover:border-primary">
                  <Icon name="Youtube" size={24} className="mr-2" />
                  YouTube
                </Button>
                <Button size="lg" className="bg-gray-800 hover:bg-primary text-white font-rap font-bold border border-gray-700 hover:border-primary">
                  <Icon name="MessageCircle" size={24} className="mr-2" />
                  Telegram
                </Button>
                <Button size="lg" className="bg-gray-800 hover:bg-primary text-white font-rap font-bold border border-gray-700 hover:border-primary">
                  <Icon name="Music" size={24} className="mr-2" />
                  SoundCloud
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-rap font-bold text-primary mb-4 md:mb-0">RAP ARTIST</div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2024 Rap Artist. Все права защищены.</p>
              <p className="text-sm mt-1">Создано с ❤️ для уличной культуры</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;