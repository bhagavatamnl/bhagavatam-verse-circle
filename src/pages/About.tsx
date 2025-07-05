
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-amber-50">
      <Navigation />
      
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent mb-4">
              About Our Reading Group
            </h1>
            <p className="text-xl text-slate-600">
              Discovering the timeless wisdom of the Srimad Bhagavatam together
            </p>
          </div>

          <div className="space-y-8">
            <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-800">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Our Bhagavatam Reading Group is dedicated to studying and sharing the profound 
                  teachings of the Srimad Bhagavatam in a supportive, spiritual community. We gather 
                  regularly to explore the divine stories, philosophical insights, and practical 
                  wisdom contained within this sacred text.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-800">What We Do</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-amber-600 font-bold">•</span>
                  <p className="text-slate-700">Weekly reading sessions with guided discussions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-amber-600 font-bold">•</span>
                  <p className="text-slate-700">Deep exploration of Krishna's divine pastimes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-amber-600 font-bold">•</span>
                  <p className="text-slate-700">Philosophical discussions on Vedic wisdom</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-amber-600 font-bold">•</span>
                  <p className="text-slate-700">Community building through shared spiritual practice</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-800">The Srimad Bhagavatam</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  The Srimad Bhagavatam, also known as the Bhagavata Purana, is one of the most 
                  important and beloved texts in the Vedic tradition. Compiled by the sage Vyasa, 
                  it contains 18,000 verses divided into 12 cantos.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  This magnificent work presents the ultimate spiritual knowledge through engaging 
                  stories, particularly the life and teachings of Lord Krishna. It offers both 
                  entertainment and enlightenment, making profound spiritual truths accessible 
                  to sincere seekers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
