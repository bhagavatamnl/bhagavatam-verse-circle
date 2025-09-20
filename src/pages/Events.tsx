import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, MapPin } from "lucide-react";

const events = [
	{
		id: 1,
		date: "2025-09-27",
		time: "6:00 AM",
		title: "భాగవతం వారపు పఠనం",
		telugu: "ఈ వారపు భాగవతం పఠనం మరియు చర్చకు మిమ్మల్ని ఆహ్వానిస్తున్నాము. అందరూ రావచ్చు!",
		location: "Watsapp, visit contact page for link",
		image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
	},
	{
		id: 2,
		date: "2025-10-28",
		time: "6:30 -8 PM",
		title: "ప్రత్యేక అతిథి సమావేశం",
		telugu: "అక్టోబర్ 11 శనివారం నెదర్లాండ్స్‌లో మొట్టమొదటి అష్టావధానం. స్పీకర్: బ్రహ్మశ్రీ వద్దిపర్తి పద్మాకర్ గారు. అంశం: 'త్రిభాషా మహాసహస్రావధానము'.",
		location: "Eindhoven, Netherlands",
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
							రాబోయే ఈవెంట్స్
						</h1>
						<p className="text-xl text-slate-600">
							మన సమూహ సమావేశాల వివరాలు.
						</p>
					</div>
					<div className="flex flex-col gap-8 items-center">
						{events.map((event) => (
							<Card
								key={event.id}
								className="w-full max-w-md bg-white/90 backdrop-blur-sm border-amber-200 shadow-lg"
							>
								<CardHeader>
									<CardTitle className="text-2xl text-amber-800 flex items-center gap-2 justify-center">
										<CalendarDays size={28} />
										{event.title}
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-6 flex flex-col items-center">
									<div className="relative flex justify-center">
										{event.image && (
											<>
												<img
													src={event.image}
													alt={event.title}
													className="w-72 h-[420px] object-cover rounded-lg border border-amber-200 shadow"
												/>
												{event.location && (
													<div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-sm flex items-center gap-1 px-3 py-2 rounded-b-lg">
														<MapPin size={16} className="inline-block mr-1" />
														<span>{event.location}</span>
													</div>
												)}
											</>
										)}
									</div>
									<div className="w-full">
										<p className="font-semibold text-amber-800 text-lg text-center mb-2">
											{new Date(event.date).toLocaleDateString()} &middot;{" "}
											{event.time}
										</p>
										{event.telugu && (
											<p className="text-orange-900 text-xl leading-relaxed break-words font-bold text-center">
												{event.telugu}
											</p>
										)}
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