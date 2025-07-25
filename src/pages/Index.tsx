import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const Index = () => {

  const merch = [
    { id: 1, name: "Худи с логотипом", price: "3999₽", image: "/img/49185ea2-b482-4fa4-8d82-a226525b0f91.jpg" },
    { id: 2, name: "Кепка snapback", price: "1899₽", image: "/img/bf1c05bc-19b0-461a-ad8e-d9d069ead8f6.jpg" },
    { id: 3, name: "Футболка лимитка", price: "2199₽", image: "/img/5c195a8c-3e84-4cef-9cba-c8a0023faf34.jpg" },
  ];

  const news = [
    { id: 1, date: "25 июля", title: "Новый альбом уже скоро!", text: "Работаю над 12 треками для нового альбома. Релиз планируется на сентябрь." },
    { id: 2, date: "20 июля", title: "Выступление в Москве", text: "Выступил на крупном фестивале в Москве. Зал был забит до отказа!" },
    { id: 3, date: "15 июля", title: "Клип набрал 1М просмотров", text: "Клип на трек 'Улицы зовут' достиг отметки в миллион просмотров на YouTube." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-open-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-oswald font-bold text-primary">АРТИСТ</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#about" className="hover:text-primary transition-colors">О творчестве</a>
              <a href="#merch" className="hover:text-primary transition-colors">Мерч</a>
              <a href="#news" className="hover:text-primary transition-colors">Новости</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button variant="outline" size="sm" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-oswald font-bold mb-6 animate-fade-in">
            РЭП<span className="text-primary">АРТИСТ</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Начинающий рэп-исполнитель из России. Пишу о том, что волнует молодежь — уличную жизнь, мечты и борьбу за место под солнцем.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button variant="outline" size="lg" className="font-oswald text-lg px-8">
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Купить мерч
            </Button>
          </div>
          
          {/* Music Platforms */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a 
              href="#" 
              className="flex items-center space-x-2 bg-card/50 hover:bg-card/70 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Icon name="Music" size={20} className="text-primary" />
              <span className="font-oswald font-bold">ВК Музыка</span>
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-2 bg-card/50 hover:bg-card/70 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Icon name="Music" size={20} className="text-accent" />
              <span className="font-oswald font-bold">Яндекс Музыка</span>
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-2 bg-card/50 hover:bg-card/70 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Icon name="Music" size={20} className="text-primary" />
              <span className="font-oswald font-bold">Apple Music</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-12">
            О <span className="text-primary">ТВОРЧЕСТВЕ</span>
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-oswald font-bold text-2xl mb-6 text-accent">Мой путь в рэпе</h3>
              <p className="text-lg leading-relaxed mb-6">
                Начал писать тексты в 16 лет, вдохновляясь уличной культурой и историями обычных людей. 
                Каждый трек — это частичка моей души и взгляд на жизнь молодого поколения.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Моя цель — создавать музыку, которая находит отклик у слушателей, говорить о проблемах, 
                которые волнуют каждого из нас.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-primary/20 text-primary px-4 py-2 rounded-full font-oswald font-bold">Old School</span>
                <span className="bg-accent/20 text-accent px-4 py-2 rounded-full font-oswald font-bold">Boom Bap</span>
                <span className="bg-primary/20 text-primary px-4 py-2 rounded-full font-oswald font-bold">Storytelling</span>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Icon name="Mic" size={32} className="text-primary" />
                    <div>
                      <h4 className="font-oswald font-bold text-xl">Записи</h4>
                      <p className="text-muted-foreground">Домашняя студия</p>
                    </div>
                  </div>
                  <p>Работаю над качеством звука каждый день. Инвестирую в оборудование и изучаю новые техники записи.</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Icon name="Users" size={32} className="text-accent" />
                    <div>
                      <h4 className="font-oswald font-bold text-xl">Коллаборации</h4>
                      <p className="text-muted-foreground">Открыт для сотрудничества</p>
                    </div>
                  </div>
                  <p>Ищу единомышленников для совместных проектов. Считаю, что вместе можно создать что-то особенное.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Merch Section */}
      <section id="merch" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-12">
            ОФИЦИАЛЬНЫЙ <span className="text-accent">МЕРЧ</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {merch.map((item) => (
              <Card key={item.id} className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="aspect-square bg-muted rounded-t-lg mb-4 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 pt-0">
                    <h3 className="font-oswald font-bold text-xl mb-2">{item.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">{item.price}</span>
                      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        Купить
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-12">
            ПОСЛЕДНИЕ <span className="text-primary">НОВОСТИ</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {news.map((item) => (
              <Card key={item.id} className="bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-primary font-oswald font-bold text-sm mb-2">{item.date}</div>
                  <h3 className="font-oswald font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-center mb-12">
            СВЯЗАТЬСЯ <span className="text-accent">СО МНОЙ</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-oswald font-bold text-2xl mb-6">Социальные сети</h3>
                <div className="space-y-4">
                  <a href="#" className="flex items-center space-x-4 p-4 bg-card/50 rounded-lg hover:bg-card/70 transition-colors group">
                    <Icon name="Music" size={24} className="text-primary group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-oswald font-bold">Spotify</div>
                      <div className="text-muted-foreground text-sm">Слушай мои треки</div>
                    </div>
                  </a>
                  <a href="#" className="flex items-center space-x-4 p-4 bg-card/50 rounded-lg hover:bg-card/70 transition-colors group">
                    <Icon name="Youtube" size={24} className="text-primary group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-oswald font-bold">YouTube</div>
                      <div className="text-muted-foreground text-sm">Клипы и интервью</div>
                    </div>
                  </a>
                  <a href="#" className="flex items-center space-x-4 p-4 bg-card/50 rounded-lg hover:bg-card/70 transition-colors group">
                    <Icon name="Instagram" size={24} className="text-primary group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-oswald font-bold">Instagram</div>
                      <div className="text-muted-foreground text-sm">Закулисье и жизнь</div>
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="font-oswald font-bold text-2xl mb-6">Для сотрудничества</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-card/50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Mail" size={20} className="text-primary" />
                      <span className="font-oswald font-bold">Email</span>
                    </div>
                    <div className="text-muted-foreground">booking@rapper.ru</div>
                  </div>
                  <div className="p-4 bg-card/50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Phone" size={20} className="text-primary" />
                      <span className="font-oswald font-bold">Менеджер</span>
                    </div>
                    <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                  </div>
                  <div className="p-4 bg-card/50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="MapPin" size={20} className="text-primary" />
                      <span className="font-oswald font-bold">Город</span>
                    </div>
                    <div className="text-muted-foreground">Москва, Россия</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/30 py-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-oswald font-bold text-primary mb-4 md:mb-0">АРТИСТ</div>
            <div className="text-muted-foreground">© 2024 Все права защищены</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;