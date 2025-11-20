import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const gold = '#C4A72C'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all ${
    scrolled ? 'bg-black/80 backdrop-blur border-b border-[#C4A72C]/20' : 'bg-black/40'
  }`

  return (
    <header className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-black/60 border border-[#C4A72C]/40 flex items-center justify-center shadow-[0_0_25px_rgba(196,167,44,0.35)]">
              {/* Fallback crown glyph if logo not loaded */}
              <span className="text-[22px]" style={{color: gold}}>♛</span>
            </div>
            <div className="text-white">
              <div className="text-sm tracking-widest uppercase text-[#C4A72C]">Maquia’s</div>
              <div className="text-lg font-semibold">Royal Cake</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: '#story', label: 'Story' },
              { href: '#gallery', label: 'Gallery' },
              { href: '#collection', label: 'Royal Collection' },
              { href: '#why', label: 'Why Us' },
              { href: '#testimonials', label: 'Testimonials' },
              { href: '#process', label: 'Order Process' },
            ].map((i) => (
              <a key={i.href} href={i.href} className="text-sm text-white/80 hover:text-white transition-colors relative group">
                <span>{i.label}</span>
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 group-hover:w-full transition-all" style={{background: gold}}></span>
              </a>
            ))}
            <a href="/order" className="px-4 py-2 rounded-full text-sm font-semibold shadow-[0_0_20px_rgba(196,167,44,0.35)] border border-[#C4A72C]/50 text-black" style={{background: gold}}>Order Now</a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-white">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#C4A72C]/20 bg-black/90">
          <div className="px-4 py-4 space-y-3">
            {[
              { href: '#story', label: 'Story' },
              { href: '#gallery', label: 'Gallery' },
              { href: '#collection', label: 'Royal Collection' },
              { href: '#why', label: 'Why Us' },
              { href: '#testimonials', label: 'Testimonials' },
              { href: '#process', label: 'Order Process' },
            ].map((i) => (
              <a key={i.href} href={i.href} onClick={() => setOpen(false)} className="block text-white/90">
                {i.label}
              </a>
            ))}
            <a href="/order" className="inline-block px-4 py-2 rounded-full text-sm font-semibold border border-[#C4A72C]/50 text-black" style={{background: gold}}>Order Now</a>
          </div>
        </div>
      )}
    </header>
  )
}
