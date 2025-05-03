"use client";

import pcs from '@/data/pcs.json';
import { useParams } from 'next/navigation';
import ImageScroller from '@/app/ImageScroller';
import { useEffect, useState } from 'react';
import Header from '@/app/Header';
import Footer from '@/app/Footer';

export default function PCDetail() {
  const params = useParams();
  const id = params?.id;
  const [loading, setLoading] = useState(true);
  type PC = {
    id: string;
    name: string;
    cpu: string;
    gpu: string;
    ram: string;
    storage: string;
    price: string;
    offerPrice: string;
    images: string[];
  };
    const [pcData, setPcData] = useState<PC | null>(null);
  
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const pc = pcs.find((p) => p.id === id);
      setPcData(pc ?? null);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [id]);

  const toggleWishlist = (id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculateDiscountPercentage = (price: string, offerPrice: string) => {
    const originalPrice = parseFloat(price.replace(/[^0-9.-]+/g, ""));
    const salePrice = parseFloat(offerPrice.replace(/[^0-9.-]+/g, ""));
    const discount = ((originalPrice - salePrice) / originalPrice) * 100;
    return Math.round(discount);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
        <div className="w-full max-w-xl p-10 bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-3/4 mb-6"></div>
          <div className="h-64 bg-gray-300 rounded mb-6"></div>
          <div className="space-y-4">
            <div className="h-5 bg-gray-300 rounded w-1/2"></div>
            <div className="h-5 bg-gray-300 rounded w-1/3"></div>
            <div className="h-5 bg-gray-300 rounded w-2/3"></div>
            <div className="h-5 bg-gray-300 rounded w-1/2"></div>
            <div className="h-6 bg-gray-400 rounded w-1/4 mt-6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!pcData) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-red-600 text-xl font-semibold">PC Not Found</div>
        </div>
        <Footer />
      </div>
    );
  }

  const pc = pcData;
  const discountPercentage = calculateDiscountPercentage(pc.price, pc.offerPrice);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-100 to-slate-200 text-gray-800">
      <Header />

      <main className="flex-grow p-6 flex items-center justify-center">
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-2xl w-full transition-all duration-300 animate-fade-in">
          <h1 className="text-4xl font-extrabold mb-6 text-gray-900 tracking-tight drop-shadow-sm">
            {pc.name}
          </h1>

          <div className="rounded-xl overflow-hidden mb-6 border border-gray-200 shadow-md">
            <ImageScroller images={pc.images} />
          </div>

          <div className="space-y-3 text-gray-700 text-lg mb-8 font-medium leading-relaxed">
            <p><span className="font-semibold text-gray-600">💻 CPU:</span> {pc.cpu}</p>
            <p><span className="font-semibold text-gray-600">🎮 GPU:</span> {pc.gpu}</p>
            <p><span className="font-semibold text-gray-600">🧠 RAM:</span> {pc.ram}</p>
            <p><span className="font-semibold text-gray-600">💾 Storage:</span> {pc.storage}</p>
          </div>

          <div className="flex items-center gap-3 mb-8">
            <p className="text-2xl font-semibold line-through text-gray-400">{pc.price}</p>
            <p className="text-3xl font-bold text-green-600 drop-shadow-sm">{pc.offerPrice}</p>
            <span className="ml-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
              {discountPercentage}% OFF
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-3 rounded-xl font-semibold shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
               Buy Now
            </button>

            <button
              onClick={() => toggleWishlist(pc.id)}
              className={`w-full py-3 rounded-xl font-semibold shadow-md transition hover:scale-105 duration-300 ${
                wishlist.includes(pc.id)
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
              }`}
            >
              {wishlist.includes(pc.id) ? '🤍 Remove from Wishlist' : '❤️ Add to Wishlist'}
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
