import { motion } from 'framer-motion'

const cards = Array.from({length:6}).map((_, i) => ({
  id: i+1,
  title: ['Imperial Rose','Golden Hour','Sage Crown','Blush Velvet','Crown Jewel','Elysian Bloom'][i],
  src: `https://images.unsplash.com/photo-16${20+i}807036-09d34a72e60d?q=80&w=1200&auto=format&fit=crop`,
}))

export default function Collection(){
  return (
    <section id="collection" className="py-20 md:py-24 bg-gradient-to-b from-[#E4DFD5] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="font-serif text-3xl text-black mb-8">Royal Collection</h3>
        <div className="relative overflow-hidden">
          <div className="flex gap-6 snap-x snap-mandatory overflow-x-auto pb-4">
            {cards.map((c, idx) => (
              <motion.div key={c.id} whileHover={{rotate: -0.5, y:-4}} className="snap-center min-w-[280px] md:min-w-[360px] bg-white rounded-xl border border-black/10 shadow-sm">
                <div className="relative">
                  <img src={c.src} alt={c.title} className="w-full h-64 object-cover rounded-t-xl"/>
                  <span className="absolute top-3 left-3 text-[10px] tracking-widest uppercase px-2 py-1 rounded-full bg-black/70 text-white">Made for Royalty</span>
                  <div className="absolute inset-0 rounded-t-xl pointer-events-none" style={{boxShadow:'inset 0 0 0 2px rgba(196,167,44,0.6)'}}></div>
                </div>
                <div className="p-4">
                  <div className="font-serif text-xl">{c.title}</div>
                  <p className="text-gray-600 text-sm mt-1">Signature couture finish • Hand-arranged florals</p>
                  <a href="/order" className="inline-block mt-4 px-4 py-2 rounded-full bg-black text-white">Order</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
