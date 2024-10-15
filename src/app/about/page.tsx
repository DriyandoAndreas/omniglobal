import React from "react";
import Image from "next/image";
import { User } from "lucide-react";
import Image3 from "@/app/assets/images/image3.jpg";
import struktur from "@/app/assets/images/struktur-organisasi-omni.jpeg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export default function page() {
  return (
    <>
      <div
        className="relative h-[500px] md:h-[300px] bg-cover bg-center"
        style={{ backgroundImage: `url(${Image3.src})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute p-8">
          <h2 className="text-white text-4xl font-bold py-4">
            About Omni Milenia Global
          </h2>
          <p className="text-white ">
            Omni Milenia Global, dipimpin oleh Sahud Parulian Sinaga, adalah
            perusahaan yang bergerak di bidang investasi dengan fokus pada
            pemberdayaan ekonomi melalui berbagai peluang investasi yang
            inovatif dan berkelanjutan. Kami berkomitmen untuk menyediakan
            solusi investasi yang dapat dipercaya, menguntungkan, dan membantu
            para klien mencapai tujuan keuangan mereka. Dengan keahlian di
            berbagai sektor dan pendekatan yang proaktif, Omni Milenia Global
            siap menjadi mitra investasi yang handal bagi investor lokal maupun
            internasional.
          </p>
        </div>
      </div>
      <div className="p-8">
        <div className="py-8">
          <div className="md:flex lg:space-x-4">
            <div className="basis-1/2">
              <h2 className="text-2xl font-bold py-4">Visi</h2>
              <div className="min-h-[500px] bg-sky-900 text-white p-4 rounded-md">
                <ul>
                  <li>
                    1. Menjadi perusahaan dagang (Trading Company) yang
                    kompetitif, berkualitas, berkompetensi serta menguasai
                    sumber dan jaringan pemasaran di dalam dan luar negeri.
                  </li>
                  <li>
                    2. Menjadi perusahaan dagang yang tangguh di Indonesia yang
                    berskala nasional, handal, inovatif dan berdaya saing serta
                    mampu berkembang sehat dan mandiri.
                  </li>
                  <li>
                    3. Menjadi perusahaan yang mampu memberikan solusi bisnis
                    berbasis teknologi informasi dan komunikasi sesuai dengan
                    kebutuhan pembeli.
                  </li>
                  <li>
                    4. Menjadi Most Update Solution Agency yang memberikan jasa
                    terintegrasi dan dilakukan secara profesional oleh tenaga
                    ahli dibidang Retail, Human Resource dan Event Management
                    untuk menyukseskan usaha klien dalam memperbesar brand
                    exposure kepada konsumen.
                  </li>
                </ul>
              </div>
            </div>
            <div className="basis-1/2">
              <h2 className="text-2xl font-bold py-4">Misi</h2>
              <div className="min-h-[500px] bg-sky-900 p-4 rounded-md text-white">
                <ul>
                  <li>
                    1. Mengoptimalkan nilai perusahaan, kontribusi kepada
                    pemegang saham dan tanggungjawab sosial.
                  </li>
                  <li>2. Memperluas produk-produk yang bernilai tambah.</li>
                  <li>3. Mengembangkan usaha baru berbasis kompetensi.</li>
                  <li>
                    4. Mewujudkan harmonisasi dan komunikasi yang lebih baik
                    kepada semua pihak
                  </li>
                  <li>
                    5. Mejadikan kepuasan pelanggan sebagai prioritas utama
                    melalui produk yang bermutu.
                  </li>
                  <li>
                    6. Memberdayakan manajemen perusahaan yang profesional dan
                    meningkatkan kompetensi sumber daya manusia.
                  </li>
                  <li>
                    7. Mengembangkan sumber daya manusia professional. 8.
                    Mengedepankan kinerja yang tepat waktu dan efisien untuk
                    mencapai kesuksesan bersama.
                  </li>
                  <li>
                    9. Meningkatkan nilai perusahaan melalui kreativitas dan
                    integritas dengan mengembangkan SDM yang berkompeten.
                  </li>
                  <li>
                    10. Memberikan pelayanan terbaik dari setiap pekerjaan yang
                    diberikan dengan standar yang tinggi
                  </li>
                  <li>
                    11. Menjadikan produk klien sukses di market dari usaha jasa
                    yang diberikan
                  </li>
                  <li>
                    12. Melakukan prinsip RQS ( Quick Response, Best Quality,
                    Excellent Services) dalam memberikan pelayanan kepada
                    client.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8">
          <div>
            <h2 className="text-4xl font-bold text-center py-4">Our Team</h2>
          </div>
          <div className="md:flex justify-center space-y-4 lg:space-x-4 lg:space-y-0">
            <div className="min-w-[200px]">
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-center">
                    <User size={40} />
                  </CardTitle>
                  <CardTitle className="text-center py-4">
                    Saud Parulian Sinaga
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">Direktur Utama</p>
                </CardContent>
              </Card>
            </div>
            <div className="min-w-[200px]">
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-center">
                    <User size={40} />
                  </CardTitle>
                  <CardTitle className="text-center py-4">Siana Wati</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">Team Leader</p>
                </CardContent>
              </Card>
            </div>
            <div className="min-w-[200px]">
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-center">
                    <User size={40} />
                  </CardTitle>
                  <CardTitle className="text-center py-4">
                    Putra Restu
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">Team Leader</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="py-8">
          <div>
            <h2 className="text-4xl font-bold text-center">
              Struktur Organisasi
            </h2>
          </div>
          <div className="flex justify-center py-4">
            <Image src={struktur} alt="struktur-organisasi" />
          </div>
        </div>
      </div>
    </>
  );
}
