import { PricingCard } from "./PricingCard";

const pricingOptions = [
  {
    title: "Website Bisnis",
    basePrice: 3500000,
    deploymentFee: 300000,
    hostingFee: 500000,
    features: [
      "Desain Custom",
      "Responsif",
      "Fitur interaktif",
      // "SEO Optimization",
    ],
    additionalInfo: "Harga hanya untuk pembuatan website.",
  },
  {
    title: "Aplikasi Mobile",
    basePrice: 10000000,
    deploymentFee: 500000,
    hostingFee: 1000000,
    features: [
      "Android & iOS",
      "UI/UX Responsif",
      "Push Notifications",
      "Integrasi API",
    ],
    additionalInfo: "Harga untuk pengembangan aplikasi saja.",
  },
  {
    title: "Aplikasi Web (SaaS)",
    basePrice: 12000000,
    deploymentFee: 1000000,
    hostingFee: 1500000,
    features: [
      "Manajemen Pengguna",
      "Integrasi Payment",
      "Panel Admin",
      "Keamanan Lanjut",
    ],
    additionalInfo: "Harga pembuatan aplikasi web SaaS.",
  },
  {
    title: "Website E-Commerce",
    basePrice: 6500000,
    deploymentFee: 1500000,
    hostingFee: 1000000,
    features: [
      "Desain Toko Online",
      "Payment Gateway",
      "Sistem Checkout",
      "Manajemen Inventori",
    ],
    additionalInfo: "Harga pengembangan e-commerce saja.",
  },
  {
    title: "Portofolio Pribadi",
    basePrice: 1500000,
    deploymentFee: 300000,
    hostingFee: 300000,
    features: ["Desain Elegan", "Galeri Proyek", "Integrasi Media Sosial"],
    additionalInfo: "Harga pembuatan portofolio saja.",
  },
  {
    title: "Company Profile",
    basePrice: 2000000,
    deploymentFee: 300000,
    hostingFee: 300000,
    features: ["Desain Elegan", "Galeri Proyek", "Integrasi Media Sosial"],
    additionalInfo: "Harga pembuatan portofolio saja.",
  },
  {
    title: "Katalog Produk",
    basePrice: 5000000,
    deploymentFee: 500000,
    hostingFee: 500000,
    features: ["Katalog Interaktif", "Pencarian Produk", "Custom API"],
    additionalInfo: "Harga pembuatan katalog saja.",
  },
  {
    title: "Website / Apps Tugas Akhir",
    basePrice: 3500000,
    deploymentFee: 500000,
    hostingFee: 500000,
    features: ["Desain Elegan", "Custom Fitur", "Custom API"],
    additionalInfo: "Harga pembuatan Website / Apps Tugas Akhir.",
  },
];

export default function Pricing() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Pilih Paket Harga Kami
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingOptions.map((plan) => (
            <PricingCard key={plan.title} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
