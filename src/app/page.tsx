"use client";

import pcs from '@/data/pcs.json';
import Link from 'next/link';
import { useState } from 'react';
import Header from '@/app/Header';
import Footer from '@/app/Footer';
import Image from 'next/image';

export default function HomePage() {
  const [wishlist, setWishlist] = useState<string[]>([]);

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

  return (
    <div className="bg-gradient-to-br from-purple-100 via-blue-50 to-teal-100 min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-grow px-4 py-10 sm:px-6 lg:px-12">
        <h1 className="text-5xl font-extrabold mb-4 text-center text-fuchsia-700 tracking-tight drop-shadow-md">
          Custom PC Builds
        </h1>

        <p className="text-center text-gray-700 mb-10 text-lg">
          Wishlist Items:{" "}
          <span className="font-bold text-fuchsia-600">{wishlist.length}</span>
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {pcs.map((pc) => {
            const discountPercentage = calculateDiscountPercentage(pc.price, pc.offerPrice);

            return (
              <div
                key={pc.id}
                className="bg-white shadow-xl border border-purple-100 rounded-3xl p-6 hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 ease-in-out"
              >
               <Image
  src={pc.images[0]}
  alt={pc.name}
  width={800} // Choose a realistic width
  height={240} // Equivalent to h-60 (60 * 4 = 240px)
  className="w-full h-65 object-cover rounded-2xl mb-4 shadow-sm"
  style={{ objectPosition: 'center' }}
/>


                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{pc.name}</h2>

                <div className="text-gray-700 mb-4 flex items-center space-x-2">
                  <span className="text-lg font-bold text-violet-700">{pc.offerPrice}</span>
                  <span className="text-sm text-gray-400 line-through">{pc.price}</span>
                  <span className="ml-auto text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                    {discountPercentage}% OFF
                  </span>
                </div>

                <div className="flex flex-row sm:flex-row sm:justify-between gap-3 mt-4">
                  <Link href={`/pc/${pc.id}`}>
                    <button className="bg-gradient-to-r from-pink-500 to-violet-600 text-white px-5 py-2 rounded-xl shadow-lg hover:shadow-2xl transition-transform hover:scale-105 duration-200">
                      View Details
                    </button>
                  </Link>
                  <button
                    onClick={() => toggleWishlist(pc.id)}
                    className={`px-5 py-2 rounded-xl shadow-md transition-transform hover:scale-105 duration-200 ${
                      wishlist.includes(pc.id)
                        ? 'bg-pink-500 hover:bg-pink-600 text-white'
                        : 'bg-yellow-300 hover:bg-yellow-400 text-gray-800'
                    }`}
                  >
                    {wishlist.includes(pc.id) ? '🤍 In Wishlist' : '❤️ Add to Wishlist'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
