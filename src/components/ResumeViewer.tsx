import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeViewer = ({ isOpen, onClose }: ResumeViewerProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-[96vw] h-[95vh] p-0 bg-white border-0 shadow-2xl">
        {/* Header with gradient background */}
        <DialogHeader className="relative px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-xl font-bold text-white">
                Jitesh Ramakant Adekar - Resume
              </DialogTitle>
              <p className="text-blue-100 text-sm mt-1">Full Stack Developer | Java Enthusiast</p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Jitesh_Adekar_Resume.pdf';
                  link.click();
                }}
                size="sm"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button
                onClick={onClose}
                size="sm"
                variant="ghost"
                className="text-white hover:bg-white/10 h-8 w-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>
        
        {/* PDF Container - Full height with no gaps */}
        <div className="flex-1 bg-gray-100">
          <iframe
            src="/resume.pdf"
            className="w-full h-full border-0"
            title="Jitesh Adekar Resume"
            style={{ minHeight: 'calc(95vh - 80px)' }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeViewer;
