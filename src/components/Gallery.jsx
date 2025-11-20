import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = ['Royal Cakes', 'Weddings', 'Birthdays', 'Signature Creations']

const items = Array.from({length:12}).map((_, i) => ({
  id: i+1,
  title: `Royal Cake ${i+1}`,
  price: 120 + i*10,
  category: categories[i % categories.length],
  src: `https://images.unsplash.com/photo-15${50+i}507036-ab1f4038808a?q=80&w=900&auto=format&fit=crop`
}))

export default function Gallery() {
  const [active, setActive] = useState('Royal Cakes')
  const [modal, setModal] = useState(null)

  const filtered = items.filter(i => i.category === active)

  return (
    <section id="gallery" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between gap-4 mb-8">
          <h3 className="font-serif text-3xl text-black">Interactive Cake Gallery</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <button key={c} onClick={() => setActive(c)} className={`px-4 py-2 rounded-full text-sm border transition ${active===c? 'bg-black text-white border-black':'bg-white text-black border-black/20 hover:border-black/40'}`}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(card => (
            <motion.div key={card.id} whileHover={{y:-4}} className="relative group cursor-pointer rounded-xl overflow-hidden border border-black/10" onClick={() => setModal(card)}>
              <img src={card.src} alt={card.title} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition" style={{boxShadow:'inset 0 0 0 2px rgba(196,167,44,0.6)'}}></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                <div className="font-semibold">{card.title}</div>
                <div className="text-sm opacity-90">${card.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {modal && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-6" onClick={()=>setModal(null)}>
            <motion.div initial={{scale:0.95, opacity:0}} animate={{scale:1, opacity:1}} exit={{scale:0.95, opacity:0}} onClick={(e)=>e.stopPropagation()} className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full">
              <img src={modal.src} alt={modal.title} className="w-full h-80 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-2xl">{modal.title}</h4>
                    <p className="text-gray-600 mt-1">Made for Royalty • Hand-finished with gold accents</p>
                  </div>
                  <div className="text-xl font-semibold">${modal.price}</div>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <a href="/order" className="px-5 py-2 rounded-full bg-black text-white">Order Now</a>
                  <button onClick={()=>setModal(null)} className="px-5 py-2 rounded-full border">Close</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
