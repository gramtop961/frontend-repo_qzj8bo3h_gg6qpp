import { motion } from 'framer-motion'

export default function Story() {
  return (
    <section id="story" className="relative py-20 md:py-28 bg-gradient-to-b from-white to-[#E4DFD5] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{backgroundImage:'url(https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop)', backgroundSize:'cover', backgroundPosition:'center'}}></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} viewport={{once:true, amount:0.4}} transition={{duration:0.7}}>
            <h2 className="font-serif text-3xl md:text-5xl text-black">Crafted with Royal Elegance</h2>
            <p className="mt-5 text-gray-700 leading-relaxed">
              The name “Maquia” carries a promise — of grace, refinement, and unforgettable sweetness. Our creations blend premium ingredients with couture design, each detail finished by hand with gold-kissed artistry. Whether it’s a royal wedding or an intimate celebration, every cake is a centerpiece worthy of your most treasured moments.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We believe luxury is felt in the smallest moments: the first slice, the delicate florals, the whisper of vanilla. Welcome to your royal dessert boutique.
            </p>
          </motion.div>

          <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} viewport={{once:true, amount:0.4}} transition={{duration:0.7}} className="grid grid-cols-2 gap-4">
            {[
              'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1541781286675-09d34a72e60d?q=80&w=1000&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1614701172404-08661227b367?q=80&w=1000&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1605807646983-3617a8d1746a?q=80&w=1000&auto=format&fit=crop'
            ].map((src, i) => (
              <div key={i} className="relative aspect-[4/5] rounded-xl overflow-hidden border border-black/5 shadow-lg">
                <img src={src} alt="cake" className="w-full h-full object-cover" />
                <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:'linear-gradient(45deg, rgba(196,167,44,0.15), transparent 60%)'}}></div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
