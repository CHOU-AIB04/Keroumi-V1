import {React,useEffect} from 'react'
import Data from '../Product-Data/Data';
import protein_pic from "../Store-part-pic/protein-product.jpg"
import debardeur_pic from "../Store-part-pic/debardeeur-part.jpg"
import { useState } from 'react';
import { useContext } from 'react';
import { shareProductDetails } from '../../../Contexts/ProductDetails';
import { useNavigate } from 'react-router-dom';
const StorePage = ({onload}) => {
  let navigate = useNavigate()
  let {setselecteditem} = useContext(shareProductDetails)
  let [system,setsystem] = useState(1)
  let [filter,setfilter] = useState(Data)
    useEffect(() => {
        const fetchData = async () => {
          onload && onload();
        };
        fetchData();
    }, []);
  let protein_count = null
  let debardeur_count = null
  let protein_product = Data.filter(function(e){
    if (e.protein) {
      protein_count++
      return e
    }
  })
  let debardeur_product = Data.filter(function(e){
    if(!e.protein){
      debardeur_count++
      return e
    }
  })
  function shareindex(id){
    setselecteditem(id)
    navigate("/Keroumi-V1/Product-details")
  }
  let product = filter.map(function(e){
    return(
      <nav id={e.id} key={e.id} className="group cursor-pointer transition-all duration-500 hover:scale-95 product_color flex flex-col items-center pt-4 gap-3 rounded-md w-[330px] h-[470px]" onClick={()=>shareindex(e.id)}>
        <div className='w-[250px] flex-col group-hover:opacity-55 transition-all duration-500 bg-gray-400 h-[250px] rounded-md flex justify-center items-center relative'>
          <img src={e.pic} className="rounded-md w-4/5 h-4/5" alt="product" />
          {
            e.fake_price ? <p className='bg-orange-500 absolute top-0 right-0 w-14 h-14 rounded-full flex justify-center items-center text-white text-sm'>Promo!</p> : <></>
          }
        </div>
        <h1 className='text-white font-bold uppercase text-center w-[90%] transition-colors duration-500 cursor-pointer hover:text-orange-500'>{e.tittle}</h1>
        <div className='flex gap-1 items-center'>
          <i className="bi bi-star-fill text-blue-400"></i>
          <i className="bi bi-star-fill text-blue-400"></i>
          <i className="bi bi-star-fill text-blue-400"></i>
          <i className="bi bi-star-fill text-blue-400"></i>
          <i className="bi bi-star-fill text-blue-400"></i>
        </div>
        <div className='flex gap-4 items-center'>
          <p className='text-zinc-500 test-sm'>{e.price} MAD</p>
          {e.fake_price ? <p className='text-zinc-500 line-through test-sm'>{e.fake_price} MAD</p> : <></>}
        </div>
        {
          e.available ? <button className='text-white font-bold w-[150px] h-10 rounded-xl bg-orange-500 transition-all duration-500 hover:scale-105 hover:bg-white sh hover:text-orange-500'>Ajouter au panier</button> : <button className='text-white font-bold w-[150px] h-10 rounded-xl bg-orange-500 transition-all sh duration-500 hover:scale-105 hover:bg-white hover:text-orange-500'>lire la suite</button>
        }
      </nav>
    )
  })
  const Proteinproduct = ()=>{
      setfilter(protein_product)
  
  }
  const Debardeurproduct = ()=>{
    setfilter(debardeur_product)
  }

  function Grid_System(id){
    setsystem(id)
  }
  function List_System(id){
    setsystem(id)
  }
  return (
    <>
    <article className='w-full h-auto gap-10 pt-24 flex flex-col storecolor relative top-[422px]'>
      <section className=' h-28 flex items-center justify-center'>
       <nav className='w-[90%] flex items-center flex-col md:flex-row justify-between bg-zinc-800 rounded-md h-full pl-3 pr-3 pb-2'>
        <div className='hidden md:flex gap-5 '>
            <i className={`bi bi-grid-fill ${system === 1 ? "text-orange-500" : "text-slate-200"} text-[27px] transition-colors duration-500 hover:text-orange-500 cursor-pointer`} onClick={()=>Grid_System(1)}></i>
            <i className={`bi bi-list-ul ${system === 2 ? "text-orange-500" : "text-slate-200"} text-[27px] transition-colors duration-500 hover:text-orange-500 cursor-pointer`} onClick={()=>List_System(2)}></i>
          </div>
          <p className='text-zinc-300 text-xl'>{Data.length} résultats affichés</p>
          <select name="" id="" className='h-10 rounded-md storecolor pl-3 text-zinc-200'>
            <option value="Tri par popularité">Tri par popularité</option>
            <option value="Tri par notes moyennes">Tri par notes moyennes</option>
            <option value="Tri par plus récent au plus ancien">Tri par plus récent au plus ancien</option>
            <option value="Tri par tarif croissant">Tri par tarif croissant</option>
            <option value="Tri par tarif decroissant">Tri par tarif decroissant</option>
          </select>
       </nav>
      </section>
      <section className=' h-[90%] flex justify-center items-center'>
          <nav className='w-[90%]  h-full rounded-md flex flex-col gap-16'>
            <div className='w-full auto  grid-cols-1 small_tablet:grid-cols-2 grid place-items-center gap'>
                  <div className='h-96 product_color w-[350px] flex flex-col items-center justify-center gap-5 border-2 border-zinc-500 rounded-md cursor-pointer' onClick={Proteinproduct}>
                    <img src={protein_pic} alt="protein" className='rounded-md'/>
                    <h1 className='font-bold text-white '>Proteines & Produits ({protein_count})</h1>
                  </div>
                  <div className='h-96 product_color w-[350px] flex flex-col items-center justify-center gap-5 border-2 border-zinc-500 rounded-md cursor-pointer' onClick={Debardeurproduct}>
                    <img src={debardeur_pic} alt="protein" className='rounded-md'/>
                    <h1 className='font-bold text-white '>T-shirt & Vêtements ({debardeur_count})</h1>
                  </div>
            </div>
            <section className='w-full grid grid-cols-1 product:grid-cols-2 store:grid-cols-3 gap-2 place-items-center pb-4'>
                {product}
            </section>
          </nav>
      </section>
    </article>
    </>
  )
}

export default StorePage