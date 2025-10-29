import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Преимущества клееного бруса для строительства",
    excerpt: "Клееный брус — это современный экологичный материал, который сочетает в себе прочность, долговечность и красоту натурального дерева.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80",
    date: "25 октября 2024",
    readTime: "5 мин",
    category: "Материалы"
  },
  {
    id: 2,
    title: "Этапы строительства дома из клееного бруса",
    excerpt: "От проектирования до новоселья — разбираем подробно все этапы строительства вашего деревянного дома.",
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&q=80",
    date: "20 октября 2024",
    readTime: "7 мин",
    category: "Строительство"
  },
  {
    id: 3,
    title: "Интерьер в деревянном доме: идеи и решения",
    excerpt: "Как создать уютную атмосферу в доме из клееного бруса, сохранив его природную красоту и экологичность.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    date: "15 октября 2024",
    readTime: "6 мин",
    category: "Дизайн"
  },
  {
    id: 4,
    title: "Как выбрать проект дома из клееного бруса",
    excerpt: "Рассказываем, на что обратить внимание при выборе проекта: планировка, площадь, архитектурный стиль и технические особенности.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    date: "12 октября 2024",
    readTime: "8 мин",
    category: "Проектирование"
  },
  {
    id: 5,
    title: "Утепление дома из клееного бруса: нужно ли?",
    excerpt: "Разбираемся в вопросе теплоизоляции: когда дополнительное утепление необходимо, а когда можно обойтись без него.",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&q=80",
    date: "8 октября 2024",
    readTime: "5 мин",
    category: "Утепление"
  },
  {
    id: 6,
    title: "Фундамент для дома из клееного бруса",
    excerpt: "Какой тип фундамента выбрать для деревянного дома: ленточный, свайный или плитный. Сравниваем плюсы и минусы.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    date: "3 октября 2024",
    readTime: "6 мин",
    category: "Фундамент"
  },
  {
    id: 7,
    title: "Стоимость строительства дома из клееного бруса",
    excerpt: "Подробный разбор затрат на строительство: материалы, работы, коммуникации. Как спланировать бюджет правильно.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    date: "28 сентября 2024",
    readTime: "9 мин",
    category: "Бюджет"
  },
  {
    id: 8,
    title: "Усадка дома из клееного бруса: мифы и реальность",
    excerpt: "Даёт ли усадку клееный брус? Сколько времени нужно ждать перед отделкой? Отвечаем на главные вопросы.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    date: "22 сентября 2024",
    readTime: "5 мин",
    category: "Технологии"
  },
  {
    id: 9,
    title: "Защита древесины: чем обработать клееный брус",
    excerpt: "Современные способы защиты деревянного дома от влаги, грибка, насекомых и огня. Обзор лучших составов.",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    date: "18 сентября 2024",
    readTime: "7 мин",
    category: "Защита"
  }
];

const Blog = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleTelegramClick = () => {
    window.open('https://t.me/yourchannel', '_blank');
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        window.open('https://t.me/yourchannel', '_blank');
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
            <Icon name="Sparkles" size={20} className="text-accent" />
            <span className="text-sm font-medium text-accent">Полезные статьи каждую неделю</span>
          </div>
          
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Всё о строительстве домов из клееного бруса
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Экспертные статьи, практические советы и актуальные тренды. 
            Подпишитесь на наш Telegram-канал и будьте в курсе!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              onClick={handleTelegramClick}
            >
              <Icon name="Send" className="mr-2" size={24} />
              Подписаться в Telegram
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="Users" size={18} />
              <span>5000+ читателей</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="FileText" size={18} />
              <span>50+ статей</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="TrendingUp" size={18} />
              <span>Новое каждую неделю</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in cursor-pointer bg-card"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Icon name="Calendar" size={14} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        {post.readTime}
                      </span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-primary hover:text-primary/80 p-0 h-auto font-medium group/btn"
                    >
                      Читать
                      <Icon name="ArrowRight" size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-accent/20 shadow-2xl overflow-hidden">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <Icon name="Bell" size={32} className="text-accent" />
                </div>
                
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Не пропустите новые статьи
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  Подпишитесь на наш Telegram-канал и получайте свежие материалы 
                  о строительстве, дизайне и эксплуатации домов из клееного бруса
                </p>
                
                {!isSubscribed ? (
                  <>
                    <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-6">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Input
                          type="email"
                          placeholder="Ваш email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="flex-1 px-6 py-6 text-base rounded-full border-2 border-muted focus:border-accent transition-colors"
                        />
                        <Button 
                          type="submit"
                          size="lg"
                          className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
                        >
                          <Icon name="Send" className="mr-2" size={20} />
                          Подписаться
                        </Button>
                      </div>
                    </form>
                    <p className="text-xs text-muted-foreground">
                      После подписки вы перейдёте в Telegram-канал. Никакого спама!
                    </p>
                  </>
                ) : (
                  <div className="max-w-md mx-auto animate-scale-in">
                    <div className="bg-accent/10 border-2 border-accent rounded-2xl p-8">
                      <Icon name="CheckCircle2" size={48} className="mx-auto mb-4 text-accent" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">Спасибо за подписку!</h3>
                      <p className="text-muted-foreground mb-4">Переходите в Telegram-канал</p>
                      <Button 
                        onClick={handleTelegramClick}
                        className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full"
                      >
                        <Icon name="Send" className="mr-2" size={20} />
                        Открыть Telegram
                      </Button>
                    </div>
                  </div>
                )}

                <div className="mt-10 pt-8 border-t border-border">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    <div>
                      <Icon name="Zap" size={24} className="mx-auto mb-2 text-accent" />
                      <p className="text-sm font-medium text-foreground">Актуальные новости</p>
                      <p className="text-xs text-muted-foreground">Следим за трендами</p>
                    </div>
                    <div>
                      <Icon name="Users" size={24} className="mx-auto mb-2 text-accent" />
                      <p className="text-sm font-medium text-foreground">Экспертное мнение</p>
                      <p className="text-xs text-muted-foreground">От профессионалов</p>
                    </div>
                    <div>
                      <Icon name="Award" size={24} className="mx-auto mb-2 text-accent" />
                      <p className="text-sm font-medium text-foreground">Проверенные советы</p>
                      <p className="text-xs text-muted-foreground">Только практика</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
            Присоединяйтесь к нашему сообществу
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Более 5000 человек уже получают полезные материалы и обсуждают строительство в нашем Telegram-канале
          </p>
          <Button 
            size="lg"
            onClick={handleTelegramClick}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-lg hover:shadow-xl transition-all"
          >
            <Icon name="MessageCircle" className="mr-2" size={20} />
            Присоединиться к обсуждению
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;
