import { useStateValue } from "@/context";
import React from "react";
import { toast } from "react-toastify";
import { FaRegHeart, FaHeart  } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Products = ({ data, title }) => {
  const [ {wishlist}, dispatch ] = useStateValue()

  // console.log( [15,30,20].some( i => i < 20 ) ); // ||
  // console.log( [15,30,20].every( i => i < 40 ) ); // &&

  let items = data?.map((product) => (
    <div className="border p-3" key={product.id}>
      <div className="w-full h-60 bg-gray-200">
        <img className="w-full h-full object-contain" src={product.images[0]} alt="Photo" />
      </div>
      <p>{product.title}</p>
      <strong>{product.price} USD</strong>
      <br />
      <button onClick={()=> {
        dispatch({type:"TOGGLE_WISHLIST", payload: product})
        toast.success("Mahsulot qo'shildi", {position: "bottom-right"})
      }} className=" p-1">
        {
          wishlist?.some(item => item.id === product.id) ?
          <FaHeart className="text-red-500"/>
          :
          <FaRegHeart/>
        }
        </button>
        <button onClick={()=> dispatch({type: "INC_CART", payload:product })} className="p-1">
          <AiOutlineShoppingCart/>
        </button>
    </div>
  ));
  return (
    <div className="container mx-auto">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <div className="grid grid-cols-4 gap-2">{items}</div>
    </div>
  );
};

export default Products;
