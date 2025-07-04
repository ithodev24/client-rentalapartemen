"use client";
import React, { useState, useEffect } from "react";

const locations = [
  {
    kota: "Bandung",
    embedUrl:  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.826265905271!2d107.60074937588963!3d-6.910238967589021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6201f5c09c1%3A0x1a2e3e63c527336b!2sRentalday%20Cab%202!5e0!3m2!1sid!2sid!4v1687582111111!5m2!1sid!2sid",
    alamat: "Jalan PSM Dalam, Jl PSM No.63, RW15, Kebon Jayanti, Kota Bandung, Jawa Barat, Indonesia",
  },
  {
    kota: "Jakarta",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.486483080705!2d106.8232353!3d-6.1998666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d457e951dd%3A0x1eae56c2de5bca62!2sJl.%20Paseban%20Raya%20No.63%2C%20RT.1%2FRW.7%2C%20Paseban%2C%20Kec.%20Senen%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010410!5e0!3m2!1sid!2sid!4v1687582134567!5m2!1sid!2sid",
    alamat: "Jl. Paseban Raya No.63, RT.1/RW.7, Paseban, Kec. Senen, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10440, Indonesia",
  },
  {
    kota: "Surabaya",
    embedUrl: "https://www.google.com/maps/embed?pb=...",
    alamat: "Jl. Jimbar Ngawinan I No.31, Jambur Wonosari, Kec. Wonosobo, Surabaya, Jawa Timur 60237, Indonesia",
  },
  {
    kota: "Bali",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.3491861587963!2d115.20369237591102!3d-8.642910187465966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24719e1165f97%3A0x7f055c3e50f62f6c!2sBali%20Rider!5e0!3m2!1sid!2sid!4v1687582123456!5m2!1sid!2sid",
    alamat: "Jl. Raya Pupuan, Dauh Puri, Kec. Denpasar Barat, Kota Denpasar, Bali, Indonesia",
  },
  {
    kota: "Malang",
    embedUrl: "https://www.google.com/maps/embed?pb=...",
    alamat: "Jl. Ijen No.50, Klojen...",
  },
  {
    kota: "Purwokerto",
    embedUrl: "https://www.google.com/maps/embed?pb=...",
    alamat: "Jl. Jenderal Sudirman No.100...",
  },
];

export default function MapsKontak() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  // Deteksi ukuran layar
  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1); // HP
      } else {
        setItemsPerView(4); // Tablet/Desktop
      }
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const next = () => {
    if (startIndex + itemsPerView < locations.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  
  const visible = locations.slice(startIndex, startIndex + itemsPerView);

  return (
    <div className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`grid gap-8 transition-all duration-300 ${
            itemsPerView === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
          }`}
        >
          {visible.map((loc, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow overflow-hidden">
              <div className="relative w-full h-52 sm:h-60">
                <iframe
                  src={loc.embedUrl}
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-full border-none"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute top-2 bg-yellow-300 text-black font-bold px-4 py-1 rounded-r-full text-sm shadow-md">
                  {loc.kota}
                </div>
              </div>
              <div className="p-4 text-sm text-gray-800">{loc.alamat}</div>
            </div>
          ))}
        </div>

        {/* Tombol Navigasi */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <div className="bg-yellow-300 rounded-full px-5 py-2 shadow-md flex gap-4">
            <button
              onClick={prev}
              disabled={startIndex === 0}
              className={`text-blue-800 text-3xl font-bold ${
                startIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
              }`}
            >
              &lt;
            </button>
            <button
              onClick={next}
              disabled={startIndex + itemsPerView >= locations.length}
              className={`text-blue-800 text-3xl font-bold ${
                startIndex + itemsPerView >= locations.length
                  ? "opacity-40 cursor-not-allowed"
                  : ""
              }`}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}