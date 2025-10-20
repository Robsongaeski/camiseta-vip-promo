import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shirt, DollarSign, Truck, Lock, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-tshirts.jpg";
import { useState, useEffect } from "react";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const whatsappLink = "https://chat.whatsapp.com/HjAxhm8HjVq2bxkJTlC4gS";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCTAClick = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed CTA Button */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <Button 
          variant="cta" 
          size="lg" 
          onClick={handleCTAClick}
          className="text-lg px-8 py-6 h-auto rounded-full animate-glow"
        >
          🔥 ENTRAR NO GRUPO VIP
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Camisetas Update estilosas" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black text-primary-foreground leading-tight">
                Promoção Exclusiva:
                <span className="block mt-4 text-primary-foreground">Camisetas</span>
                <span className="block mt-2">
                  <span className="text-primary-foreground/60 line-through text-4xl md:text-5xl">De R$89,90</span>
                  <span className="block text-accent">por R$49,90!</span>
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
                E mais: <span className="font-bold text-accent">Frete grátis</span> em compras acima de R$199
              </p>
              <p className="text-lg md:text-xl text-primary-foreground/80 font-medium">
                ⚡ Mas atenção: essa oferta só será liberada no nosso <span className="text-accent font-bold">Grupo VIP do WhatsApp!</span>
              </p>
            </div>

            <Button 
              variant="cta" 
              size="lg" 
              onClick={handleCTAClick}
              className="text-xl px-12 py-8 h-auto rounded-full text-white font-black uppercase shadow-2xl hover:scale-105 transition-transform"
            >
              🚀 QUERO ENTRAR NO GRUPO VIP
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 text-center space-y-4 bg-card hover:shadow-lg transition-all duration-300 animate-slide-up border-2 hover:border-accent">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Shirt className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg text-card-foreground">Camisetas Exclusivas</h3>
              <p className="text-muted-foreground">Design único e frases engraçadas que você não encontra em outro lugar</p>
            </Card>

            <Card className="p-6 text-center space-y-4 bg-card hover:shadow-lg transition-all duration-300 animate-slide-up [animation-delay:100ms] border-2 hover:border-accent">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <DollarSign className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg text-card-foreground">Preço Especial</h3>
              <p className="text-muted-foreground">
                <span className="line-through text-sm opacity-60">De R$89,90</span>
                {" "}por apenas <span className="text-accent font-bold text-xl">R$49,90</span>
              </p>
            </Card>

            <Card className="p-6 text-center space-y-4 bg-card hover:shadow-lg transition-all duration-300 animate-slide-up [animation-delay:200ms] border-2 hover:border-accent">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Truck className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg text-card-foreground">Frete Grátis</h3>
              <p className="text-muted-foreground">Para compras acima de R$199, o frete é por nossa conta!</p>
            </Card>

            <Card className="p-6 text-center space-y-4 bg-card hover:shadow-lg transition-all duration-300 animate-slide-up [animation-delay:300ms] border-2 hover:border-accent">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Lock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg text-card-foreground">Exclusivo VIP</h3>
              <p className="text-muted-foreground">Promoção liberada apenas no Grupo VIP do WhatsApp</p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-foreground">
            Como Funciona? <span className="text-accent">É Simples!</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-8 bg-card border-l-4 border-accent hover:shadow-xl transition-all duration-300 animate-slide-up">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-black text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-card-foreground">Clique no botão e entre no Grupo VIP</h3>
                  <p className="text-muted-foreground text-lg">Acesso instantâneo ao nosso grupo exclusivo no WhatsApp</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-l-4 border-accent hover:shadow-xl transition-all duration-300 animate-slide-up [animation-delay:100ms]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-black text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-card-foreground">Aguarde a liberação da promoção</h3>
                  <p className="text-muted-foreground text-lg">Você receberá o link exclusivo para aproveitar a oferta</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-l-4 border-accent hover:shadow-xl transition-all duration-300 animate-slide-up [animation-delay:200ms]">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-black text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-card-foreground">
                    Garanta suas camisetas: <span className="line-through text-muted-foreground text-xl">R$89,90</span> por <span className="text-accent">R$49,90</span>
                  </h3>
                  <p className="text-muted-foreground text-lg">Aproveite antes que a promoção acabe!</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="cta" 
              size="lg" 
              onClick={handleCTAClick}
              className="text-xl px-12 py-8 h-auto rounded-full font-black"
            >
              COMEÇAR AGORA
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <div className="space-y-4">
              <CheckCircle className="w-20 h-20 text-accent mx-auto" />
              <h2 className="text-3xl md:text-4xl font-black text-foreground">
                Mais de <span className="text-accent">50 mil pessoas</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                já usam camisetas Update e aprovam a qualidade e o estilo!
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <div className="bg-card px-6 py-3 rounded-full border-2 border-accent/20">
                <p className="font-bold text-card-foreground">⭐ Qualidade Premium</p>
              </div>
              <div className="bg-card px-6 py-3 rounded-full border-2 border-accent/20">
                <p className="font-bold text-card-foreground">🎨 Designs Únicos</p>
              </div>
              <div className="bg-card px-6 py-3 rounded-full border-2 border-accent/20">
                <p className="font-bold text-card-foreground">💯 Satisfação Garantida</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Oferta Relâmpago:
              <span className="block mt-2">Só no Grupo VIP do WhatsApp!</span>
            </h2>
            <p className="text-xl md:text-2xl font-medium">
              Não perca essa oportunidade única de garantir suas camisetas com desconto exclusivo
            </p>
            <Button 
              onClick={handleCTAClick}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-xl px-12 py-8 h-auto rounded-full font-black uppercase shadow-2xl hover:scale-105 transition-all"
            >
              🎉 ENTRAR NO GRUPO AGORA
            </Button>
            <p className="text-sm opacity-90 pt-4">
              ⏰ Vagas limitadas no grupo VIP - Entre agora!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            © 2025 Update Camisetas. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
