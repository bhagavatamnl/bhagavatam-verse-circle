
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const whatsappLink = "https://wa.me/+1234567890"; // Replace with actual WhatsApp group link

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-amber-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent mb-6">
              Bhagavatam Reading Club
            </h1>
            <p className="text-lg md:text-xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore the timeless teachings of the Bhagavatam in a warm and welcoming community.
            </p>
            <Button 
              onClick={() => window.open(whatsappLink, '_blank')}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 text-base font-medium rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              🙏 Join the Group
            </Button>
          </div>
        </div>
      </section>

      {/* Krishna's Stories Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-6">
                    The Divine Stories of Krishna
                  </h2>
                  <div className="prose prose-lg text-slate-700 space-y-4">
                    <p className="text-lg leading-relaxed">
                      What the Bhagavatam is most known for are the enchanting stories of Krishna's life, 
                      from his miraculous birth in a dungeon in Mathura to his divine passing away at Prabhas.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Almost all his divine stories are included in this sacred volume— his playful childhood 
                      in Vrindavan, his heroic youth in Mathura, and his majestic later years in Dwaraka.
                    </p>
                    <p className="text-lg leading-relaxed font-medium text-amber-800">
                      Each story carries profound spiritual wisdom, teaching us about divine love, devotion, 
                      and the eternal relationship between the soul and the Supreme.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div 
                    className="h-64 bg-cover bg-center rounded-lg shadow-lg"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                    }}
                  />
                  <div 
                    className="h-64 bg-cover bg-center rounded-lg shadow-lg"
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
      <section className="py-16 px-4 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-800 mb-12">
            Journey Through Krishna's Divine Life
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/90 border-amber-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div 
                  className="h-48 bg-cover bg-center rounded-lg mb-4 shadow-md"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`
                  }}
                />
                <h3 className="text-xl font-bold text-amber-800 mb-2">Childhood in Vrindavan</h3>
                <p className="text-slate-600">
                  The playful pastimes of young Krishna, filled with divine love, 
                  miracles, and the pure devotion of the Gopis and Gopas.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/90 border-amber-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div 
                  className="h-48 bg-cover bg-center rounded-lg mb-4 shadow-md"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`
                  }}
                />
                <h3 className="text-xl font-bold text-amber-800 mb-2">Youth in Mathura</h3>
                <p className="text-slate-600">
                  Krishna's heroic deeds, the defeat of Kamsa, and his establishment 
                  as the protector of dharma and righteousness.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/90 border-amber-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div 
                  className="h-48 bg-cover bg-center rounded-lg mb-4 shadow-md"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`
                  }}
                />
                <h3 className="text-xl font-bold text-amber-800 mb-2">Majesty in Dwaraka</h3>
                <p className="text-slate-600">
                  The royal life of Krishna as king, his divine counsel in the Bhagavad Gita, 
                  and his role in the cosmic order.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-800 to-orange-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg mb-2">🙏 Hare Krishna 🙏</p>
          <p className="text-amber-200">
            "In the Bhagavatam, the ultimate reality is revealed through divine stories and eternal wisdom."
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
