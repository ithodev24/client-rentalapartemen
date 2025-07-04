"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardUnit from "../components/CardUnit/CardUnit";
import { Units } from "../../data/units";

export default function DaftarUnit() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({
    harga: "",
    daerah: "",
    kebutuhan: "",
    status: "",
    fasilitas: "",
  });

  // Unique filter values
  const daerahOptions = [...new Set(Units.map((u) => u.daerah))];
  const kebutuhanOptions = [...new Set(Units.map((u) => u.maxCapacity))];
  const statusOptions = [...new Set(Units.map((u) => u.status))];
  const hargaOptions = [
    ...new Set(Units.flatMap((u) => [
      ...Object.values(u.prices.weekday),
      ...Object.values(u.prices.weekend),
    ])),
  ];
  const fasilitasOptions = [
    ...new Set(
      Units.flatMap((u) => [...u.facilities.indoor, ...u.facilities.outdoor])
    ),
  ];

  // Filtering logic
  const filteredUnits = Units.filter((unit) => {
    const matchSearch =
      unit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      unit.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchDaerah = !filters.daerah || unit.daerah === filters.daerah;
    const matchKebutuhan =
      !filters.kebutuhan || unit.maxCapacity === filters.kebutuhan;
    const matchStatus = !filters.status || unit.status === filters.status;
    const matchHarga =
      !filters.harga ||
      Object.values(unit.prices.weekday).includes(filters.harga) ||
      Object.values(unit.prices.weekend).includes(filters.harga);
    const matchFasilitas =
      !filters.fasilitas ||
      unit.facilities.indoor.includes(filters.fasilitas) ||
      unit.facilities.outdoor.includes(filters.fasilitas);

    return (
      matchSearch &&
      matchDaerah &&
      matchKebutuhan &&
      matchStatus &&
      matchHarga &&
      matchFasilitas
    );
  });

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

 {/* Header & Search */}
      <div
        className="relative bg-cover bg-center h-48 sm:h-56 md:h-64 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: "url('/images/bg_daftarunit.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="relative z-10 flex flex-col sm:flex-row items-center w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl gap-2">
          {/* Search Input */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Cari Unit"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-2 pl-4 pr-10 rounded-l-full rounded-r-none outline-none border border-white text-red-800 bg-white placeholder-yellow-600 focus:ring-2 focus:ring-white sm:text-sm md:text-base"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-600">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>

          {/* Filter Button */}
          <button
            className="bg-white text-red-700 px-3 py-2 sm:px-4 sm:py-2 border border-white rounded-full flex items-center justify-center"
            onClick={() => setShowFilter(!showFilter)}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h18M6 8h12M4 12h16M8 16h8M10 20h4" />
            </svg>
          </button>
        </div>

        {/* Filter Section as Overlay */}
        {showFilter && (
          <div className="relative z-20 mt-4 w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-6xl px-2 sm:px-4">
            <div className="absolute inset-0 bg-black opacity-30" />
            <div className="relative z-30 bg-white bg-opacity-90 p-4 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
                {[
                  { key: "daerah", label: "Daerah", options: daerahOptions },
                  { key: "kebutuhan", label: "Kebutuhan", options: kebutuhanOptions },
                  { key: "status", label: "Status", options: statusOptions },
                  { key: "harga", label: "Harga", options: hargaOptions },
                  { key: "fasilitas", label: "Fasilitas", options: fasilitasOptions },
                ].map(({ key, label, options }) => (
                  <select
                    key={key}
                    className="bg-white text-red-700 px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow text-sm sm:text-base focus:outline-none w-full"
                    value={filters[key]}
                    onChange={(e) => setFilters({ ...filters, [key]: e.target.value })}
                  >
                    <option value="">{label}</option>
                    {options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* List Unit Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
          {filteredUnits.map((unit) => (
            <Link href={`/DetailUnit/${unit.id}`} key={unit.id}>
              <CardUnit
                name={unit.name}
                description={unit.description}
                image={unit.image}
                role={unit.maxCapacity}
              />
            </Link>
          ))}
        </div>
        {filteredUnits.length === 0 && (
          <div className="text-center py-10 sm:py-12 text-gray-500 text-sm sm:text-base">Tidak ada unit ditemukan.</div>
        )}
      </div>

      <Footer />
    </div>
  );
}