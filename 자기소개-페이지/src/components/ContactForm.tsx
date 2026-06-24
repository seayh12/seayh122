import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name || !email || !message) {
      setError('필수 항목을 모두 입력해주세요.');
      return;
    }

    // Basic email pattern check
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('올바른 이메일 형식을 입력해주세요.');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center md:text-left space-y-3 mb-16">
          <h2 className="font-sans font-bold text-2xl md:text-3xl text-zinc-900 tracking-tight">Get in Touch</h2>
          <p className="font-sans text-sm text-zinc-500 max-w-xl">
            새로운 비즈니스 협업 기회, 이직 제안, 혹은 단순한 커피 챗 등 어떤 이야기든 환영합니다. 아래 폼을 작성해 주시면 확인 후 연락드리겠습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Quick info */}
          <div className="md:col-span-4 space-y-6">
            <div className="bg-zinc-50 border border-zinc-200/80 rounded-xl p-6">
              <h3 className="font-sans font-semibold text-base text-zinc-850 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white border border-zinc-150 rounded-lg text-zinc-600 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Email</p>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-sm font-sans font-medium text-zinc-700 hover:text-zinc-950 transition-colors break-all"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-zinc-200/60 rounded-xl p-6 bg-white flex flex-col justify-between h-48">
              <h4 className="font-sans font-semibold text-sm text-zinc-800">새로운 시도와 배움을 소중히 합니다.</h4>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                주도적인 환경에서 문제를 효율적으로 해결하고, 배운 지식을 팀원과 나누며 동반 성장하는 문화를 선호합니다.
              </p>
              <div className="flex items-center gap-1.5 text-xs text-zinc-600 font-medium font-sans">
                <span>프로필 상세히 보기</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-8 bg-white border border-zinc-200/80 rounded-xl p-6 md:p-8 shadow-[0_1px_2px_rgba(0,0,0,0.01)]">
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-500 font-sans">성함 <span className="text-zinc-400">*</span></label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="홍길동"
                        disabled={isSubmitting}
                        className="w-full px-3.5 py-2.5 bg-zinc-50/50 border border-zinc-200 focus:border-zinc-500 focus:bg-white rounded-lg text-sm transition-all outline-none font-sans"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-500 font-sans">이메일 <span className="text-zinc-400">*</span></label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        disabled={isSubmitting}
                        className="w-full px-3.5 py-2.5 bg-zinc-50/50 border border-zinc-200 focus:border-zinc-500 focus:bg-white rounded-lg text-sm transition-all outline-none font-sans"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-500 font-sans">제목</label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="협업 제안 / 이직 문의 등"
                      disabled={isSubmitting}
                      className="w-full px-3.5 py-2.5 bg-zinc-50/50 border border-zinc-200 focus:border-zinc-500 focus:bg-white rounded-lg text-sm transition-all outline-none font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-500 font-sans">내용 <span className="text-zinc-400">*</span></label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="문의하실 구체적인 내용을 작성해주세요."
                      disabled={isSubmitting}
                      rows={5}
                      className="w-full px-3.5 py-2.5 bg-zinc-50/50 border border-zinc-200 focus:border-zinc-500 focus:bg-white rounded-lg text-sm transition-all outline-none font-sans resize-none"
                      required
                    />
                  </div>

                  {/* Error Notification */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-xs"
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{error}</span>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-zinc-900 hover:bg-zinc-800 disabled:bg-zinc-350 text-white rounded-lg text-xs font-medium font-sans flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>전송 중...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>메시지 전송하기</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', damping: 20 }}
                  className="py-12 text-center space-y-5"
                >
                  <div className="w-14 h-14 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto text-emerald-500">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-sans font-bold text-lg text-zinc-900">메시지가 정상적으로 발송되었습니다!</h3>
                    <p className="font-sans text-sm text-zinc-500 max-w-sm mx-auto leading-relaxed">
                      작성해주신 내용이 성공적으로 기록되었습니다. 신속하게 이메일({profileData.email})로 회신 드리겠습니다.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-4 py-2 bg-zinc-100 hover:bg-zinc-200 border border-zinc-250 text-zinc-600 hover:text-zinc-900 rounded-full text-xs font-medium font-sans transition-all"
                  >
                    메시지 추가 전송
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
