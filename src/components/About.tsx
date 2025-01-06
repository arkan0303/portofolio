// const About = () => {
//   const sectionStyle = {
//     padding: "4rem 0",
//     backgroundColor: "#111827",
//     color: "#ffffff",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   };

//   const containerStyle = {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     maxWidth: "1200px",
//     margin: "0 auto",
//     padding: "1rem",
//     gap: "2rem",
//   };

//   const imageStyle = {
//     width: "300px",
//     height: "300px",
//     borderRadius: "50%",
//     objectFit: "cover",
//     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
//   };

//   const contentStyle = {
//     maxWidth: "800px",
//   };

//   const titleStyle = {
//     fontSize: "2rem",
//     fontWeight: "bold",
//     marginBottom: "1rem",
//     color: "#4CAF50",
//   };

//   const paragraphStyle = {
//     fontSize: "1rem",
//     lineHeight: "1.6",
//     marginBottom: "1rem",
//     color: "#b3b3b3",
//   };

//   return (
//     <section id="about" style={sectionStyle}>
//       <style>
//         {`
//           /* Media Query untuk Mobile */
//           @media (max-width: 768px) {
//             #about div {
//               flex-direction: column; /* Susun secara vertikal */
//               align-items: center; /* Pusatkan elemen di layar kecil */
//               gap: 1rem; /* Beri jarak antara elemen */
//             }

//             #about img {
//               width: 200px; /* Ukuran gambar lebih kecil */
//               height: 200px;
//             }

//             #about h2 {
//               font-size: 1.8rem; /* Ukuran font judul */
//               text-align: center; /* Pusatkan teks */
//             }

//             #about p {
//               font-size: 0.9rem; /* Ukuran font paragraf */
//               text-align: center; /* Pusatkan teks */
//             }
//           }
//         `}
//       </style>
//       <div style={containerStyle}>
//         {/* Gambar */}
//         <img src="/public/Arkan.jpg" alt="Arkanul Adelis" style={imageStyle} />

//         {/* Konten */}
//         <div style={contentStyle}>
//           <h2 style={titleStyle}>Tentang Saya</h2>
//           <p style={paragraphStyle}>
//             Halo! Saya seorang pengembang web profesional dengan keahlian dalam
//             pengembangan website, sistem berbasis web, dan berbagai proyek
//             teknologi informasi lainnya. Saya menyediakan jasa untuk membantu
//             Anda menyelesaikan berbagai tugas akhir, pengembangan proyek, atau
//             kebutuhan teknologi lainnya.
//           </p>
//           <p style={paragraphStyle}>
//             Dengan pengalaman dan keterampilan yang telah saya asah, saya
//             berkomitmen untuk memberikan solusi kreatif, fungsional, dan efisien
//             sesuai kebutuhan Anda. Setiap proyek yang saya tangani akan
//             dikerjakan dengan perhatian penuh terhadap detail dan kualitas.
//           </p>
//           <p style={paragraphStyle}>
//             Jika Anda membutuhkan bantuan dengan tugas akhir, pengembangan
//             website, atau apapun yang berkaitan dengan teknologi, jangan ragu
//             untuk menghubungi saya. Saya percaya bahwa setiap proyek adalah
//             peluang untuk menciptakan sesuatu yang luar biasa.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// import Image from 'next/image'

import { useInView } from "react-intersection-observer";
const About = () => {
  const imageStyle: React.CSSProperties = {
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
  };
  const { ref, inView } = useInView({
    threshold: 0.2, // Memicu animasi saat 20% komponen terlihat
    triggerOnce: true, // Animasi hanya berjalan sekali
  });
  return (
    <section id="about" className="py-16 bg-gray-900 text-white">
      <div
        // className="container mx-auto px-4"
        ref={ref}
        className={`container mx-auto px-4 py-16 bg-gray-900 text-white transition-all duration-700 transform ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3 flex justify-center">
            {/* <Image
              src="/Arkan.jpg"
              alt="Arkanul Adelis"
              width={300}
              height={300}
              className="rounded-full object-cover shadow-lg"
            /> */}
            {/* <img
              src="/public/Arkan.jpg"
              alt="Arkanul Adelis"
              className="rounded-full object-cover shadow-lg"
            /> */}

            <img src="/Arkan.jpg" alt="Arkanul Adelis" style={imageStyle} />
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-green-500">
              Tentang Saya
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Halo! Saya seorang programmer ahli dengan spesialisasi dalam
                pengembangan website dan aplikasi. Saya memiliki pengalaman luas
                dalam merancang dan membangun solusi digital yang inovatif dan
                sesuai kebutuhan Anda.
              </p>
              <p>
                Dengan keahlian yang saya miliki, saya dapat membantu Anda
                menciptakan website yang menarik, responsif, dan fungsional,
                serta aplikasi yang dapat mendukung berbagai keperluan personal
                maupun bisnis. Fokus saya adalah memberikan hasil yang
                berkualitas tinggi dan memuaskan.
              </p>
              <p>
                Jika Anda mencari mitra untuk mengembangkan website, aplikasi,
                atau proyek teknologi lainnya, jangan ragu untuk menghubungi
                saya. Saya siap membantu mewujudkan ide Anda menjadi solusi yang
                nyata dan luar biasa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
