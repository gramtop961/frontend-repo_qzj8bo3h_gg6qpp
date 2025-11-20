import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {name:'Amira', text:'The most exquisite cake we have ever tasted. It looked like a couture piece and tasted like a dream.', src:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop'},
  {name:'Layla', text:'Our wedding centerpiece — guests could not stop talking about it.', src:'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop'},
  {name:'Noor', text:'Royal service from start to finish. Perfect delivery and presentation.', src:'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=400&auto=format&fit=crop'},
]

export default function Testimonials(){
  const [idx, setIdx] = useState(0)
  useEffect(()=>{
    const t = setInterval(()=> setIdx(i => (i+1)%testimonials.length), 4000)
    return ()=> clearInterval(t)
  },[])

  const current = testimonials[idx]

  return (
    <section id="testimonials" className="py-20 md:py-24 bg-gradient-to-b from-white to-[#E4DFD5]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h3 className="font-serif text-3xl text-black mb-10">What Our Royal Customers Say</h3>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div key={idx} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-10}} transition={{duration:0.5}} className="flex flex-col items-center">
              <img src={current.src} alt={current.name} className="w-20 h-20 rounded-full object-cover border-2 border-black/10"/>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl">“{current.text}”</p>
              <div className="mt-2 text-sm text-gray-500">— {current.name}</div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
