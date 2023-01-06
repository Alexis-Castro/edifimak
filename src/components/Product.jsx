import { useState } from "react";
import Modal from 'react-modal';
import { currencyFormatter } from "../utils/moneda";

Modal.setAppElement('#products');

export const Product = ({ images, category, title, price }) => {

   const [modalIsOpen, setIsOpen] = useState(false);

   return (
      <>
         <article
            className="flex flex-col w-44 sm:w-60 md:w-80 xl:w-80 mx-auto rounded-lg overflow-hidden group transition"
         >
            <a
               // href="#"
               onClick={() => setIsOpen(true)}
               className="relative block bg-[#1E2A4D] rounded-lg cursor-pointer"
            >
               <figure
                  className="overflow-hidden aspect-w-3 aspect-h-2 w-full xl:aspect-w-8 xl:aspect-h-6"
               >
                  <img
                     src={images[0]}
                     alt="Usuario"
                     className="h-full w-full object-cover object-center group-hover:scale-110 transition duration-300"
                  />
               </figure>
               <div className="p-4 space-y-4">
                  <div className="flex items-center justify-between text-center font-medium">
                     <div className="leading-tight text-left">
                        <h5 className="uppercase text-xs text-[#019939] font-semibold">
                           {category}
                        </h5>
                        <h3 className="text-gray-50 leading-tight text-base mb-4">
                           {title}
                        </h3>
                        <h4
                           className="text-white text-base font-extrabold rounded-lg self-end"
                        >
                           {currencyFormatter({ currency: "PEN", value: price })}
                        </h4>
                     </div>
                  </div>
               </div>
            </a>
            {/* <div className="flex flex-col px-4 pb-4 bg-[#1E2A4D]">
               <button
                  className="py-1.5 px-3 md:px-7 rounded-md shadow bg-[#019939] text-white font-medium hover:bg-[#00762b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-300 focus:ring-offset-gray-900 whitespace-nowrap text-center hover:scale-105 transition"
               >
                  Comprar
               </button>

            </div> */}
         </article>

         <Modal
            isOpen={modalIsOpen}
            closeTimeoutMS={250}
            // onAfterOpen={afterOpenModal}
            onRequestClose={() => setIsOpen(false)}
            overlayClassName={"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity flex items-center justify-center z-40"}
            className="relative w-full h-full sm:max-w-lg md:max-w-2xl lg:max-w-5xl xl:max-w-6xl md:h-auto flex items-center z-50"
            contentLabel="Modal info product"
         >
            {/* <!-- Modal content --> */}
            <div className="relative rounded-lg shadow bg-gray-800">
               {/* <!-- Modal header --> */}

               <button type="button" onClick={() => setIsOpen(false)} className=" absolute top-3 right-2.5 text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white" data-modal-toggle="defaultModal" >
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  <span className="sr-only">Close modal</span>
               </button>
               {/* <!-- Modal body --> */}
               <div className="lg:flex gap-x-4 items-center justify-center p-5">
                  <div className="block basis-0 flex-shrink flex-grow p-3">
                     <figure className="w-full">
                        <img
                           src={images[0]}
                           alt="Producto image"
                           className="h-full w-full object-cover object-center transition duration-300 ring-8 ring-gray-700 ring-opacity-90 rounded-md shadow-xl"
                        />
                     </figure>
                     
                  </div>
                  <div className="block basis-0 flex-shrink flex-grow p-3">
                     <h2 className="font-bold text-xl leading-tight text-[#019939] mb-1">{title}</h2>
                     <p className="text-white text-base font-bold mb-5">
                        {currencyFormatter({ currency: "PEN", value: price })}
                     </p>
                     <p className="text-base leading-relaxed text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, iusto! Nisi dignissimos quo, itaque fugiat culpa nam ab earum voluptatibus enim aliquam odio repellendus, consequatur, eius maiores blanditiis ullam in.
                     </p>
                     <div className="flex items-center py-6 space-x-2 border-gray-600">
                        <button data-modal-toggle="defaultModal" type="button" className="text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#019939] hover:bg-[#018c34] focus:ring-[#008430]">Comprar</button>
                        <button data-modal-toggle="defaultModal" onClick={() => setIsOpen(false)} type="button" className=" focus:outline-none rounded-lg border text-sm font-medium px-5 py-2.5 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600">Volver</button>
                     </div>

                  </div>
               </div>
            </div>

         </Modal>
      </>


   )
}

// export interface Props {
//    title: string;
//    category: string;
//    images: string[];
//    price: number;
// }

// const { images, category, title, price } = Astro.props;

