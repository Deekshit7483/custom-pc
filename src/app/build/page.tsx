"use client";

import { useState } from "react";
import Header from "@/app/Header";
import Footer from "@/app/Footer";

export default function BuildYourPC() {
  const [formData, setFormData] = useState<PCBuildForm>({
    cpu: "",
    gpu: "",
    ram: "",
    storage: "",
    motherboard: "",
    psu: "",
    case: "",
  });  

  type PCBuildForm = {
    cpu: string;
    gpu: string;
    ram: string;
    storage: string;
    motherboard: string;
    psu: string;
    case: string;
  };  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Built PC Config:", formData);
    alert("✅ Your custom PC build has been submitted!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-blue-50 text-gray-800">
      <Header />

      <main className="flex-grow px-4 py-10 sm:p-10 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-2xl space-y-8 transition-all"
        >
          <h1 className="text-4xl font-extrabold text-center text-blue-700 tracking-tight">
            🛠️ Build Your Own PC
          </h1>
          <p className="text-center text-gray-500 text-sm">
            Customize your dream PC by entering each component below.
          </p>

          {/* Form Fields */}
          {["cpu", "gpu", "ram", "storage", "motherboard", "psu", "case"].map((field) => (
            <div key={field}>
              <label className="block mb-2 text-sm font-semibold text-gray-700 capitalize tracking-wide">
                {field}
              </label>
              <input
                type="text"
                name={field}
                value={formData[field as keyof PCBuildForm]}
                onChange={handleChange}
                placeholder={`Enter ${field}`}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transform transition duration-200"
          >
            🚀 Submit Build
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}
