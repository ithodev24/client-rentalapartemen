"use client";

import { use } from "react";
import { Units } from "../../../data/units";
import Footer from "../../components/Footer";
import BackButton from "../../components/BackButton";

export default function DetailUnit({ params }) {
  const { id } = use(params);
  const unit = Units.find((u) => u.id === parseInt(id));

  if (!unit) return <div className="p-10 text-center">Unit tidak ditemukan</div>;

  return (
    <div className="w-full font-sans bg-white">
      {/* Header */}
      <div
        className="relative w-full h-28 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/RD-topdetailunit.png)' }}
      >
        <BackButton />
      </div>

      {/* Section Atas */}
      <div className="flex flex-col md:flex-row px-6 sm:px-10 py-10 gap-10 items-end">
        {/* Gambar & Galeri */}
        <div className="flex flex-row gap-4 w-full md:w-1/2 items-start">
          <img
  src={unit.image}
  alt={unit.name}
  className="w-[320px] h-[300px] sm:w-[480px] sm:h-[360px] object-cover rounded-xl"
/>
          <div className="flex flex-col gap-2 w-24">
            {unit.gallery?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumbnail-${idx}`}
                className="w-full h-16 object-cover rounded-lg border"
              />
            ))}
          </div>
        </div>

        {/* Informasi Unit */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h2 className="text-2xl font-bold">{unit.name}</h2>

          <div className="text-sm">
            <p className="font-semibold mb-1">Fasilitas</p>
            <div className="flex gap-10">
              <div>
                <p className="font-semibold">Indoor:</p>
                <ul className="list-disc ml-5">
                  {unit.facilities.indoor.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold">Outdoor:</p>
                <ul className="list-disc ml-5">
                  {unit.facilities.outdoor.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Info Lokasi & Status */}
          <div className="flex gap-2 flex-wrap text-sm">
            <span className="bg-gray-100 px-4 py-1 rounded-full">{unit.daerah}</span>
            <span className="bg-gray-100 px-4 py-1 rounded-full">{unit.maxCapacity}</span>
            <span className="bg-gray-100 px-4 py-1 rounded-full">{unit.status}</span>
          </div>

          {/* Tombol Sewa */}
          <div className="pt-2">
            <a
              href="https://wa.me/6285829764860"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 w-full rounded-full shadow">
                Sewa Sekarang
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Daftar Harga */}
      <div className="relative bg-[#EECE21] px-6 sm:px-10 pt-8 pb-10 text-black">
        {/* Label di Atas */}
        <div className="absolute top-0 left-[35%] transform -translate-x-[45%] -translate-y-1/2">
          <div className="bg-white rounded-full px-12 py-6 text-center text-lg font-semibold">
            Daftar Harga
          </div>
        </div>

        {/* Tabel Harga */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {/* Weekday */}
          <div className="rounded-xl p-6">
            <h4 className="text-start font-semibold text-lg mb-4">Weekday</h4>
            <table className="w-full text-sm rounded-md overflow-hidden">
              <thead className="bg-gray-50">
                <tr className="text-gray-700 border-b border-gray-200">
                  <th className="py-2 px-4 text-center">Lama Penyewaan</th>
                  <th className="py-2 px-4 text-center">Harga</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(unit.prices.weekday).map(([durasi, harga], idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="py-2 px-4 text-center">{durasi}</td>
                    <td className="py-2 px-4 text-center">{harga}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Weekend */}
          <div className="rounded-xl p-6">
            <h4 className="text-start font-semibold text-lg mb-4">Weekend</h4>
            <table className="w-full text-sm rounded-md overflow-hidden">
              <thead className="bg-gray-50">
                <tr className="text-gray-700 border-b border-gray-200">
                  <th className="py-2 px-4 text-center">Lama Penyewaan</th>
                  <th className="py-2 px-4 text-center">Harga</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(unit.prices.weekend).map(([durasi, harga], idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="py-2 px-4 text-center">{durasi}</td>
                    <td className="py-2 px-4 text-center">{harga}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
