import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Wrench" className="text-primary" size={28} />
            <span className="text-xl font-bold text-foreground">TechFix</span>
          </div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('prices')} className="text-muted-foreground hover:text-primary transition-colors">Цены</button>
            <button onClick={() => scrollToSection('benefits')} className="text-muted-foreground hover:text-primary transition-colors">Преимущества</button>
            <button onClick={() => scrollToSection('faq')} className="text-muted-foreground hover:text-primary transition-colors">FAQ</button>
            <button onClick={() => scrollToSection('contacts')} className="text-muted-foreground hover:text-primary transition-colors">Контакты</button>
          </div>
          <Button onClick={() => scrollToSection('contacts')}>Связаться</Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground animate-fade-in">
            Профессиональный ремонт компьютеров
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Быстрая диагностика и качественный ремонт компьютеров и ноутбуков любой сложности
          </p>
          <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button size="lg" onClick={() => scrollToSection('contacts')}>
              Записаться на ремонт
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "Laptop", title: "Ремонт ноутбуков", desc: "Замена комплектующих, чистка, настройка" },
              { icon: "Monitor", title: "Ремонт компьютеров", desc: "Диагностика и устранение неисправностей" },
              { icon: "Search", title: "Диагностика", desc: "Бесплатная диагностика в течение 30 минут" },
              { icon: "HardDrive", title: "Замена комплектующих", desc: "SSD, HDD, ОЗУ, процессоры, видеокарты" },
              { icon: "Zap", title: "Апгрейд", desc: "Модернизация компьютера для повышения производительности" },
              { icon: "Shield", title: "Установка ПО", desc: "Операционные системы, драйверы, антивирусы" },
            ].map((service, idx) => (
              <Card key={idx} className="hover-scale border-border bg-card">
                <CardContent className="pt-6">
                  <Icon name={service.icon} className="text-primary mb-4" size={40} />
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Цены</h2>
          <div className="space-y-4">
            {[
              { service: "Диагностика", price: "Бесплатно" },
              { service: "Чистка от пыли", price: "от 500 ₽" },
              { service: "Замена термопасты", price: "от 400 ₽" },
              { service: "Установка Windows", price: "от 800 ₽" },
              { service: "Замена HDD на SSD", price: "от 1000 ₽" },
              { service: "Замена матрицы ноутбука", price: "от 3000 ₽" },
              { service: "Ремонт материнской платы", price: "от 2000 ₽" },
            ].map((item, idx) => (
              <Card key={idx} className="border-border bg-card">
                <CardContent className="flex justify-between items-center py-4">
                  <span className="text-card-foreground font-medium">{item.service}</span>
                  <span className="text-primary font-bold text-lg">{item.price}</span>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-6 text-sm">
            * Точная стоимость определяется после диагностики
          </p>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "Clock", title: "Быстро", desc: "Большинство ремонтов за 1-2 дня" },
              { icon: "BadgeCheck", title: "Гарантия", desc: "До 6 месяцев на выполненные работы" },
              { icon: "UserCheck", title: "Опыт", desc: "Более 10 лет работы" },
              { icon: "ThumbsUp", title: "Качество", desc: "Оригинальные комплектующие" },
            ].map((benefit, idx) => (
              <div key={idx} className="text-center">
                <Icon name={benefit.icon} className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Частые вопросы</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Сколько времени займет ремонт?</AccordionTrigger>
              <AccordionContent>
                Большинство ремонтов выполняется за 1-2 дня. Сложные случаи могут занять до недели. Точные сроки сообщаем после диагностики.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Диагностика действительно бесплатная?</AccordionTrigger>
              <AccordionContent>
                Да, диагностика абсолютно бесплатна и занимает 20-30 минут. Вы платите только если решите выполнить ремонт у нас.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Какая гарантия на ремонт?</AccordionTrigger>
              <AccordionContent>
                Мы даем гарантию от 3 до 6 месяцев на выполненные работы и установленные комплектующие.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Можно ли вызвать мастера на дом?</AccordionTrigger>
              <AccordionContent>
                Да, мы предоставляем услугу выезда мастера. Стоимость выезда — от 500 рублей в зависимости от района.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Работаете ли вы с юридическими лицами?</AccordionTrigger>
              <AccordionContent>
                Да, мы работаем как с физическими, так и с юридическими лицами. Предоставляем все необходимые документы.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border bg-card">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-card-foreground mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-card-foreground mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-card-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">info@techfix.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-card-foreground mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00</p>
                    <p className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl mb-4 text-card-foreground">Записаться на ремонт</h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
                  />
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
                  />
                  <textarea
                    placeholder="Опишите проблему"
                    rows={4}
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring bg-background text-foreground"
                  />
                  <Button type="submit" className="w-full">Отправить заявку</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t bg-background">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>&copy; 2024 TechFix. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
