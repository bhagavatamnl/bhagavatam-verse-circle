
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Devotee Coordinator",
      role: "Group Leader & Facilitator",
      description:
        "Guides our weekly discussions and helps create a welcoming environment for all participants.",
    },
    {
      name: "Sanskrit Scholar",
      role: "Text Expert",
      description:
        "Provides insights into the original Sanskrit verses and their deeper meanings.",
    },
    {
      name: "Community Organizer",
      role: "Events & Outreach",
      description:
        "Coordinates our meetings, special events, and community outreach activities.",
    },
    {
      name: "Study Guide Creator",
      role: "Educational Resources",
      description:
        "Develops study materials and discussion guides to enhance our learning experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-amber-50">
      <Navigation />
      
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent mb-4">
              Our Dedicated Team
            </h1>
            <p className="text-xl text-slate-600">
              Meet the devoted souls who help make our reading group a spiritual sanctuary
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">🙏</span>
                  </div>
                  <h3 className="text-xl font-bold text-amber-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 font-medium mb-4">{member.role}</p>
                  <p className="text-slate-600 leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">
                  Join Our Team
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  We welcome devotees who wish to contribute their time and talents to our community. 
                  Whether you have expertise in Sanskrit, teaching, organization, or simply a sincere 
                  desire to serve, there's a place for you in our team.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
