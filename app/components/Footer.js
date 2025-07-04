"use client";

export default function Footer() {
  return (
    <footer className="relative bg-white text-black overflow-hidden">
      {/* Ornamen bunga kiri atas */}
      <img
        src="/images/footerkanan.png"
        alt="Flower Top Left"
        className="absolute top-[-8px] left-0 w-140 z-0"
      />

      {/* Ornamen bunga kanan bawah */}
      <img
        src="/images/footerkiri.png"
        alt="Flower Bottom Right"
        className="absolute bottom-[-10px] right-0 w-100 mb-10 z-0"
      />

      {/* Konten utama */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Kolom 1: Media Sosial & Bank */}
        <div className="flex flex-col items-start gap-6">
          {/* Ikon Media Sosial */}
          <div className="flex space-x-4">
            <a href="#"><img src="/images/icon_fb.png" alt="Facebook" className="w-7 h-7" /></a>
            <a href="#"><img src="/images/icon_tt.png" alt="TikTok" className="w-8 h-8" /></a>
            <a href="#"><img src="/images/icon_wa.png" alt="WhatsApp" className="w-7 h-7" /></a>
          </div>

          {/* Logo Bank */}
          {/* Logo Bank */}
        <div className="-ml-10 md:-ml-20 self-start bg-yellow-300 rounded-full px-6 py-2 shadow-md flex items-center space-x-6">
            <img src="/images/pm_bni.png" alt="BNI" className="h-8" />
            <img src="/images/pm_bca.png" alt="BCA" className="h-8" />
            <img src="/images/pm_mandiri.png" alt="Mandiri" className="h-8" />
            <img src="/images/pm_qris.png" alt="QRIS" className="h-8" />
          </div>
        </div>

        {/* Kolom 2: Halaman + Kontak */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          {/* Halaman */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Halaman</h4>
            <ul className="space-y-1">
              <li><a href="/" className="hover:text-yellow-500">Beranda</a></li>
              <li><a href="/DaftarUnit" className="hover:text-yellow-500">Daftar Motor</a></li>
              <li><a href="/Testimoni" className="hover:text-yellow-500">Testimoni</a></li>
              <li><a href="/Kontak" className="hover:text-yellow-500">Kontak</a></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Kontak Kami</h4>
            <p className="mb-1">
              <a href="mailto:ptdahliglobalindo@gmail.com" className="hover:text-yellow-500">
                ptdahliglobalindo@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+6285724785060" className="hover:text-yellow-500">
                (+62) 857-2478-5060
              </a>
            </p>
            <p className="text-xs text-gray-600">Bandung</p>
            <p>
              <a href="tel:+628xxxxxxxxx" className="hover:text-yellow-500">
                (+62) 8...-...-....
              </a>
            </p>
            <p className="text-xs text-gray-600">Bali</p>
          </div>
        </div>

        {/* Kolom 3: Alamat */}
        <div className="text-sm">
          <h4 className="font-semibold text-gray-800 mb-2">Alamat</h4>
          <p>
            <a
              href="https://www.google.com/maps?q=Jl.+Kebon+Kawung+No.49,+Pasir+Kaliki,+Cicendo,+Bandung,+Jawa+Barat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500"
            >
              Jl. Kebon Kawung No.49, Pasir Kaliki,
              <br />
              Kec. Cicendo, Kota Bandung, Jawa Barat 40171, Indonesia
            </a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-yellow-400 py-2 text-center text-xs text-black">
        ©Riyadatunnisa. Hak Cipta Dilindungi oleh undang-undang. |{" "}
        <a href="#" className="underline">Powered by GoEnt</a>
      </div>
    </footer>
  );
}
