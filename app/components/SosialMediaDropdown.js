"use client";

import { Link } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const SosialMediaDropdown = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  return (
    <div className="flex flex-col items-center md:items-start gap-4 w-full">
      {/* WhatsApp */}
      <div className="w-full max-w-xs bg-white rounded-xl shadow overflow-hidden">
        <button
          onClick={() => toggleDropdown("whatsapp")}
          className="flex items-center justify-between w-full px-4 py-3 text-green-700 font-semibold"
        >
          <div className="flex items-center gap-2">
            <Image
              src="/images/logos_whatsapp-icon.png"
              className="h-5"
              alt="Logo WhatsApp"
            />
            WhatsApp
          </div>
          <span
            className={`transition-transform ${
              activeDropdown === "whatsapp" ? "rotate-180" : ""
            }`}
          >
            &#9650;
          </span>
        </button>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            activeDropdown === "whatsapp" ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="px-4 pb-4 pt-2 text-black space-y-4 text-sm">
            <div className="px-4 pb-4 pt-2 text-black space-y-4 text-sm">
              {/* Bandung */}
              <div>
                <div className="font-semibold">Bekasi</div>
                <Link
                  href="https://wa.me/6281280007220"
                  target="_blank"
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded-full mt-1 text-sm"
                >
                  (+62) 812-8000-7220
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TikTok */}
      <div className="w-full max-w-xs bg-white rounded-xl shadow overflow-hidden">
        <button
          onClick={() => toggleDropdown("tiktok")}
          className="flex items-center justify-between w-full px-4 py-3 text-black font-semibold"
        >
          <div className="flex items-center gap-2">
            <Image
              src="/images/logos_tiktok-icon.png"
              className="h-5"
              alt="Logo TikTok"
            />
            TikTok
          </div>
          <span
            className={`transition-transform ${
              activeDropdown === "tiktok" ? "rotate-180" : ""
            }`}
          >
            &#9650;
          </span>
        </button>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            activeDropdown === "tiktok" ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="px-4 pb-4 pt-2 text-black space-y-4 text-sm">
            {[
              // { area: "Bekasi", users: [{ handle: "@rentaldaybandung", link: "https://www.tiktok.com/@rentaldaybandung" }, { handle: "@rentalday.student", link: "https://www.tiktok.com/@rentalday.student" }] },
              {
                area: "Bekasi",
                users: [
                  {
                    handle: "@perfectrooms.id",
                    link: "https://www.tiktok.com/@perfectrooms.id?_t=ZS-8yHjnfp0CCg&_r=1",
                  },
                ],
              },
              // { area: "Purwokerto", users: [{ handle: "@rentalday.pwt", link: "https://www.tiktok.com/@rentalday.pwt" }] },
              // { area: "Malang", users: [{ handle: "@rentaldaymlg", link: "https://www.tiktok.com/@rentaldaymlg" }] },
            ].map((region, index) => (
              <div key={index}>
                {index > 0 && <hr className="border-t border-gray-300 my-2" />}
                <div className="font-semibold mb-1">{region.area}</div>
                <div className="flex flex-wrap gap-2">
                  {region.users.map((user, idx) => (
                    <Link
                      key={idx}
                      href={user.link}
                      target="_blank"
                      className="bg-black text-white px-4 py-1 rounded-full text-xs hover:underline"
                    >
                      {user.handle}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Instagram */}
      <div className="w-full max-w-xs bg-white rounded-xl shadow overflow-hidden">
        <button
          onClick={() => toggleDropdown("instagram")}
          className="flex items-center justify-between w-full px-4 py-3 text-pink-500 font-semibold"
        >
          <div className="flex items-center gap-2">
            <Image
              src="/images/logos_instagram-icon.png"
              className="h-5"
              alt="Logo Instagram"
            />
            Instagram
          </div>
          <span
            className={`transition-transform ${
              activeDropdown === "instagram" ? "rotate-180" : ""
            }`}
          >
            &#9650;
          </span>
        </button>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            activeDropdown === "instagram" ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="px-4 pb-4 pt-2 text-black space-y-4 text-sm">
            {[
              // { area: "Bandung", users: [
              //   { handle: "@rentalday.student", link: "https://instagram.com/rentalday.student" },
              //   { handle: "@rentalday.molis", link: "https://instagram.com/rentalday.molis" },
              //   { handle: "@bandungrider.id", link: "https://instagram.com/bandungrider.id" }
              // ]},
              // { area: "Bali", users: [{ handle: "@balirider.id", link: "https://instagram.com/balirider.id" }] },
              // { area: "Purwokerto", users: [{ handle: "@rentalday.pwt", link: "https://instagram.com/rentalday.pwt" }] },
              {
                area: "Bekasi",
                users: [
                  {
                    handle: "@perfectrooms.id",
                    link: "https://www.instagram.com/perfectrooms.id?igsh=MjlrZHVneTVkNnR5",
                  },
                ],
              },
            ].map((region, index) => (
              <div key={index}>
                {index > 0 && <hr className="border-t border-gray-300 my-2" />}
                <div className="font-semibold mb-1">{region.area}</div>
                <div className="flex flex-wrap gap-2">
                  {region.users.map((user, idx) => (
                    <Link
                      key={idx}
                      href={user.link}
                      target="_blank"
                      className="bg-pink-500 text-white px-4 py-1 rounded-full text-xs hover:underline"
                    >
                      {user.handle}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SosialMediaDropdown;
