export default function Home() {
  return (
    <div className="">
      {/* First Part */}
      <div className="h-[56rem]">
        <div className="absolute right-0 top-20 h-[36.375rem] w-[76.25rem] bg-black"></div>
        <div className="absolute left-0 top-96 h-[36.375rem] w-[31rem] rounded-br-3xl bg-black"></div>
        <div className="absolute left-0 top-0">
          <h1 className="ml-16 mt-28 text-8xl font-extrabold md:z-10 md:ml-32 md:mt-36">
            Find <span className="text-yellow-500">Your</span>
          </h1>
          <h1 className="ml-64 text-8xl font-extrabold text-yellow-500 md:ml-80">
            Hairstyle
          </h1>
        </div>
        <div className="absolute right-32 top-[47.8125rem] flex w-[47.8125rem] items-start gap-16">
          <div className="w-fit	">
            <h1 className="w-max text-5xl font-extrabold">Lorem Ipsum</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Vulputate adipiscing posuere
            consequat felis. Cras enim tellus id consectetur et sodales sit
            faucibus. Sit non elit eu id egestas. Tincidunt nullam cras cursus
            condimentum etiam tempus vulputate ullamcorper. Viverra enim
            pharetra id egestas nibh nisi sem mauris elit. Dictumst facilisi
            aenean sed arcu quam metus fusce elit faucibus. Porttitor lacinia
            nulla quis dignissim est tortor. Ultrices a leo ut felis quam etiam
            nunc urna pellentesque. Amet urna sit parturient pellentesque.
          </p>
        </div>
      </div>
      {/* Benefit Part */}
      <div className=" h-[63.875rem]">
        <div className="flex w-full place-content-center pt-32">
          <h1 className="text-5xl font-extrabold">Benefit of Hairstyling</h1>
        </div>
        <div className="relative mt-28 flex gap-4">
          <div className="mr-14 h-[34.375rem] w-[34.375rem] rounded-lg border-4 border-black bg-white"></div>
          <div className="absolute left-8 top-8 h-[34.375rem] w-[34.375rem] rounded-lg bg-black"></div>
          <div className="ml-24 mt-28  w-[34.375rem]">
            <p className="text-justify text-2xl font-normal">
              Lorem ipsum dolor sit amet consectetur. Vulputate adipiscing
              posuere consequat felis. Cras enim tellus id consectetur et
              sodales sit faucibus. Sit non elit eu id egestas. Tincidunt nullam
              cras cursus condimentum etiam tempus vulputate ullamcorper.
              Viverra enim pharetra id egestas nibh nisi sem mauris elit.
              Dictumst facilisi aenean sed arcu quam metus fusce elit faucibus.
              Porttitor lacinia nulla quis dignissim est tortor. Ultrices a leo
              ut felis quam etiam nunc urna pellentesque. Amet urna sit
              parturient pellentesque.
            </p>
          </div>
        </div>
      </div>
      {/* Atilel Part */}
      <div>
        <div className="flex flex-col items-center pt-32">
          <h1 className="mb-4 text-5xl font-extrabold">Artikel</h1>
          <p className="text-center text-2xl font-normal">
            Lorem ipsum dolor sit amet consectetur. Vulputate adipiscing posuere
            consequat felis. Cras enim tellus id consectetur et sodales sit
            faucibus.
          </p>
        </div>
        <div className="mt-20 flex h-[29.3125rem] w-[84rem] items-center justify-center gap-10 rounded-[2.5rem] border-4 border-black bg-white">
          <div className="mb-24 ml-[4.5rem]">
            <h1 className="text-5xl font-extrabold">Eksplor Artikel</h1>
            <p className="text-[1rem] font-normal">
              Lorem ipsum dolor sit amet consectetur. Vulputate adipiscing
              posuere consequat felis. Cras enim tellus id consectetur et
              sodales sit faucibus. Sit non elit eu id egestas. Tincidunt nullam
              cras cursus condimentum etiam tempus vulputate ullamcorper.
            </p>
          </div>
          <div className="h-[29.3125rem] w-[210.5rem] rounded-[2.5rem] bg-black"></div>
        </div>
        <div className="flex flex-col items-center pb-[6.81rem]">
          <h1 className="pt-20 text-5xl font-bold">Coba Fitur Kami</h1>
          <div className="">
            <img src="src/assets/img/down-arrow.png" alt="" />
          </div>
        </div>
      </div>
      {/* Face Scanner Part */}
      <div className="relative pb-[2.19rem]">
        <div className="flex flex-col items-center pt-[2.19rem]">
          <h1 className="text-5xl font-extrabold">Face Scanner</h1>
          <p className="text-center text-2xl font-normal">
            Lorem ipsum dolor sit amet consectetur. Vulputate adipiscing posuere
            consequat felis. Cras enim tellus id consectetur et sodales sit
            faucibus.
          </p>
        </div>
        <div className="h-[48.0625rem] w-[84rem] rounded-[1.25rem] border-2 border-black">
          <div className="h-[28rem] w-[84rem] rounded-[1.25rem] border-2 border-black bg-black"></div>
          <div className="flex flex-col items-center pt-[2.5rem]">
            <h1 className="text-[2.25rem] font-bold">
              Temukan gaya rambut yang sesuai!
            </h1>
            <p className="w-[28rem] text-center text-2xl font-normal">
              Lorem ipsum dolor sit amet consectetur. Vulputate adipiscing
              posuere consequat felis. Cras eni
            </p>
            <button className="mt-[2.5rem] h-[2.625rem] w-[8.75rem] rounded-[0.625rem] bg-black text-[1.5rem] text-white">
              Coba
            </button>
          </div>
        </div>
      </div>
      {/* Review Part */}
      <div className="Relative  pt-[6.03rem]">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-extrabold">Review</h1>
          <p className="text-center text-2xl font-normal">
            Lorem ipsum dolor sit amet consectetur. Vulputate adipiscing posuere
            consequat felis. Cras enim tellus id consectetur et sodales sit
            faucibus.
          </p>
          <div className="my-[6.25rem] w-[70rem] rounded-[3.125rem] border-2 border-black px-[3.75rem] py-[1.88rem] drop-shadow-md">
            <div className="flex gap-[31.25rem]">
              <div className="flex gap-[0.88rem]">
                <img src="src/assets/img/Profile_Review.png" alt="" />
                <div className="my-auto">
                  <h1 className="text-[1.5rem] font-bold">Bambang Wijaya</h1>
                </div>
              </div>
              <div className="my-auto ">
                <div className="flex">
                  <img src="src/assets/img/Star.png" alt="" />
                  <img src="src/assets/img/Star.png" alt="" />
                  <img src="src/assets/img/Star.png" alt="" />
                  <img src="src/assets/img/Star.png" alt="" />
                  <img src="src/assets/img/Star.png" alt="" />
                </div>
              </div>
            </div>
            <div className="mt-[0.88rem]">
              <p className="text-[1.5rem] font-normal">
                Lorem ipsum dolor sit amet consectetur. Vulputate adipiscing
                posuere consequat felis. Cras enim tellus id consectetur et
                sodales sit faucibus. Sit non elit eu id egestas. Tincidunt
                nullam cras cursus condimentum etiam tempus vulputate
                ullamcorper. Viverra enim pharetra id egestas nibh nisi sem
                mauris elit. Dictumst facilisi aenean sed arcu quam metus fusce
                elit faucibus. Porttitor lacinia nulla quis dignissim est
                tortor.
              </p>
              <p className="pt-[0.88rem] text-[0.875rem] text-black text-opacity-60">
                12 Orang Menyukai Ini
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* More Exp */}
      <div className="relative flex flex-col items-center">
        <div className="w-[47.625rem]">
          <div className="flex flex-col items-center pt-[2.5rem]">
            <h1 className="text-center text-[2.25rem] font-bold">
              Dapatkan pengalaman lebih, agar gaya rambut anda tidak monoton
            </h1>
            <div className="mb-[10rem]">
              <button className="mr-[0.88rem] mt-[2.5rem] h-[2.5rem] w-[8.75rem] rounded-[3.125rem] border-2 border-black bg-white text-[1.5rem] text-black">
                Login
              </button>
              <button className="mt-[2.5rem] h-[2.5rem] w-[8.75rem] rounded-[3.125rem] border-2 border-black bg-black text-[1.5rem] text-white">
                Daftar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
