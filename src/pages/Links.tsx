
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Links = () => {
  const resourceCategories = [
    {
      title: "Online Bhagavatam Resources",
      links: [
        {
          name: "Vedic Literature Collection",
          url: "#",
          description: "Complete online archive of Vedic texts and commentaries"
        },
        {
          name: "Bhagavatam Audio Lectures",
          url: "#", 
          description: "Inspiring audio lectures on Bhagavatam by renowned teachers"
        },
        {
          name: "Sanskrit Learning Platform",
          url: "#",
          description: "Learn Sanskrit to better understand the original verses"
        }
      ]
    },
    {
      title: "Spiritual Communities",
      links: [
        {
          name: "ISKCON Centers Worldwide",
          url: "#",
          description: "Find local ISKCON temples and communities"
        },
        {
          name: "Bhakti Online Community",
          url: "#",
          description: "Connect with devotees from around the world"
        },
        {
          name: "Krishna Consciousness Forums",
          url: "#",
          description: "Discuss philosophy and spiritual practices"
        }
      ]
    },
    {
      title: "Study Materials",
      links: [
        {
          name: "Bhagavatam Study Guides",
          url: "#",
          description: "Comprehensive guides for deeper understanding"
        },
        {
          name: "Purport Explanations",
          url: "#",
          description: "Detailed explanations of complex philosophical concepts"
        },
        {
          name: "Discussion Questions",
          url: "#",
          description: "Thought-provoking questions for group discussions"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-amber-50">
      <Navigation />
      
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent mb-4">
              Spiritual Resources & Links
            </h1>
            <p className="text-xl text-slate-600">
              Discover valuable resources to deepen your understanding of the Bhagavatam
            </p>
          </div>

          <div className="space-y-12">
            {resourceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">
                  {category.title}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.links.map((link, linkIndex) => (
                    <Card
                      key={linkIndex}
                      className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-amber-800">
                          {link.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                          {link.description}
                        </p>
                        <Button 
                          variant="outline" 
                          className="w-full border-amber-300 text-amber-700 hover:bg-amber-50"
                          onClick={() => window.open(link.url, '_blank')}
                        >
                          Visit Resource
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Card className="bg-gradient-to-r from-amber-100 to-orange-100 border-amber-300 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-800 text-center">
                  Share Your Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Have you found valuable resources for studying the Bhagavatam? 
                  We'd love to hear about them! Share your discoveries with our community 
                  to help fellow devotees in their spiritual journey.
                </p>
                <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
                  Suggest a Resource
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
