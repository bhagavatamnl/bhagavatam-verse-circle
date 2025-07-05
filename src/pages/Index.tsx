
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const whatsappLink = "https://wa.me/+1234567890"; // Replace with actual WhatsApp group link

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-yellow-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="mb-12">
            <div className="inline-block mb-6">
              <span className="text-6xl mb-4 block">🕉️</span>
              <h1 className="text-5xl md:text-6xl font-serif font-light text-amber-900 mb-8 tracking-wide">
                Bhagavatam Reading Club
              </h1>
            </div>
            <div className="max-w-2xl mx-auto mb-10">
              <p className="text-xl text-amber-800 leading-relaxed font-light italic">
                "Explore the timeless teachings of the Bhagavatam in a warm and welcoming community"
              </p>
            </div>
            <Button 
              onClick={() => window.open(whatsappLink, '_blank')}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-300 border-2 border-amber-700"
            >
              🙏 Join Our Sacred Circle
            </Button>
          </div>
        </div>
      </section>

      {/* Krishna's Stories Section */}
      <section className="py-20 px-4 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <Card className="border-none shadow-2xl bg-gradient-to-br from-white to-amber-50/50">
            <CardContent className="p-12 md:p-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-serif text-amber-900 mb-6 font-light">
                  The Divine Chronicles of Krishna
                </h2>
                <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-slate-700 leading-relaxed font-light">
                    What the Bhagavatam is most known for are the enchanting stories of Krishna's life, 
                    from his miraculous birth in a dungeon in Mathura to his divine departure at Prabhas.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed font-light">
                    Almost all his divine stories are included in this sacred volume— his playful childhood 
                    in Vrindavan, his heroic youth in Mathura, and his majestic later years in Dwaraka.
                  </p>
                  <blockquote className="text-xl text-amber-800 font-medium italic border-l-4 border-amber-400 pl-6 py-4 bg-amber-50/50 rounded-r-lg">
                    "Each story carries profound spiritual wisdom, teaching us about divine love, devotion, 
                    and the eternal relationship between the soul and the Supreme."
                  </blockquote>
                </div>
                <div className="space-y-6">
                  <div 
                    className="h-72 bg-cover bg-center rounded-lg shadow-xl border-4 border-white"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                    }}
                  />
                  <div 
                    className="h-64 bg-cover bg-center rounded-lg shadow-xl border-4 border-white"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                    }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Krishna's Life Journey */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-amber-900 mb-6 font-light">
              Journey Through Krishna's Divine Life
            </h2>
            <div className="w-32 h-1 bg-amber-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Childhood in Vrindavan",
                description: "The playful pastimes of young Krishna, filled with divine love, miracles, and the pure devotion of the Gopis and Gopas.",
                image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Youth in Mathura",
                description: "Krishna's heroic deeds, the defeat of Kamsa, and his establishment as the protector of dharma and righteousness.",
                image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Majesty in Dwaraka",
                description: "The royal life of Krishna as king, his divine counsel in the Bhagavad Gita, and his role in the cosmic order.",
                image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              }
            ].map((phase, index) => (
              <Card key={index} className="bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-none">
                <CardContent className="p-0">
                  <div 
                    className="h-56 bg-cover bg-center rounded-t-lg"
                    style={{ backgroundImage: `url('${phase.image}')` }}
                  />
                  <div className="p-8">
                    <h3 className="text-xl font-serif text-amber-900 mb-4 font-medium">{phase.title}</h3>
                    <p className="text-slate-600 leading-relaxed font-light">{phase.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-4xl mb-4">🙏</div>
          <p className="text-2xl font-serif mb-2 font-light">Hare Krishna</p>
          <p className="text-amber-300 font-light italic">
            "In the Bhagavatam, the ultimate reality is revealed through divine stories and eternal wisdom."
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
