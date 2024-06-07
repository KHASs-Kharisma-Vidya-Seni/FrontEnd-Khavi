import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <div id="landing" className="relative">
        <div id="1" className="flex overflow-hidden">
          <motion.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="container relative left-0 z-20 w-full py-10 2xl:absolute 2xl:py-16">
            <h1 className="w-full text-5xl font-extrabold md:z-10 lg:text-8xl">
              Temukan <span className="text-[#CDB16E]">Gaya</span>
            </h1>
            <h1 className="ml-0 text-5xl font-extrabold text-[#CDB16E] md:ml-52 lg:ml-72 lg:text-8xl">
              Rambutmu
            </h1>
          </motion.div>
          <motion.figure
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="-z-10 ml-auto hidden h-screen w-9/12 2xl:flex">
            <img
              src="images/landing-page.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.figure>
        </div>

        <div id="2" className="h-full overflow-hidden">
          <div className="w-ful flex h-full flex-col items-center justify-center 2xl:flex-row">
            <motion.div
              initial={{
                y: 50,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                backgroundImage:
                  "linear-gradient(0deg, rgba(15,14,14,1) 0%, rgba(0,0,0,0.2862394957983193) 95%), url('/images/landing-1.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className="bottom-0 left-0 h-[19rem] w-full rounded-none  2xl:absolute 2xl:h-[36.375rem] 2xl:w-[37rem] 2xl:rounded-md"
            />

            {/* <figure className="h-full w-full -z-10  ">
              <img
                src="/images/landing-1.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </figure> */}

            <div className="ml-auto w-full bg-[#2E323A] px-10 py-12  2xl:w-[62%] 2xl:py-20 ">
              <div className="flex h-full w-full flex-col items-center lg:flex-row">
                <h1 className="w-full text-2xl font-extrabold  text-[#CDB16E]  lg:text-5xl xl:text-4xl 2xl:w-10/12">
                  Bingung Menentukan Gaya Rambut?
                </h1>
                <p className="w-full text-left text-lg text-[#F4F4F4]">
                  Selamat datang di{" "}
                  <span className="text-[#CDB16E]">KHASs</span>, tempat di mana
                  gaya rambut yang sempurna dan perawatan rambut yang tepat
                  menjadi kenyataan. Kami hadir dengan misi untuk memberikan
                  inspirasi, edukasi, dan panduan praktis agar Anda dapat
                  menemukan gaya rambut dan merawatnya dengan baik. Temukan
                  rahasia cantiknya rambut Anda bersama kami!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefit Part */}
      <div className="container bg-white py-20 lg:container">
        <div className="px-0 2xl:px-40">
          <div className="flex w-full items-center justify-center">
            <h1 className="text-center text-5xl font-extrabold text-[#2E323A] ">
              <span className="text-[#CDB16E]">Menata Rambut</span> of
              Hairstyling
            </h1>
          </div>

          <div className="mt-10 flex h-full w-full flex-col items-center justify-center gap-8 lg:mt-16 lg:flex-row lg:gap-20">
            <figure className="relative h-full w-full px-6  lg:w-3/6 lg:px-0">
              <img
                className="h-full w-full rounded-lg object-cover"
                src="/images/women-hair-salon.png"
                alt=""
              />
              <div className="absolute -left-1 -top-4 -z-10 h-full  w-[90%] rounded-lg border-4 border-black lg:-left-8 lg:-top-8 lg:w-full " />
            </figure>

            <div className="w-full lg:w-3/6">
              <p className="text-justify  text-xl leading-relaxed text-[#2E323A] sm:text-lg lg:text-xl xl:text-2xl">
                Gaya rambut tidak hanya berpengaruh pada penampilan, tetapi juga
                pada kepercayaan diri dan ekspresi diri. Dengan gaya rambut yang
                tepat, seseorang bisa merasa lebih percaya diri dan
                mengekspresikan kepribadian mereka dengan lebih baik. Selain
                itu, penampilan yang terawat juga dapat memengaruhi bagaimana
                orang lain memandang seseorang, terutama dalam konteks
                profesional. Jadi, gaya rambut memiliki manfaat yang signifikan
                dalam meningkatkan kepercayaan diri dan kesan sosial.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Artikel Part */}
      <div className="h-full w-full bg-[#2E323A]">
        <div className="px-0">
          <div className="container flex flex-col items-center gap-1 pb-6 pt-20">
            <h1 className="text-5xl font-extrabold text-[#F4F4F4]">Artikel</h1>
            <p className="w-full text-center text-xl leading-relaxed text-[#B8B8C4] lg:w-5/6 lg:text-2xl">
              Jelajahi artikel ini untuk mendapatkan wawasan mendalam tentang
              teknologi face scanner dan temukan informasi menarik terkait tips
              dan trik perawatan rambut.
            </p>
          </div>

          <div id="card-artikel" className="container">
            <div className="flex flex-col items-center justify-center overflow-hidden rounded-xl bg-white lg:flex-row">
              <div className="w-full p-10 lg:w-3/6">
                <h1 className="mb-3 text-4xl font-extrabold text-[#2E323A] text-current md:text-start md:text-5xl">
                  <span className="text-[#CDB16E]">Eksplor</span> Artikel
                </h1>
                <p className="leading-description text-xl text-gray-500">
                  Bergabunglah dalam perjalanan ini untuk menemukan tren terbaru
                  dalam dunia hairstyle, serta mendapatkan saran praktis yang
                  dapat Anda terapkan sehari-hari. Jelajahi artikel ini sekarang
                  !!
                </p>
                {/* Button */}
              </div>
              <figure className="w-full lg:w-3/6">
                <img
                  src="/images/artikel-man-three.png"
                  className="h-[29.3125rem] w-[210.5rem] object-cover"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="pt-16 text-4xl font-bold text-white">
            Coba Fitur Kami
          </h1>
          <div className="py-8">
            <div
              style={{
                clipPath: "polygon(51% 100%, 0 0, 100% 0)",
              }}
              className="h-10 w-16 animate-bounce bg-gray-50"></div>
          </div>
        </div>
      </div>

      {/* Face Scanner Part */}
      <div className="container pt-20">
        <div className="px-0 xl:px-36">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-extrabold text-[#CDB16E]">
              <span className="text-[#2E323A]">Face </span>Scanner
            </h1>
            <p className="mb-12 mt-3 w-full text-center text-xl leading-relaxed text-[#2E323A] md:text-2xl lg:w-11/12">
              Sebuah teknologi canggih yang memungkinkan pemindaian dan analisis
              cepat bentuk wajah seseorang menghasilkan informasi tentang
              proporsi wajah dan gaya rambut
            </p>
          </div>

          <div className="mx-auto h-full w-full overflow-hidden rounded-[1.25rem]  bg-[#2E323A]">
            <figure className="h-full w-full overflow-hidden lg:h-[400px]">
              <img
                className="center h-full w-full object-cover object-right-top"
                src="/images/face-scane.png"
                alt=""
              />
            </figure>

            <div className="flex flex-col items-center gap-1 px-6 py-10 md:px-10">
              <h1 className="text-center text-3xl font-bold text-[#F4F4F4] md:text-5xl">
                Temukan gaya rambut yang sesuai!
              </h1>
              <p className="mb-4 w-full text-center text-lg font-normal text-[#808080] md:w-4/6 md:text-2xl lg:w-5/6">
                Temukan gaya rambut ideal Anda dengan teknologi scan wajah!
                Rekomendasi personal dan visualisasi instan untuk penampilan
                sempurna!
              </p>

              <button className="rounded-md bg-[#CDB16E] px-10 py-1 text-2xl text-gray-900">
                Coba
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Review Part */}
      <div id="review" className="container  pt-20 lg:container">
        <div className="justify-cente flex flex-col items-center px-0 xl:px-36">
          <div className="flex flex-col items-center justify-center gap-3 text-[#2E323A]">
            <h1 className="text-5xl font-extrabold">Review</h1>
            <p className="text-center text-2xl ">
              Ini adalah pendapat dari seseorang yang telah merasakan manfaat
              dari situs web ini.
            </p>
          </div>
          <div className="mx-auto my-10 w-full rounded-[3.125rem] bg-[#2E323A] px-[3.75rem] py-[1.88rem] drop-shadow-md ">
            <div className="flex justify-between">
              <div className="flex gap-4">
                <img src="/images/profile-review-1.png" alt="" />
                <div className="my-auto">
                  <h1 className="text-2xl font-bold text-[#F4F4F4]">
                    Laura Hofmann
                  </h1>
                </div>
              </div>
              {/* <div className="my-auto ">
                <div className="flex gap-3">
                  <img src="src/assets/img/Star.png" alt="" />
                  <img src="src/assets/img/Star.png" alt="" />
                  <img src="src/assets/img/Star.png" alt="" />
                  <img src="src/assets/img/Star.png" alt="" />
                  <img src="src/assets/img/Star.png" alt="" />
                </div>
              </div> */}
            </div>
            <div className="mt-4">
              <p className="font-normal leading-loose text-[#CAC5C5] lg:text-xl">
                "Situs ini memberikan pemindaian wajah yang cepat dan akurat
                dengan antarmuka pengguna yang mudah digunakan. Saya sangat puas
                Deng hasilnya, terutama dalam analisis proporsi wajah dan
                rekomendasi gaya rambut. Sangat direkomendasikan bagi siapa pun
                yang ingin memahami aspek visual wajah mereka dengan lebih baik"
              </p>
              {/* <p className="pt-[0.88rem] text-[0.875rem] text-black text-opacity-60">
                12 Orang Menyukai Ini
              </p> */}
            </div>
          </div>
        </div>
      </div>
      {/* More Exp */}
      <div className="flex flex-col items-center py-10 lg:py-20">
        <h1 className="w-full text-center text-3xl font-bold text-[#2E323A] md:text-5xl lg:w-4/6">
          Dapatkan pengalaman lebih, agar gaya rambut anda tidak monoton
        </h1>
        <div className="">
          <button className="mr-[0.88rem] mt-6 rounded-[3.125rem] border-2 border-[#2E323A] bg-[#F4F4F4] px-10 py-1 text-lg text-[#2E323A] md:text-2xl">
            Login
          </button>
          <button className="mt-6 rounded-[3.125rem] border-2 border-[#2E323A] bg-[#2E323A] px-10 py-1 text-lg text-[#F4F4F4]  md:text-2xl">
            Daftar
          </button>
        </div>
      </div>
    </div>
  );
}
