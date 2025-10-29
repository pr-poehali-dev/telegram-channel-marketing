import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const blogPosts = [
  {
    id: 1,
    title: "Преимущества клееного бруса для строительства",
    excerpt: "Клееный брус — это современный экологичный материал, который сочетает в себе прочность, долговечность и красоту натурального дерева.",
    image: "https://cdn.poehali.dev/projects/f2c37dc0-b380-4f63-bdec-181ecb8eed2b/files/eb72aab8-9f91-46be-aad4-45a64cda1521.jpg",
    date: "15 октября 2024",
    readTime: "5 мин"
  },
  {
    id: 2,
    title: "Этапы строительства дома из клееного бруса",
    excerpt: "От проектирования до новоселья — разбираем подробно все этапы строительства вашего деревянного дома.",
    image: "https://cdn.poehali.dev/projects/f2c37dc0-b380-4f63-bdec-181ecb8eed2b/files/b0a9e5fe-9759-466b-95b0-3940b7b83338.jpg",
    date: "10 октября 2024",
    readTime: "7 мин"
  },
  {
    id: 3,
    title: "Интерьер в деревянном доме: идеи и решения",
    excerpt: "Как создать уютную атмосферу в доме из клееного бруса, сохранив его природную красоту и экологичность.",
    image: "https://cdn.poehali.dev/projects/f2c37dc0-b380-4f63-bdec-181ecb8eed2b/files/a4443eb3-f021-48a9-8528-a7d04236d8b5.jpg",
    date: "5 октября 2024",
    readTime: "6 мин"
  }
];

const Index = () => {
  const handleTelegramClick = () => {
    window.open('https://t.me/yourchannel', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-background overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Дома из клееного бруса
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
            Узнайте всё о строительстве экологичных деревянных домов
          </p>
          
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={handleTelegramClick}
          >
            <Icon name="Send" className="mr-2" size={24} />
            Подписаться на Telegram
          </Button>
          
          <div className="mt-12 flex items-center justify-center gap-2 text-muted-foreground">
            <Icon name="Users" size={20} />
            <span className="text-sm">Присоединяйтесь к 5000+ подписчикам</span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Полезные статьи
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Делимся опытом и знаниями о строительстве домов из клееного бруса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Icon name="Calendar" size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary/80 p-0 h-auto font-medium group/btn"
                  >
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <Icon name="Sparkles" size={48} className="mx-auto mb-6 text-accent" />
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Не пропустите новые статьи
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Подпишитесь на наш Telegram-канал и получайте свежие материалы о строительстве, 
              дизайне и эксплуатации домов из клееного бруса
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={handleTelegramClick}
              >
                <Icon name="Send" className="mr-2" size={24} />
                Подписаться на канал
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={18} className="text-accent" />
                <span>Эксклюзивный контент</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={18} className="text-accent" />
                <span>Советы экспертов</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={18} className="text-accent" />
                <span>Реальные кейсы</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="font-heading text-2xl font-bold mb-2">Дома из клееного бруса</h3>
            <p className="text-primary-foreground/80">Строим надежность и уют</p>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <Button 
              variant="ghost" 
              size="icon"
              className="hover:bg-primary-foreground/10 text-primary-foreground"
              onClick={handleTelegramClick}
            >
              <Icon name="Send" size={24} />
            </Button>
          </div>
          
          <p className="text-sm text-primary-foreground/60">
            © 2024 Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
