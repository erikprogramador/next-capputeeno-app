'use client';
import { ProductType } from '@/Types/Product';
import Popup from '../Popup';
import React, { useState } from 'react';

export default function AddToCartButton({ product }: { product: ProductType }) {
  const [isOpen, setIsOpen] = useState(false);
  function addToCart(evt: React.MouseEvent) {
    evt.preventDefault();
    setIsOpen(true);
  }
  return (
    <>
      <button
        onClick={addToCart}
        className="bg-indigo-600 text-white flex items-center justify-center w-full p-3 space-x-4 uppercase rounded-lg"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 7V5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V7"
            stroke="#F5F5FA"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 7H4C3.44772 7 3 7.44772 3 8V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V8C21 7.44772 20.5523 7 20 7Z"
            stroke="#F5F5FA"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11"
            stroke="#F5F5FA"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span>Adicionar ao carrinho</span>
      </button>
      <Popup
        title="Product added"
        isOpen={isOpen}
        onConfirm={() => setIsOpen(false)}
        confirmationText="Ok!"
      >
        The <strong className="text-indigo-600">{product.name}</strong> was
        added to your cart.
      </Popup>
    </>
  );
}
