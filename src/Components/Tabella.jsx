import React, { useEffect, useState } from 'react'

function Tabella({ data }) {

     const [offset, setOffset] = useState(8)
     const [prodotti, setProdotti] = useState(data.slice(0, offset))

//* Aggiorno la lista dei prodotti ogni volta che cambiano le dipendenze     
 useEffect(() => { setProdotti(data.slice(0, offset)) }, [offset, data])

//!LoadMore  
 const Add = () => {
          if (offset <= data.length) {
               const somm = offset + 4
               setOffset(somm)
          }
     }
//! LoadLess
     const less = () => {
          if (offset > 8) {
               const som = offset - 4;
               setOffset(som);
          }
     }


     return (
          <> 
           <div className='flex gap-4 m-auto border-t-0 border w-92 justify-between p-2 rounded-2xl '>
               {/* LoadMore */}
                    <button onClick={Add} className='font-extralight p-1.5 rounded-2xl border cursor-pointer hover:bg-gradient-to-r from-green-800 via-green-700 to-green-600  transition-colors duration-200 '>Load-More <span className='font-extrabold animate-bounce duration-150 inline-block '> &darr; </span>  </button>
                    {/* LoadLess */}
                    <button onClick={less} className='font-extralight p-1.5 rounded-2xl border cursor-pointer hover:bg-gradient-to-r from-yellow-800 via-yellow-700 to-yellow-600  transition-colors duration-200 '>Load-Less <span className='font-extrabold animate-bounce duration-150 inline-block'>&uarr; </span>  </button>
           </div>
              
               <table className='border w-fit m-auto text-stone-900 shadow-2xl  my-10 '>
                              <thead className='border'>
                                   <tr className=''>
                                        <th className='p-1.5 border'>barcode</th>
                                        <th className='p-1.5 border'>brand</th>
                                        <th className='p-1.5 border'>category</th>
                                        <th className='p-1.5 border'>name</th>
                                        <th className='p-1.5 border'>price</th>
                                        <th className='p-1.5 border'>quantity</th>
                                        <th className='p-1.5 border'>weight</th>
                                   </tr>
                              </thead>
                              {data && prodotti.map((el, i) => {
                                   return <tbody key={i} className='border '>
                                        <tr className=''>
                                             <td className='border w-fit p-1.5 h-8' > {el.barcode} </td>
                                             <td className='border w-fit p-1.5 h-8' > {el.brand} </td>
                                             <td className='border w-fit p-1.5 h-8' > {el.category} </td>
                                             <td className='border w-fit p-1.5 h-8' > {el.name} </td>
                                             <td className='border w-fit p-1.5 h-8' > {el.price} €</td>
                                             <td className='border w-fit p-1.5 h-8' > {el.quantity} </td>
                                             <td className='border w-fit p-1.5 h-8' > {el.weight} </td>
                                        </tr>

                                   </tbody>

                              })}
                </table>


          </>


     )
}

export default Tabella
