import React, { useState } from 'react';
import { STORE_CONFIG } from '../config/storeConfig';
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Star,
  ExternalLink
} from 'lucide-react';

export const AboutContactPage: React.FC = () => {
  const [selectedInquiryType, setSelectedInquiryType] = useState('oil');
  const [vehicleDetails, setVehicleDetails] = useState('');
  const [customMessage, setCustomMessage] = useState('');

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    let prompt = `Hello ${STORE_CONFIG.name},\n`;
    if (selectedInquiryType === 'oil') {
      prompt += `I need recommendation on genuine engine oil & filters.\n`;
    } else if (selectedInquiryType === 'electrical') {
      prompt += `I need auto electrician diagnostics or workshop appointment.\n`;
    } else {
      prompt += `I have a general auto parts inquiry.\n`;
    }

    if (vehicleDetails) {
      prompt += `Vehicle: ${vehicleDetails}\n`;
    }
    if (customMessage) {
      prompt += `Details: ${customMessage}\n`;
    }
    prompt += `Please let me know availability and pricing.`;

    window.open(
      `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(prompt)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider">
          Workshop & Storefront
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          About JS Auto & Contact
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Conveniently located on the Main GT Road directly opposite Bahria Town Phase 4 Gate in Rawalpindi. We provide guaranteed genuine automotive fluids, filters, and premier auto electrical services.
        </p>
      </div>

      {/* Grid: Business Details & Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Workshop & Store Overview */}
        <div className="lg:col-span-7 space-y-6">
          {/* Business Profile Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-5 pb-6 border-b border-slate-100 text-center sm:text-left">
              <img
                src="/js-auto-official-logo.jpg"
                alt="JS Auto Official Logo"
                className="w-24 h-24 rounded-full object-cover shadow-lg ring-4 ring-brand-100 shrink-0"
              />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 flex items-center justify-center sm:justify-start space-x-1.5">
                      <span className="italic text-red-600">JS</span>
                      <span className="italic text-slate-900">AUTO</span>
                    </h2>
                    <p className="text-xs font-bold text-brand-700 tracking-wide uppercase mt-0.5">
                      {STORE_CONFIG.tagline}
                    </p>
                  </div>
                  <div className="sm:text-right">
                    <div className="flex items-center justify-center sm:justify-end space-x-1 text-amber-500">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="font-extrabold text-slate-900 text-sm">5.0</span>
                      <span className="text-slate-400 text-xs">({STORE_CONFIG.reviewsCount} reviews)</span>
                    </div>
                    <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full inline-block mt-0.5">
                      Verified Workshop & Store
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Complete automotive diagnostic care, general mechanical service, electrical troubleshooting & genuine fluids delivery.
                </p>
              </div>
            </div>

            {/* Contact Details List */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-xl bg-brand-50 text-brand-700 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold mb-0.5">Physical Address</strong>
                  <p className="text-slate-600 leading-relaxed">{STORE_CONFIG.address}</p>
                  <span className="text-[11px] text-brand-600 font-mono mt-1 block">
                    Plus Code: {STORE_CONFIG.plusCode}
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold mb-0.5">Direct Phone & WhatsApp</strong>
                  <p className="text-slate-600">
                    <a
                      href={`tel:${STORE_CONFIG.phone}`}
                      className="text-brand-600 font-bold hover:underline"
                    >
                      {STORE_CONFIG.phone}
                    </a>
                  </p>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    Orders accepted 24/7 on WhatsApp
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 rounded-xl bg-sky-50 text-sky-700 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-slate-900 font-bold mb-0.5">Business Hours</strong>
                  <p className="text-slate-600">{STORE_CONFIG.hours}</p>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    Seven days a week
                  </span>
                </div>
              </div>
            </div>

            {/* Services from Official Badge */}
            <div className="pt-4 border-t border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                All Car Solutions Under One Roof (Our Services)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                {STORE_CONFIG.services.map((service) => (
                  <div
                    key={service}
                    className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center space-x-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                    <span className="font-semibold text-slate-800 text-[11px] leading-tight">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Customer Reviews Highlight */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <h3 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>What Drivers Say About Us</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                <div className="font-bold text-slate-800">"Best auto electrician in Town"</div>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Fast diagnosis of complex wiring without unnecessary parts replacement.
                </p>
                <div className="text-[10px] text-slate-400 font-semibold">— Saad Malik</div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                <div className="font-bold text-slate-800">"Very knowledgeable 4x4 electrician"</div>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  To the point, no messing around. Got my Land Cruiser electricals sorted immediately.
                </p>
                <div className="text-[10px] text-slate-400 font-semibold">— Muddasar Rashid</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive WhatsApp Consultation Form */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs space-y-5">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full mb-2">
                <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                <span>Quick WhatsApp Assistance</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Ask a Technical Question
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Tell us your vehicle model and requirement. We’ll calculate the exact oil quantity and filter part numbers for you.
              </p>
            </div>

            <form onSubmit={handleSendInquiry} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1.5">
                  I need help with:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedInquiryType('oil')}
                    className={`py-2 px-2 rounded-xl text-center font-semibold border transition-all ${
                      selectedInquiryType === 'oil'
                        ? 'border-brand-600 bg-brand-50 text-brand-800'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Engine Oil
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedInquiryType('filters')}
                    className={`py-2 px-2 rounded-xl text-center font-semibold border transition-all ${
                      selectedInquiryType === 'filters'
                        ? 'border-brand-600 bg-brand-50 text-brand-800'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Filters
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedInquiryType('electrical')}
                    className={`py-2 px-2 rounded-xl text-center font-semibold border transition-all ${
                      selectedInquiryType === 'electrical'
                        ? 'border-brand-600 bg-brand-50 text-brand-800'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Electrical / V8
                  </button>
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  Your Vehicle (e.g. Corolla 1.6 2018, Alto 660cc, Civic X):
                </label>
                <input
                  type="text"
                  value={vehicleDetails}
                  onChange={(e) => setVehicleDetails(e.target.value)}
                  placeholder="Enter car make, model & year..."
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-brand-500 text-xs"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">
                  Any specific question or notes:
                </label>
                <textarea
                  rows={3}
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  placeholder="E.g. Which viscosity is best for summer? Do you have genuine Toyota pink coolant?"
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-1 focus:ring-brand-500 text-xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold flex items-center justify-center space-x-2 shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Send via WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Map Location Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-3">
            <h4 className="font-bold text-slate-900 text-sm flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-brand-600" />
              <span>Location on Google Maps</span>
            </h4>
            <div className="relative h-44 bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden flex flex-col items-center justify-center text-center p-4">
              <div className="p-3 bg-brand-100 text-brand-700 rounded-full mb-2">
                <MapPin className="w-6 h-6 animate-bounce" />
              </div>
              <span className="font-bold text-slate-900 text-xs">
                Opposite Bahria Town Phase 4 Gate, GT Road
              </span>
              <span className="text-[11px] text-slate-500 mt-0.5">
                Soan Camp, Rawalpindi
              </span>
              <a
                href="https://maps.google.com/?q=G4R7+3Q+Rawalpindi"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center space-x-1.5 px-3 py-1.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-[11px] font-bold shadow-2xs"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
