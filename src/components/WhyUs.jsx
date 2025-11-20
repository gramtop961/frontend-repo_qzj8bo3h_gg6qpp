import { motion } from 'framer-motion'
import { Crown, HandPlatter, Leaf, Truck } from 'lucide-react'

export default function WhyUs(){
  const items = [
    {icon: Crown, title:'Royal finishing & designs', text:'Gold accents, couture florals, and hand-detailed textures.'},
    {icon: HandPlatter, title:'Handcrafted with premium ingredients', text:'Only the finest Belgian chocolate, Madagascar vanilla, and fresh cream.'},
    {icon: Leaf, title:'Made-to-order freshness', text:'Prepared to your date and delivered at peak perfection.'},
    {icon: Truck, title:'Delivered with care & elegance', text:'Temperature-controlled delivery and white-glove handling.'},
  ]
  return (
    <section id="why" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="font-serif text-3xl text-black mb-10">Why Choose Us</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <motion.div key={idx} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: idx*0.05}} className="rounded-xl p-6 border border-black/10 bg-gradient-to-b from-white to-[#FFF9]">
              <div className="w-12 h-12 rounded-full border border-yellow-600/40 flex items-center justify-center mb-4" style={{boxShadow:'0 0 0 2px rgba(196,167,44,0.5) inset'}}>
                <it.icon className="text-yellow-700" />
              </div>
              <div className="font-semibold">{it.title}</div>
              <p className="text-gray-600 text-sm mt-2">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
