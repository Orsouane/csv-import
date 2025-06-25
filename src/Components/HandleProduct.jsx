import React, { useEffect, useRef, useState } from 'react';
import Papa from 'papaparse';
import Tabella from './Tabella';
function HandleProduct() {
     const [data, setData] = useState([]);
     const [toggleData, setToggleData] = useState(false)
     let RefData = useRef([])

     //! Recuperare tutti i prodotti
     useEffect(() => {
          async function getProduct() {
               const response = await fetch("/Product.csv");
               console.log("response : ", response)
               const text = await response.text();
               console.log("text", text)
               const parsed = Papa.parse(text, { header: true });
               setData(parsed.data);
               RefData.current = parsed.data
               console.log("RefData", RefData)
               console.log(parsed.data);
          }
          getProduct();
     }, []);


     //!Delete
     const handleDelete = (e) => {
          e.preventDefault();
          const toggle = !toggleData;
          setToggleData(toggle);
          setData(toggle ? data.filter(el => el.price !== "") : RefData.current);
     };
     return (
          <div className='flex flex-col mt-5'>
               <h1 className=' w-fit p-1 m-auto font-extrabold text-4xl mb-10'>Product List </h1>
               <button className='border w-fit m-auto font-extralight p-1.5 rounded-2xl
                     cursor-pointer shadow-2xl hover:bg-gradient-to-r from-red-800 via-red-700 to-red-600  transition-colors duration-200 '
                    onClick={handleDelete}> Show/Hide Products with no price
                </button>
               <Tabella data={data} />

          </div>

     );
}

export default HandleProduct;

