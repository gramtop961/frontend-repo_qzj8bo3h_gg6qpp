import { useState, useMemo } from 'react'

const basePrices = {
  '6-inch': 180,
  '8-inch': 260,
  '10-inch': 340,
}

export default function Order(){
  const [size, setSize] = useState('8-inch')
  const [flavor, setFlavor] = useState('Vanilla Bean')
  const [finish, setFinish] = useState('Gold leaf accents')
  const [message, setMessage] = useState('')
  const [uploadPreview, setUploadPreview] = useState(null)

  const extras = [
    {label:'Gold leaf accents', price:40},
    {label:'Fresh florals', price:55},
    {label:'Edible pearls', price:25},
    {label:'Extra tier', price:120},
  ]
  const [checked, setChecked] = useState(['Gold leaf accents'])

  const price = useMemo(()=>{
    const base = basePrices[size]
    const extra = checked.reduce((sum, l)=> sum + (extras.find(e=>e.label===l)?.price||0), 0)
    return base + extra
  }, [size, checked])

  const onUpload = (e) => {
    const file = e.target.files?.[0]
    if(!file) return
    const reader = new FileReader()
    reader.onload = () => setUploadPreview(reader.result)
    reader.readAsDataURL(file)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#E4DFD5]">
      <div className="max-w-5xl mx-auto px-6 py-28">
        <h1 className="font-serif text-3xl text-black">Custom Order</h1>
        <p className="text-gray-600 mt-2">Design your royal cake and receive a confirmation instantly.</p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Size</label>
              <select value={size} onChange={e=>setSize(e.target.value)} className="mt-2 w-full border rounded-lg p-3">
                {Object.keys(basePrices).map(s => <option key={s}>{s}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Flavor</label>
              <select value={flavor} onChange={e=>setFlavor(e.target.value)} className="mt-2 w-full border rounded-lg p-3">
                {['Vanilla Bean','Belgian Chocolate','Red Velvet','Pistachio Rose'].map(f => <option key={f}>{f}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Finish</label>
              <select value={finish} onChange={e=>setFinish(e.target.value)} className="mt-2 w-full border rounded-lg p-3">
                {['Gold leaf accents','Buttercream textures','Chocolate glaze'].map(f => <option key={f}>{f}</option>)}
              </select>
            </div>

            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">Extras</div>
              <div className="grid grid-cols-2 gap-3">
                {extras.map(ex => (
                  <label key={ex.label} className="flex items-center gap-2 text-sm">
                    <input type="checkbox" checked={checked.includes(ex.label)} onChange={e=> setChecked(v=> e.target.checked ? [...v, ex.label] : v.filter(x=>x!==ex.label))} />
                    {ex.label} <span className="text-gray-500">(+${ex.price})</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Custom message (optional)</label>
              <input value={message} onChange={e=>setMessage(e.target.value)} className="mt-2 w-full border rounded-lg p-3" placeholder="Happy Anniversary, Noor!" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Reference image (optional)</label>
              <input type="file" accept="image/*" onChange={onUpload} className="mt-2 w-full" />
              {uploadPreview && (<img src={uploadPreview} className="mt-3 w-full h-56 object-cover rounded-lg border" />)}
            </div>
          </div>

          <div className="p-6 rounded-2xl border bg-white/80">
            <div className="text-sm text-gray-500">Estimated Price</div>
            <div className="text-5xl font-serif mt-2">${price}</div>
            <p className="text-gray-600 mt-4">Includes selected size and extras. Final price confirmed after design consultation.</p>
            <button className="mt-6 w-full py-3 rounded-full bg-black text-white">Request Order</button>
          </div>
        </div>
      </div>

      {/* Sticky CTA */}
      <a href="#" className="fixed bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-black text-white shadow-xl">Start Your Royal Order</a>
    </div>
  )
}
