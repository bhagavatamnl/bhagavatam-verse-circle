
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Books = () => {
  const cantos = [
    {
      number: "Canto 1",
      title: "Creation and Questions of Parikshit",
      description: "The framework of the Bhagavatam, introducing the questions of King Parikshit and the answers of Sukadeva Goswami."
    },
    {
      number: "Canto 2", 
      title: "The Cosmic Manifestation",
      description: "Description of the universal form and the process of creation from the Supreme Personality of Godhead."
    },
    {
      number: "Canto 3",
      title: "The Status Quo", 
      description: "Further details of creation and the appearance of Brahma and other demigods."
    },
    {
      number: "Canto 4",
      title: "The Creation of the Fourth Order",
      description: "Stories of great devotees like Dhruva and King Prithu, demonstrating devotional service."
    },
    {
      number: "Canto 5",
      title: "The Creative Impetus",
      description: "The story of King Rishabhadeva and his son Bharata, after whom India is named."
    },
    {
      number: "Canto 6",
      title: "Prescribed Duties for Mankind", 
      description: "The glories of the holy name and stories of great devotees like Ajamila."
    },
    {
      number: "Canto 7",
      title: "The Science of God",
      description: "The immortal story of Prahlada Maharaja and his devotion despite persecution."
    },
    {
      number: "Canto 8",
      title: "Withdrawal of the Cosmic Creations",
      description: "Stories of the churning of the ocean and the appearance of various incarnations."
    },
    {
      number: "Canto 9", 
      title: "Liberation",
      description: "The dynasties of great kings and devotees, including the ancestors of Lord Rama."
    },
    {
      number: "Canto 10",
      title: "The Summum Bonum", 
      description: "The heart of the Bhagavatam - Krishna's appearance, childhood, youth, and pastimes."
    },
    {
      number: "Canto 11",
      title: "General History",
      description: "Krishna's final instructions and the Uddhava Gita before His departure."
    },
    {
      number: "Canto 12",
      title: "The Age of Deterioration",
      description: "Prophecies about Kali-yuga and the ultimate destruction and renewal of the universe."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-amber-50">
      <Navigation />
      
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent mb-4">
              The Twelve Cantos
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Explore the divine structure of the Srimad Bhagavatam's eighteen thousand verses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {cantos.map((canto, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-3">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <CardTitle className="text-lg text-amber-800">
                    {canto.number}
                  </CardTitle>
                  <p className="text-amber-600 font-medium text-sm">
                    {canto.title}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {canto.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-800 text-center">
                The Crown Jewel: Canto 10
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div 
                className="h-64 bg-cover bg-center rounded-lg mb-6 shadow-lg mx-auto max-w-md"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`
                }}
              />
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                The Tenth Canto is considered the heart and soul of the Srimad Bhagavatam. 
                It contains the complete narration of Lord Krishna's earthly pastimes, from His 
                divine birth to His return to the spiritual realm.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                This canto alone contains nearly 4,000 verses and is divided into 90 chapters, 
                each revealing different aspects of Krishna's divine nature through His loving 
                interactions with devotees, His miraculous pastimes, and His profound teachings.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Books;
