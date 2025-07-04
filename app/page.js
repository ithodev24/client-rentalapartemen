import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="bg-gray-100">
      <Navbar />

     <section className="relative min-h-[600px] flex items-center text-white overflow-hidden">
  {/* Background Image */}
  <img
    src="/images/sewaapartemen_bg.png"
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Gradient Overlay: Hitam -> Kuning Transparan */}
  <div className="absolute inset-0 bg-gradient-to-l from-black via-[#eece21cc]/40 to-transparent" />

  {/* Konten */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-10 py-10 flex justify-end">
    <div className="text-end max-w-xl">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold italic leading-tight text-white drop-shadow">
        Perfect Room
      </h1>
      <p className="mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed text-white drop-shadow">
        Nikmati pengalaman tinggal di apartemen modern <br />
        tanpa beban biaya mahal. Proses sewa mudah, <br />
        cepat, dan aman.
      </p>
      <div className="mt-6 flex justify-end gap-2 flex-wrap">
        <a
          href="/unit"
          className="bg-[#EECE21] text-black px-6 py-2 rounded-l-full shadow hover:bg-yellow-300"
        >
          Lihat Apartemen
        </a>
        <a
          href="/kontak"
          className="bg-[#EECE21] text-black px-6 py-2 rounded-r-full shadow hover:bg-yellow-300"
        >
          Hubungi Kami
        </a>
      </div>
      </div>
      </div>

        <div className="absolute bottom-0 left-0 w-full bg-white text-[#EECE21] py-5 px-4 md:px-10">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              ['icon_pelayanan.png', 'Pelayanan Terbaik'],
              ['icon_keamanan.png', 'Keamanan Terjaga'],
              ['icon_perawatan.png', 'Perawatan Rutin'],
              ['icon_lokasi.png', 'Lokasi Strategis'],
            ].map(([icon, label], i) => (
              <div key={i} className="flex items-center justify-center gap-2">
                <img src={`/images/${icon}`} className="w-10 h-10" />
                <p className="text-sm md:text-base font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Produk Highlight */}
      <section className="bg-[#EECE21] py-10 px-6 md:px-20 text-black">
        <div className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold">Perfect Room</h2>
            <h3 className="text-xl font-semibold mb-3">Sewa Apartemen Bekasi</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Sebagai bagian dari ekosistem layanan PT Dahlia Global Indo, Pixelnesia hadir untuk menjawab kebutuhan masyarakat modern yang menginginkan akses mudah terhadap perangkat teknologi tanpa harus membeli. Pixelnesia menyediakan layanan rental Iphone yang fleksibel, ekonomis, dan terpercaya, cocok untuk berbagai kebutuhan pribadi maupun profesional.
              <br></br><br></br>
              Melalui Pixelnesia, pelanggan dapat menikmati kemudahan dalam menyewa Iphone, mulai dari proses pemesanan yang cepat, pilihan perangkat terbaru yang terawat, hingga dukungan layanan pelanggan yang sigap dan informatif. Komitmen PT Dahlia Global Indo dalam menghadirkan layanan unggulan tercermin dalam setiap aspek Pixelnesia, menjadikannya solusi cerdas untuk gaya hidup digital masa kini.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="/images/bgkolam.png"
              alt="Produk Motor"
              className="w-full max-w-sm mx-auto drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Kenapa Harus Memilih */}
     <section className="bg-white text-black px-6 py-12 md:px-8">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
        Kenapa Harus Memilih <br /> Pixelnesia?
      </h2>
      <div className="flex flex-col gap-4">
        {[
          ['icon-syarat.png', 'Syarat Sewa yang Ringan dan Tidak Ribet'],
          ['icon-kualitas.png', 'Kualitas iPhone Terjamin dan Sudah Legal'],
          ['icon-pembayaran.png', 'Metode Pembayaran Aman dan Profesional'],
        ].map(([icon, text], i) => (
          <div
            key={i}
            className="bg-[#EECE21] text-black p-4 rounded shadow flex items-center gap-4 h-[110px] w-full max-w-[520px]"
          >
            <img src={`/images/${icon}`} className="w-12 h-12 object-contain" />
            <p className="text-lg font-semibold sm:text-xl md:text-2xl leading-snug">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
    <div className="flex flex-col gap-4">
      {[
        ['icon-verif.png', 'Verifikasi Data Cepat dan Mudah'],
        ['icon-terbuka.png', 'Terbuka untuk Semua Kalangan'],
        ['icon-cod.png', 'Layanan Antar Jemput Fleksibel (COD)'],
        ['icon-data.png', 'Data Pribadi Pelanggan Terjamin Aman'],
      ].map(([icon, text], i) => (
        <div
          key={i}
          className="bg-[#EECE21] text-black p-4 rounded shadow flex items-center gap-4 h-[110px] w-full max-w-[520px]"
        >
          <img src={`/images/${icon}`} className="w-12 h-12 object-contain" />
          <p className="text-lg font-semibold sm:text-xl md:text-2xl leading-snug">
            {text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

     {/* Komitmen & Showcase Motor */}
<section
  className="relative bg-cover bg-center py-14 px-4 text-white"
  style={{ backgroundImage: "url('/images/bg_isigaleri.png')" }}
>
  {/* Overlay hitam di background */}
  <div className="absolute inset-0 bg-black/60 z-0" />

  {/* Konten di atas overlay */}
  <div className="relative z-10 max-w-6xl mx-auto text-center">
    <p className="text-lg sm:text-xl mb-4">
      Kami berkomitmen untuk menyediakan unit motor terbaik bagi setiap penyewa, <br className="hidden sm:block" />
      karena kenyamanan, kepuasan, dan keamanan Anda adalah prioritas utama kami.
    </p>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-10">
      NIKMATI WAKTU TERBAIKMU
    </h2>

    {/* Grid Gambar Showcase */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
        <div key={n} className="overflow-hidden rounded-xl shadow-md">
          <img
            src={`/images/isi${n}.png`}
            alt={`Motor ${n}`}
            className="w-full h-40 sm:h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>

    {/* Tombol CTA */}
    <a
      href="/DaftarUnit"
      className="inline-block bg-white text-gray-800 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-200 transition"
    >
      Lihat Daftar Unit Perfect Room
    </a>
  </div>
</section>


      <Footer />
    </div>
  );
}
