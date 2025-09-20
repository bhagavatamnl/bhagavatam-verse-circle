import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";

const events = [
	{
		id: 1,
		date: "2025-09-27",
		time: "6:00 AM",
		title: "Weekly Reading: Canto 1, Chapter 2",
		details: "Join us for our regular Bhagavatam reading and discussion. All are welcome!",
		image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
	},
	{
		id: 2,
		date: "2025-10-04",
		time: "6:00 AM",
		title: "Special Guest Session",
		details: "అక్టోబర్ 11 శనివారం నెదర్లాండ్స్‌లో మొట్టమొదటి అష్టావధానం  speaker బ్రహ్మశ్రీ వద్దిపర్తి పద్మాకర్ గారు. Topic: 'త్రిభాషా మహాసహస్రావధానము'.",
		image: "/images/triava.jpg",
	},
];

const Events = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-amber-50">
			<Navigation />
			<div className="py-16 px-4">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent mb-4">
							Upcoming Events
						</h1>
						<p className="text-xl text-slate-600">
							Stay updated with our latest gatherings and special sessions.
						</p>
					</div>
					<div className="flex flex-col gap-8 items-center">
						{events.map((event) => (
							<Card
								key={event.id}
								className="w-full max-w-2xl bg-white/90 backdrop-blur-sm border-amber-200 shadow-lg"
							>
								<CardHeader>
									<CardTitle className="text-2xl text-amber-800 flex items-center gap-2">
										<CalendarDays size={24} />
										{event.title}
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="flex flex-col md:flex-row gap-6 items-center">
										{event.image && (
											<img
												src={event.image}
												alt={event.title}
												className="w-64 h-40 object-cover rounded-lg border border-amber-200 shadow"
											/>
										)}
										<div className="flex-1 text-lg">
											<p className="font-medium text-amber-800 mb-2">
												{new Date(event.date).toLocaleDateString()} &middot;{" "}
												{event.time}
											</p>
											<p className="text-slate-700 mb-2">
												{event.details}
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Events;