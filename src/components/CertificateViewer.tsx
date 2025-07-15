
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Award, ExternalLink, Calendar, Building2 } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  link: string;
  linkedin?: string;
  color: string;
  image?: string;
}

interface CertificateViewerProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: Certificate | null;
}

const CertificateViewer = ({ isOpen, onClose, certificate }: CertificateViewerProps) => {
  if (!certificate) return null;

  const handleLinkedInVerify = () => {
    window.open(certificate.linkedin, '_blank', 'noopener,noreferrer');
  };

  const handleViewOriginal = () => {
    window.open(certificate.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-[95vw] h-[90vh] p-0 bg-transparent border-0 shadow-none">
        {/* Glass morphism container */}
        <div className="relative h-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-x"></div>
          
          {/* Header with glass effect */}
          <DialogHeader className="relative px-4 md:px-8 py-4 bg-white/10 backdrop-blur-sm border-b border-white/20 shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 md:gap-4">
                <div className={`p-2 md:p-3 rounded-full bg-gradient-to-r ${certificate.color} shadow-lg`}>
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <DialogTitle className="text-lg md:text-2xl font-bold text-white drop-shadow-lg">
                    {certificate.title}
                  </DialogTitle>
                  <p className="text-white/80 text-xs md:text-sm mt-1 flex items-center gap-2">
                    <Building2 className="w-3 h-3 md:w-4 md:h-4" />
                    {certificate.issuer}
                  </p>
                </div>
              </div>
              <Button
                onClick={onClose}
                size="sm"
                variant="ghost"
                className="text-white hover:bg-white/10 h-8 w-8 md:h-10 md:w-10 p-0 rounded-full backdrop-blur-sm"
              >
                <X className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </div>
          </DialogHeader>
          
          {/* Main content area with responsive layout */}
          <div className="flex-1 p-4 md:p-6 min-h-0">
            {/* Desktop/Tablet Layout (horizontal) */}
            <div className="hidden md:flex gap-6 h-full">
              {/* Left side - Certificate Image and Action Buttons (50% width) */}
              <div className="w-1/2 flex flex-col gap-4">
                {/* Certificate Image */}
                <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg overflow-hidden">
                  <div className="h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    {certificate.image ? (
                      <img 
                        src={certificate.image} 
                        alt={certificate.title}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    ) : (
                      <div className="text-center text-gray-500">
                        <Award className="w-20 h-20 mx-auto mb-4 opacity-50" />
                        <p className="text-xl font-medium">Certificate Preview</p>
                        <p className="text-sm mt-2 opacity-70">Image not available</p>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 p-4 shadow-lg">
                  <h3 className="text-sm font-semibold text-white mb-3">Verification</h3>
                  <div className="flex flex-col gap-3">
                    <Button
                      onClick={handleLinkedInVerify}
                      className="bg-blue-600/80 hover:bg-blue-600 text-white border border-blue-400/30 backdrop-blur-sm transition-all duration-300 shadow-lg w-full"
                      size="sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      LinkedIn Profile
                    </Button>
                    <Button
                      onClick={handleViewOriginal}
                      variant="outline"
                      className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm transition-all duration-300 w-full"
                      size="sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Original Source
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Right side - Certificate Details (50% width, full height) */}
              <div className="w-1/2">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg h-full flex flex-col relative overflow-hidden">
                  {/* Fixed Header */}
                  <div className="px-6 py-4 border-b border-white/20 bg-white/5 backdrop-blur-sm relative z-10">
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                      <Award className="w-6 h-6" />
                      Certificate Details
                    </h3>
                  </div>
                  
                  {/* Top Mirage Effect */}
                  <div className="absolute top-16 left-0 right-0 h-8 bg-gradient-to-b from-white/5 to-transparent z-20 pointer-events-none"></div>
                  
                  {/* Scrollable Content */}
                  <ScrollArea className="flex-1 px-6">
                    <div className="space-y-6 py-6">
                      <div>
                        <label className="text-white/70 text-sm font-medium uppercase tracking-wide">Certificate Title</label>
                        <p className="text-white text-lg font-semibold mt-2">{certificate.title}</p>
                      </div>
                      
                      <div>
                        <label className="text-white/70 text-sm font-medium uppercase tracking-wide flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          Issuing Organization
                        </label>
                        <p className="text-white text-base font-medium mt-2">{certificate.issuer}</p>
                      </div>
                      
                      <div>
                        <label className="text-white/70 text-sm font-medium uppercase tracking-wide flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Issue Date
                        </label>
                        <p className="text-white text-base font-medium mt-2">{certificate.date}</p>
                      </div>
                      
                      <div>
                        <label className="text-white/70 text-sm font-medium uppercase tracking-wide">Description</label>
                        <p className="text-white/90 text-base mt-3 leading-relaxed">{certificate.description}</p>
                      </div>
                    </div>
                  </ScrollArea>
                  
                  {/* Bottom Mirage Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/5 to-transparent z-20 pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Mobile Layout (vertical) - Fully scrollable */}
            <div className="md:hidden h-full">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg h-full flex flex-col relative overflow-hidden">
                {/* Fixed Header */}
                <div className="px-4 py-3 border-b border-white/20 bg-white/5 backdrop-blur-sm relative z-10 shrink-0">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Certificate Details
                  </h3>
                </div>
                
                {/* Top Mirage Effect */}
                <div className="absolute top-12 left-0 right-0 h-6 bg-gradient-to-b from-white/5 to-transparent z-20 pointer-events-none"></div>
                
                {/* Scrollable Content - Everything inside */}
                <ScrollArea className="flex-1 px-4">
                  <div className="py-4 space-y-6">
                    {/* Certificate Image */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg overflow-hidden h-64">
                      <div className="h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                        {certificate.image ? (
                          <img 
                            src={certificate.image} 
                            alt={certificate.title}
                            className="w-full h-full object-contain rounded-lg"
                          />
                        ) : (
                          <div className="text-center text-gray-500">
                            <Award className="w-16 h-16 mx-auto mb-3 opacity-50" />
                            <p className="text-lg font-medium">Certificate Preview</p>
                            <p className="text-xs mt-1 opacity-70">Image not available</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Certificate Details */}
                    <div className="space-y-4">
                      <div>
                        <label className="text-white/70 text-xs font-medium uppercase tracking-wide">Certificate Title</label>
                        <p className="text-white text-base font-semibold mt-2">{certificate.title}</p>
                      </div>
                      
                      <div>
                        <label className="text-white/70 text-xs font-medium uppercase tracking-wide flex items-center gap-2">
                          <Building2 className="w-3 h-3" />
                          Issuing Organization
                        </label>
                        <p className="text-white text-sm font-medium mt-2">{certificate.issuer}</p>
                      </div>
                      
                      <div>
                        <label className="text-white/70 text-xs font-medium uppercase tracking-wide flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          Issue Date
                        </label>
                        <p className="text-white text-sm font-medium mt-2">{certificate.date}</p>
                      </div>
                      
                      <div>
                        <label className="text-white/70 text-xs font-medium uppercase tracking-wide">Description</label>
                        <p className="text-white/90 text-sm mt-3 leading-relaxed min-h-[100px] w-full">{certificate.description}</p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 p-4 shadow-lg">
                      <h3 className="text-sm font-semibold text-white mb-3">Verification</h3>
                      <div className="flex flex-col gap-3">
                        <Button
                          onClick={handleLinkedInVerify}
                          className="bg-blue-600/80 hover:bg-blue-600 text-white border border-blue-400/30 backdrop-blur-sm transition-all duration-300 shadow-lg w-full"
                          size="sm"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          LinkedIn Profile
                        </Button>
                        <Button
                          onClick={handleViewOriginal}
                          variant="outline"
                          className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm transition-all duration-300 w-full"
                          size="sm"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Original Source
                        </Button>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
                
                {/* Bottom Mirage Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white/5 to-transparent z-20 pointer-events-none"></div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CertificateViewer;