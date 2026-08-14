import { useEffect, useRef, useState } from 'react'
import type { PublicBlogArticle } from '../data/portfolioKnowledge.ts'
import { MAX_QUERY_LENGTH, searchPortfolio, type AssistantContext, type SearchResult } from '../utils/portfolioSearch.ts'

type Props = {
  dark: boolean
  lang: 'FR' | 'EN'
  articles: PublicBlogArticle[]
  onNavigate: (href: string) => void
}

type Message = {
  id: number
  role: 'user' | 'assistant'
  text: string
  results?: SearchResult[]
}

const suggestions = {
  FR: [
    'Qui est Taoufik Gassem ?',
    'Quel est son parcours ?',
    'Quelles certifications possède-t-il ?',
    'Quelles sont ses expériences ?',
    'Quelles sont ses compétences ?',
    'Combien d’années d’expérience a-t-il ?',
    'Est-il disponible ?',
  ],
  EN: [
    'Who is Taoufik Gassem?',
    'What is his career path?',
    'Which certifications does he hold?',
    'What professional experience does he have?',
    'What are his skills?',
    'How many years of experience does he have?',
    'Is he available?',
  ],
}

export default function PortfolioAssistant({ dark, lang, articles, onNavigate }: Props) {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [context, setContext] = useState<AssistantContext>({ lastResultIds: [] })
  const [messages, setMessages] = useState<Message[]>([])
  const triggerRef = useRef<HTMLButtonElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const nextId = useRef(1)
  const pendingResponseRef = useRef<number | null>(null)

  useEffect(() => {
    if (open) window.setTimeout(() => inputRef.current?.focus(), 50)
  }, [open])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        window.setTimeout(() => triggerRef.current?.focus(), 0)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => () => {
    if (pendingResponseRef.current !== null) window.clearTimeout(pendingResponseRef.current)
  }, [])

  const ask = (rawQuestion: string) => {
    const question = rawQuestion.trim()
    if (!question || typing) return
    const userMessage: Message = { id: nextId.current++, role: 'user', text: question }
    setMessages(current => [...current, userMessage])
    setInput('')
    setTyping(true)
    pendingResponseRef.current = window.setTimeout(() => {
      const response = searchPortfolio(question, articles, lang, context)
      if (!response.error || response.error === 'too-long') {
        setMessages(current => [...current, {
          id: nextId.current++, role: 'assistant', text: response.answer, results: response.results,
        }])
        setContext(response.context)
      }
      setTyping(false)
      pendingResponseRef.current = null
    }, 180)
  }

  const reset = () => {
    if (pendingResponseRef.current !== null) window.clearTimeout(pendingResponseRef.current)
    pendingResponseRef.current = null
    setMessages([])
    setContext({ lastResultIds: [] })
    setInput('')
    setTyping(false)
    nextId.current = 1
    window.setTimeout(() => inputRef.current?.focus(), 0)
  }

  const close = () => {
    setOpen(false)
    window.setTimeout(() => triggerRef.current?.focus(), 0)
  }

  const openLink = (href: string) => {
    if (href.startsWith('/') || href.startsWith('#')) {
      onNavigate(href)
      close()
      return
    }
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(value => !value)}
        aria-expanded={open}
        aria-controls="portfolio-assistant"
        aria-label={lang === 'FR' ? 'Ouvrir l’assistant du portfolio' : 'Open the portfolio assistant'}
        className="fixed bottom-5 right-5 z-[70] inline-flex h-14 items-center gap-2 rounded-full bg-[#00D4AA] px-4 text-sm font-extrabold text-[#0A2540] shadow-[0_14px_38px_rgba(0,212,170,0.35)] transition hover:-translate-y-0.5 hover:bg-[#12E3BA] focus:outline-none focus:ring-4 focus:ring-[#00D4AA]/30"
      >
        <span aria-hidden="true" className="text-xl">✦</span>
        <span className="hidden sm:inline">{lang === 'FR' ? 'Assistant portfolio' : 'Portfolio assistant'}</span>
      </button>

      {open && (
        <section
          id="portfolio-assistant"
          role="dialog"
          aria-modal="false"
          aria-labelledby="assistant-title"
          className={`fixed inset-x-3 bottom-20 top-16 z-[80] flex flex-col overflow-hidden rounded-3xl border shadow-[0_24px_80px_rgba(10,37,64,0.35)] sm:inset-auto sm:bottom-20 sm:right-5 sm:top-auto sm:h-[610px] sm:max-h-[calc(100vh-7rem)] sm:w-[410px] ${dark ? 'border-white/10 bg-[#162032] text-[#f1f5f9]' : 'border-slate-200 bg-white text-[#0A2540]'}`}
        >
          <header className={`flex items-center gap-3 border-b px-4 py-3 ${dark ? 'border-white/10 bg-[#1e293b]' : 'border-slate-100 bg-[#F8FAFC]'}`}>
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#00D4AA] text-xl text-[#0A2540]" aria-hidden="true">✦</div>
            <div className="min-w-0 flex-1">
              <h2 id="assistant-title" className="text-sm font-extrabold">{lang === 'FR' ? 'Assistant de Taoufik' : 'Taoufik’s assistant'}</h2>
              <p className={`text-[11px] ${dark ? 'text-white/60' : 'text-slate-500'}`}>
                {lang === 'FR' ? 'Recherche locale · données publiques uniquement' : 'Local search · public data only'}
              </p>
            </div>
            {(messages.length > 0 || input) && (
              <button type="button" onClick={reset} aria-label={lang === 'FR' ? 'Recommencer' : 'Start over'} className="rounded-xl px-2.5 py-2 text-[11px] font-extrabold text-[#E85F2E] transition hover:bg-black/10">
                ↺ {lang === 'FR' ? 'Recommencer' : 'Start over'}
              </button>
            )}
            <button type="button" onClick={close} aria-label={lang === 'FR' ? 'Fermer' : 'Close'} className="h-9 w-9 rounded-xl text-xl opacity-70 transition hover:bg-black/10 hover:opacity-100">×</button>
          </header>

          <div ref={scrollRef} role="log" aria-live="polite" className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
            {messages.length === 0 && (
              <div className="space-y-4">
                <div className={`rounded-2xl rounded-tl-sm p-4 text-sm leading-6 ${dark ? 'bg-[#1e293b]' : 'bg-slate-100'}`}>
                  {lang === 'FR'
                    ? 'Bonjour ! Je peux répondre sur le parcours, les projets, les compétences et les articles publics de Taoufik. Je n’invente aucune information.'
                    : 'Hello! I can answer questions about Taoufik’s public experience, projects, skills and articles. I do not invent information.'}
                </div>
                <div>
                  <div className="grid gap-2">
                    {suggestions[lang].map(suggestion => (
                      <button key={suggestion} type="button" onClick={() => ask(suggestion)} className={`rounded-xl border px-3 py-2 text-left text-xs font-semibold transition hover:border-[#00D4AA] ${dark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white'}`}>{suggestion}</button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {messages.map(message => (
              <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className="max-w-[92%] space-y-2">
                  <div className={`whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-5 ${message.role === 'user' ? 'rounded-tr-sm bg-[#FF6B35] text-white' : dark ? 'rounded-tl-sm bg-[#1e293b]' : 'rounded-tl-sm bg-slate-100'}`}>
                    {message.text}
                  </div>
                  {message.results?.map(result => (
                    <article key={result.id} className={`rounded-2xl border p-3 ${dark ? 'border-white/10 bg-white/[0.03]' : 'border-slate-200 bg-white'}`}>
                      <p className="text-xs font-extrabold leading-5">{result.title}</p>
                      {result.category === 'blog' && <p className={`mt-1 line-clamp-2 text-[11px] leading-4 ${dark ? 'text-white/60' : 'text-slate-500'}`}>{result.summary}</p>}
                      <div className="mt-2 flex flex-wrap gap-2">
                        {result.links.slice(0, 2).map(link => (
                          <button key={`${result.id}-${link.href}`} type="button" onClick={() => openLink(link.href)} className="text-[11px] font-extrabold text-[#E85F2E] underline-offset-2 hover:underline">{link.label} →</button>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}

            {typing && (
              <div className={`w-fit rounded-2xl rounded-tl-sm px-4 py-3 ${dark ? 'bg-[#1e293b]' : 'bg-slate-100'}`} aria-label={lang === 'FR' ? 'Recherche en cours' : 'Searching'}>
                <span className="inline-flex gap-1" aria-hidden="true"><i className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00D4AA]"/><i className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00D4AA] [animation-delay:120ms]"/><i className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00D4AA] [animation-delay:240ms]"/></span>
              </div>
            )}
          </div>

          <form onSubmit={event => { event.preventDefault(); ask(input) }} className={`border-t p-3 ${dark ? 'border-white/10' : 'border-slate-100'}`}>
            <div className={`flex items-center gap-2 rounded-2xl border px-3 py-2 focus-within:border-[#00D4AA] focus-within:ring-2 focus-within:ring-[#00D4AA]/20 ${dark ? 'border-white/10 bg-[#1e293b]' : 'border-slate-200 bg-[#F8FAFC]'}`}>
              <input
                ref={inputRef}
                value={input}
                onChange={event => setInput(event.target.value)}
                maxLength={MAX_QUERY_LENGTH}
                autoComplete="off"
                aria-label={lang === 'FR' ? 'Votre question' : 'Your question'}
                placeholder={lang === 'FR' ? 'Posez une question…' : 'Ask a question…'}
                className="min-w-0 flex-1 bg-transparent py-1 text-sm outline-none placeholder:opacity-50"
              />
              <button type="submit" disabled={!input.trim() || typing} aria-label={lang === 'FR' ? 'Envoyer' : 'Send'} className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00D4AA] font-black text-[#0A2540] transition hover:bg-[#12E3BA] disabled:cursor-not-allowed disabled:opacity-40">↑</button>
            </div>
            <div className={`mt-1 flex justify-between px-1 text-[10px] ${dark ? 'text-white/40' : 'text-slate-400'}`}>
              <span>{lang === 'FR' ? 'Aucune donnée envoyée à un service externe' : 'No data sent to an external service'}</span>
              <span>{input.length}/{MAX_QUERY_LENGTH}</span>
            </div>
          </form>
        </section>
      )}
    </>
  )
}
