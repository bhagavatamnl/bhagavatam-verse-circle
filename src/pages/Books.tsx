
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, BookOpen } from "lucide-react";
import PdfViewer from "@/components/PdfViewer";
import { useState } from "react";

const Books = () => {
  const [selectedPdf, setSelectedPdf] = useState<{ url: string; title: string } | null>(null);

  const volumes = [
    {
      number: "Volume 1",
      title: "Potana Bhagavatam Vol 1",
      description: "The first volume of Potana's Telugu translation of the Srimad Bhagavatam, containing the divine wisdom and teachings.",
      filename: "Potana Bhagavatam Vol 1.pdf",
      downloadUrl: "/pdfs/Potana Bhagavatam Vol 1.pdf"
    },
    {
      number: "Volume 2", 
      title: "Potana Bhagavatam Vol 2",
      description: "The second volume of Potana's masterful translation, continuing the sacred narrative of the Bhagavatam.",
      filename: "Potana Bhagavatam Vol 2.pdf",
      downloadUrl: "/pdfs/Potana Bhagavatam Vol 2.pdf"
    },
    {
      number: "Volume 3",
      title: "Potana Bhagavatam Vol 3", 
      description: "The third volume of this timeless work, preserving the essence of the original Sanskrit in beautiful Telugu poetry.",
      filename: "Potana Bhagavatam Vol 3.pdf",
      downloadUrl: "/pdfs/Potana Bhagavatam Vol 3.pdf"
    },
    {
      number: "Volume 4",
      title: "Potana Bhagavatam Vol 4",
      description: "The fourth volume of Potana's Bhagavatam, a treasure trove of spiritual knowledge and divine stories.",
      filename: "Potana Bhagavatam Vol 4.pdf",
      downloadUrl: "/pdfs/Potana Bhagavatam Vol 4.pdf"
    },
    {
      number: "Volume 5",
      title: "Potana Bhagavatam Vol 5",
      description: "The fifth and final volume of Potana's complete translation of the Srimad Bhagavatam.",
      filename: "Potana Bhagavatam Vol 5.pdf",
      downloadUrl: "/pdfs/Potana Bhagavatam Vol 5.pdf"
    }
  ];

  const handlePdfClick = (downloadUrl: string, filename: string) => {
    // Open PDF in new tab
    window.open(downloadUrl, '_blank');
  };

  const handleReadPdf = (downloadUrl: string, filename: string) => {
    // Open PDF in embedded viewer
    setSelectedPdf({
      url: window.location.origin + downloadUrl,
      title: filename
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-amber-50">
      <Navigation />
      
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent mb-4">
              Potana Bhagavatam Volumes
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Explore the complete Telugu translation of the Srimad Bhagavatam by Potana
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {volumes.map((volume, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => handlePdfClick(volume.downloadUrl, volume.filename)}
              >
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-3">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <CardTitle className="text-lg text-amber-800">
                    {volume.number}
                  </CardTitle>
                  <p className="text-amber-600 font-medium text-sm">
                    {volume.title}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {volume.description}
                  </p>
                  <div className="mt-4 flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-amber-600 hover:text-amber-700 hover:bg-amber-100 border-amber-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleReadPdf(volume.downloadUrl, volume.filename);
                      }}
                    >
                      <BookOpen className="mr-2 h-4 w-4" />
                      Read
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 text-amber-600 hover:text-amber-700 hover:bg-amber-100 border-amber-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePdfClick(volume.downloadUrl, volume.filename);
                      }}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-amber-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-800 text-center">
                Potana's Masterpiece
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
                Potana's Telugu translation of the Srimad Bhagavatam is considered one of the greatest 
                literary works in Telugu literature. His poetic genius brings the divine wisdom 
                of the original Sanskrit text to life in beautiful Telugu verse.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                These five volumes contain the complete translation, preserving the essence and 
                spiritual depth of the original while making it accessible to Telugu-speaking devotees 
                and scholars throughout the centuries.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* PDF Viewer Modal */}
      {selectedPdf && (
        <PdfViewer
          isOpen={!!selectedPdf}
          onClose={() => setSelectedPdf(null)}
          pdfUrl={selectedPdf.url}
          title={selectedPdf.title}
        />
      )}
    </div>
  );
};

export default Books;
