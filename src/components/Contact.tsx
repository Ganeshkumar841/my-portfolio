import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Copy, Check, ArrowUpRight, FileText, Send } from 'lucide-react';
import { PortfolioData } from '../data/portfolio';

interface ContactProps {
  data: PortfolioData;
  isLight: boolean;
  onOpenResumeModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ data, isLight, onOpenResumeModal }) => {
  const { personalInfo } = data;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderRole, setSenderRole] = useState('AI / LLM Internship Opportunity');
  const [messageText, setMessageText] = useState('');
  const [draftStatus, setDraftStatus] = useState<string | null>(null);

  const handleCopyEmail = () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(personalInfo.email);
      } else {
        const el = document.createElement('textarea');
        el.value = personalInfo.email;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      }
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleComposeMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `${senderRole}${senderName ? ` — from ${senderName}` : ''}`
    );
    const body = encodeURIComponent(
      messageText ||
        `Hi Ganesh,\n\nI reviewed your portfolio and would love to discuss an opportunity with you.`
    );
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, '_blank');
    setDraftStatus('Opened your email client with pre-filled message details.');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-b border-current/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="font-tech-mono text-xs uppercase tracking-widest text-[#D4633B] mb-3">
          05 // INITIATE COLLABORATION
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left 7 Columns: Monumental Patrick David Headline & Direct Channels */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="font-editorial-serif italic text-3xl sm:text-4xl text-[#A8B8A0] block mb-1">
                available for remote internships &amp; full-stack / AI builds
              </span>
              <h2 className="font-display-condensed text-6xl sm:text-8xl tracking-tight leading-[0.9]">
                LET&apos;S BUILD <span className="text-[#D4633B]">INTELLIGENT</span> SOFTWARE.
              </h2>
            </div>

            <p
              className={`max-w-xl text-base leading-relaxed ${
                isLight ? 'text-[#57544E]' : 'text-[#A09C92]'
              }`}
            >
              Seeking an AI/LLM Engineering Internship or Full Stack Developer role where I can contribute to RAG pipelines, LLM integrations, and resilient web applications. Reach out directly via email, LinkedIn, or phone.
            </p>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Email Card */}
              <div
                className={`p-4 rounded-sm border flex flex-col justify-between ${
                  isLight ? 'bg-white border-[#D8D2C7]' : 'bg-[#141412] border-[#282724]'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-tech-mono opacity-70 mb-2">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#D4633B]" />
                    EMAIL ADDRESS
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-[#D4633B] hover:underline"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-tech-mono text-sm font-medium break-all hover:text-[#D4633B] transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>

              {/* Phone Card */}
              <div
                className={`p-4 rounded-sm border flex flex-col justify-between ${
                  isLight ? 'bg-white border-[#D8D2C7]' : 'bg-[#141412] border-[#282724]'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-tech-mono opacity-70 mb-2">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#A8B8A0]" />
                    DIRECT PHONE
                  </span>
                  <span>INDIA (IST)</span>
                </div>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="font-tech-mono text-sm font-medium hover:text-[#D4633B] transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>

              {/* GitHub Card */}
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-sm border flex items-center justify-between group transition-colors ${
                  isLight
                    ? 'bg-white border-[#D8D2C7] hover:border-[#141413]'
                    : 'bg-[#141412] border-[#282724] hover:border-[#F2EFE9]/50'
                }`}
              >
                <div>
                  <div className="text-xs font-tech-mono opacity-70 flex items-center gap-1.5 mb-1">
                    <Github className="w-3.5 h-3.5" />
                    GITHUB PROFILE
                  </div>
                  <div className="font-tech-mono text-sm font-medium group-hover:text-[#D4633B]">
                    {personalInfo.githubHandle}
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:text-[#D4633B]" />
              </a>

              {/* LinkedIn Card */}
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-sm border flex items-center justify-between group transition-colors ${
                  isLight
                    ? 'bg-white border-[#D8D2C7] hover:border-[#141413]'
                    : 'bg-[#141412] border-[#282724] hover:border-[#F2EFE9]/50'
                }`}
              >
                <div>
                  <div className="text-xs font-tech-mono opacity-70 flex items-center gap-1.5 mb-1">
                    <Linkedin className="w-3.5 h-3.5 text-[#D4633B]" />
                    LINKEDIN NETWORK
                  </div>
                  <div className="font-tech-mono text-sm font-medium group-hover:text-[#D4633B]">
                    {personalInfo.linkedinHandle}
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:text-[#D4633B]" />
              </a>
            </div>
          </div>

          {/* Right 5 Columns: Quick Direct Email Launcher */}
          <div
            className={`lg:col-span-5 p-6 sm:p-8 rounded-sm border ${
              isLight ? 'bg-white border-[#D8D2C7]' : 'bg-[#141412] border-[#282724]'
            }`}
          >
            <div className="font-tech-mono text-xs uppercase tracking-widest text-[#D4633B] mb-2">
              // QUICK MESSAGE COMPOSER
            </div>
            <h3 className="font-editorial-serif italic text-2xl mb-5">
              Send a direct note to Ganesh
            </h3>

            <form onSubmit={handleComposeMailto} className="space-y-4">
              <div>
                <label
                  htmlFor="sender-name"
                  className="block font-tech-mono text-[11px] uppercase tracking-wider opacity-75 mb-1"
                >
                  Your Name or Organization
                </label>
                <input
                  id="sender-name"
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Sharma / Acme AI Labs"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-sm border focus:outline-none focus:border-[#D4633B] ${
                    isLight
                      ? 'bg-[#F4F1EA] border-[#D8D2C7] text-[#141413]'
                      : 'bg-[#0D0D0C] border-[#282724] text-[#F2EFE9]'
                  }`}
                />
              </div>

              <div>
                <label
                  htmlFor="sender-topic"
                  className="block font-tech-mono text-[11px] uppercase tracking-wider opacity-75 mb-1"
                >
                  Inquiry Topic
                </label>
                <select
                  id="sender-topic"
                  value={senderRole}
                  onChange={(e) => setSenderRole(e.target.value)}
                  className={`w-full px-3.5 py-2.5 text-sm rounded-sm border focus:outline-none focus:border-[#D4633B] ${
                    isLight
                      ? 'bg-[#F4F1EA] border-[#D8D2C7] text-[#141413]'
                      : 'bg-[#0D0D0C] border-[#282724] text-[#F2EFE9]'
                  }`}
                >
                  <option value="AI / LLM Internship Opportunity">AI / LLM Internship Opportunity</option>
                  <option value="Full Stack Developer Role">Full Stack Developer Role</option>
                  <option value="Freelance / Technical Collaboration">Freelance / Technical Collaboration</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="sender-message"
                  className="block font-tech-mono text-[11px] uppercase tracking-wider opacity-75 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="sender-message"
                  rows={3}
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Share role details, timeline, or project scope..."
                  className={`w-full px-3.5 py-2.5 text-sm rounded-sm border focus:outline-none focus:border-[#D4633B] ${
                    isLight
                      ? 'bg-[#F4F1EA] border-[#D8D2C7] text-[#141413]'
                      : 'bg-[#0D0D0C] border-[#282724] text-[#F2EFE9]'
                  }`}
                />
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#D4633B] text-[#F2EFE9] font-tech-mono text-xs uppercase tracking-widest hover:opacity-95 transition-opacity"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Compose Email</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenResumeModal}
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full border border-current/25 font-tech-mono text-xs uppercase tracking-wider hover:border-[#D4633B] transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-[#D4633B]" />
                  <span>Resumes</span>
                </button>
              </div>

              {draftStatus && (
                <p className="text-xs font-tech-mono text-[#A8B8A0] pt-1">{draftStatus}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
