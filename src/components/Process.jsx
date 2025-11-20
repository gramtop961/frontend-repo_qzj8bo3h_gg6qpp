import { motion } from 'framer-motion'
import { Cake, Sparkles, Truck, SlidersHorizontal } from 'lucide-react'

export default function Process(){
  const steps = [
    {icon: Cake, title:'Choose your cake', text:'Select a base from our Royal Collection.'},
    {icon: SlidersHorizontal, title:'Customize', text:'Size, flavors, florals, and gilded finishes.'},
    {icon: Truck, title:'Delivery', text:'White-glove, temperature-controlled delivery.'},
    {icon: Sparkles, title:'Enjoy your royal experience', text:'Unveil, slice, and celebrate.'},
  ]
  return (
    <section id="process" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="font-serif text-3xl text-black mb-10">Order Process</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="relative p-6 rounded-xl border border-black/10 bg-gradient-to-b from-white to-[#f9f7f2]">
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mb-4"><s.icon size={22}/></div>
              <div className="font-semibold">{s.title}</div>
              <p className="text-gray-600 text-sm mt-2">{s.text}</p>
              {i<steps.length-1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-[2px] bg-gradient-to-r from-[#C4A72C] to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
