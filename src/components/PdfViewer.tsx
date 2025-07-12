import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface PdfViewerProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}

const PdfViewer = ({ isOpen, onClose, pdfUrl, title }: PdfViewerProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-[90vw] h-[90vh] p-0 flex flex-col">
        <div className="flex items-center justify-between px-4 py-2 bg-white border-b">
          <span className="text-lg font-semibold text-amber-800 truncate" title={title}>{title}</span>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close PDF viewer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 min-h-0">
          <iframe
            src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(pdfUrl)}`}
            className="w-full h-full border-0"
            title={title}
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PdfViewer; 