import { motion } from 'framer-motion'

const gold = '#C4A72C'

export default function Hero({ logoSrc }) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-black">
      {/* starry shimmer */}
      <div className="pointer-events-none absolute inset-0" style={{background:"radial-gradient(1000px 400px at 50% -200px, rgba(196,167,44,0.2), transparent 70%)"}}></div>
      <div className="absolute inset-0 opacity-20 mix-blend-screen" style={{backgroundImage:'radial-gradient(circle at 20% 30%, #fff, transparent 20%), radial-gradient(circle at 80% 20%, #fff, transparent 20%), radial-gradient(circle at 50% 80%, #fff, transparent 20%)'}}></div>

      <div className="relative z-10 text-center px-6">
        <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} transition={{duration:1}}>
          <div className="mx-auto w-40 h-40 md:w-56 md:h-56 rounded-full bg-black/60 border border-[#C4A72C]/40 flex items-center justify-center shadow-[0_0_35px_rgba(196,167,44,0.35)] overflow-hidden">
            {logoSrc ? (
              <img src={logoSrc} alt="Maquia’s Royal Cake" className="w-full h-full object-cover" />
            ) : (
              <span className="text-5xl" style={{color: gold}}>♛</span>
            )}
          </div>
        </motion.div>

        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.2, duration:0.8}} className="mt-8 text-4xl md:text-6xl font-serif tracking-tight text-white">
          Where Royalty Meets Sweetness
        </motion.h1>
        <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.35, duration:0.8}} className="mt-4 text-white/80 max-w-2xl mx-auto">
          Hand-crafted luxury cakes for unforgettable moments.
        </motion.p>

        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.5, duration:0.8}} className="mt-8 flex items-center justify-center gap-4">
          <a href="#collection" className="px-6 py-3 rounded-full font-semibold text-black shadow-[0_0_35px_rgba(196,167,44,0.35)] border border-[#C4A72C]/50" style={{background: gold}}>View Royal Collection</a>
          <a href="/order" className="px-6 py-3 rounded-full font-semibold text-black/90 bg-[#E5C4C0] border border-white/20 hover:brightness-110 transition">Order Now</a>
        </motion.div>
      </div>

      {/* floating floral particles */}
      {[...Array(16)].map((_, i) => (
        <motion.div key={i} className="absolute w-2 h-2 rounded-full" style={{background: gold, filter:'blur(1px)'}} initial={{opacity:0, y:50}} animate={{opacity:[0,1,0.8,0], y:[0,-200,-300,-400], x:[0, (i%2?1:-1)*60, (i%3?1:-1)*120]}} transition={{duration:8 + (i%5), delay:i*0.2, repeat:Infinity, ease:'easeOut'}} />
      ))}
    </section>
  )
}
