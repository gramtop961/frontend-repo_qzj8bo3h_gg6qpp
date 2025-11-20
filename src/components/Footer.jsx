export default function Footer(){
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-[#C4A72C] tracking-widest uppercase text-sm">Maquia’s</div>
            <div className="text-2xl font-serif">Royal Cake</div>
            <p className="text-white/70 mt-3">A luxury dessert boutique crafting couture cakes for life’s most unforgettable moments.</p>
          </div>
          <div>
            <div className="font-semibold">Visit</div>
            <p className="text-white/70 mt-2">By appointment • Dubai, UAE</p>
            <a href="mailto:hello@maquiacake.com" className="text-white/90 underline mt-2 inline-block">hello@maquiacake.com</a>
          </div>
          <div>
            <div className="font-semibold">Follow</div>
            <div className="mt-2 text-white/70">Instagram • Pinterest • TikTok</div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-sm text-white/60">© {new Date().getFullYear()} Maquia’s Royal Cake. All rights reserved.</div>
      </div>
    </footer>
  )
}
