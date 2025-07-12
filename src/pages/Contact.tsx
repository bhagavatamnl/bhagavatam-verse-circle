
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Contact as ContactIcon, Home } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-amber-50">
      <Navigation />
      
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent mb-4">
              Contact Our Community
            </h1>
            <p className="text-xl text-slate-600">
              We'd love to hear from you! Reach out with questions, suggestions, or to join our reading group.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-800 flex items-center gap-2">
                  <ContactIcon size={24} />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-amber-800">Name</Label>
                    <Input 
                      id="name" 
                      type="text" 
                      className="border-amber-200 focus:border-amber-400"
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-amber-800">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      className="border-amber-200 focus:border-amber-400"
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-amber-800">Subject</Label>
                    <Input 
                      id="subject" 
                      type="text" 
                      className="border-amber-200 focus:border-amber-400"
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-amber-800">Message</Label>
                    <textarea 
                      id="message"
                      rows={5}
                      className="w-full px-3 py-2 border border-amber-200 rounded-md focus:outline-none focus:border-amber-400 resize-none"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white"
                  >
                    Send Message 🙏
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-800 flex items-center gap-2">
                    <Home size={20} />
                    Meeting Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium text-amber-800">Weekly Meetings:</p>
                    <p className="text-slate-600">Every Sunday at 10:00 AM</p>
                  </div>
                  <div>
                    <p className="font-medium text-amber-800">Location:</p>
                    <p className="text-slate-600">Community Center or Online</p>
                  </div>
                  <div>
                    <p className="font-medium text-amber-800">Duration:</p>
                    <p className="text-slate-600">2 hours with refreshments</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-800">Quick Connect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    For immediate questions or to join our WhatsApp group, click below:
                  </p>
                  <a 
                    href="https://chat.whatsapp.com/DSGcqvLADBR91kLomyqoBo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button 
                      className="w-full bg-green-500 hover:bg-green-600 text-white"
                      type="button"
                    >
                      Join WhatsApp Group 💬
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-amber-100 to-orange-100 border-amber-300 shadow-lg">
                <CardContent className="p-6 text-center">
                  <p className="text-amber-800 font-medium mb-2">
                    "Questions and answers are very important. They can solve all the problems of life."
                  </p>
                  <p className="text-amber-700 text-sm">
                    - Srimad Bhagavatam
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
