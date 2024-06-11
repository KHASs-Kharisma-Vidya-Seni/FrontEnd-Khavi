import { cn } from "@/lib/utils";

export default function About() {
  return (
    <section className="pb-20">
      <div
        style={{
          backgroundImage:
            "linear-gradient(76deg, rgba(15,14,14,1) 0%, rgba(0,0,0,0.2862394957983193) 70%), url(/images/about-s1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
        }}
        className="flex h-full w-full flex-col items-center justify-center overflow-hidden"
      >
        <div id="text" className="container h-full w-full justify-end self-center py-16 text-white">
          <h1 className="text-5xl font-bold text-[#F4F4F4]">Tentang Kami</h1>
          <p className="mt-2 text-lg text-wild-sand-200 lg:w-3/6 lg:text-xl lg:leading-relaxed">
            Selamat datang di KHASs, platform terdepan untuk rekomendasi gaya rambut dan panduan perawatan rambut! Kami
            berdedikasi untuk membantu Anda menemukan gaya rambut yang sempurna dan memberikan tips perawatan rambut
            yang mudah diikuti.
          </p>
        </div>
      </div>
      <div id="parent">
        <div id="text" className="mt-10 py-12 text-center text-2xl font-bold">
          <h1 className="text-5xl font-bold text-[#2E323A] lg:text-4xl">Tiga Pilar KHASs</h1>
        </div>
        <div id="image" className="flex flex-col items-center justify-center gap-10 md:flex-row lg:gap-20">
          <PilarCard title="Kreatif" description="Mencerminkan kepribadian yang unik" image="\images\about-s2-1.png" />
          <PilarCard title="Kreatif" description="Mencerminkan kepribadian yang unik" image="\images\about-s2-2.png" />
          <PilarCard title="Kreatif" description="Mencerminkan kepribadian yang unik" image="\images\about-s2-3.png" />
        </div>
      </div>

      <CardAbout />

      <CardBaru
        title="Jalan KHASs"
        subtitle="Apa yang Kami Lakukan"
        description="Tujuan utama kami adalah memberikan inspirasi gaya rambut yang sesuai dengan berbagai bentuk wajah, jenis rambut, dan tren terkini, sehingga pengguna dapat menemukan tampilan yang paling cocok dan menarik."
        image="/images/about-s4.png"
        isOdd={true}
      />

      <CardBaru
        title="Metode Kami"
        subtitle="Bagaimana Kami Melakukannya "
        description="Untuk mencapai tujuan, kami melakukan riset tren gaya rambut dan perawatannya. Kami menyajikan konten berkualitas tinggi seperti artikel dari sumber yang terpercaya, membangun komunitas interaktif di situs kami."
        image="/images/about-s5.png"
        isOdd={false}
      />

      <CardBaru
        title="Misi Kami"
        subtitle="Mengapa Kami Melakukannya"
        description="kami percaya bahwa gaya rambut adalah bagian penting dari identitas dan ekspresi diri seseorang. Kami ingin membantu orang merasa percaya diri dan bahagia dengan penampilan mereka melalui gaya rambut yang sesuai dan perawatan yang tepat."
        image="/images/about-s6.png"
        isOdd={true}
      />
    </section>
  );
}

const PilarCard = ({ title, description, image }: { title: string; description: string; image: string }) => {
  return (
    <div id="anak" className="relative h-80 w-80 overflow-hidden rounded-bl-[50px] rounded-tr-[50px] lg:w-60">
      <div className="absolute left-0 top-4 h-full w-full px-4">
        <h1 className="text-5xl font-bold text-[#F4F4F4] lg:text-3xl">{title}</h1>
        <p className="text-xl text-[#F4F4F4] lg:text-base">{description}</p>
      </div>
      <figure className="h-full w-full">
        <img src={image} className="h-full w-full" alt="anak 1" />
      </figure>
    </div>
  );
};
// https://i.ibb.co.com/9yygs9H/al-barizi-f-QLIo30-XVko-unsplash.jpg

const CardAbout = () => {
  return (
    <div className="mt-20 flex w-full flex-col items-center justify-center gap-0 overflow-hidden bg-[#2E323A] lg:flex-row lg:gap-16">
      <div id="image" className="w-full lg:w-3/6">
        <figure className="relative h-full w-full">
          <img
            src="/images/about-s3.png"
            alt=""
            className="flex h-full w-full flex-shrink items-center justify-center gap-10 overflow-hidden rounded-sm px-0 py-0 lg:px-12 lg:py-12"
          />
          <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-b from-black/20 to-black/65"></div>
        </figure>{" "}
      </div>
      <div id="text" className="h-full w-full justify-end self-center px-6 py-12 text-white sm:px-12 lg:w-3/6">
        {/* <h1 className="text-5xl font-bold text-[#F4F4F4]">Tentang Kami</h1> */}
        <p className="text-lg text-[#F4F4F4] md:text-4xl lg:text-5xl">
          “Rambut lebih dari sekedar gaya. Ini merupakan bentuk ekspresi diri, cara untuk menampilkan kepribadian unik
          kita kepada dunia, dan simbol kegembiraan dan kreativitas kami.”
        </p>
      </div>
    </div>
  );
};

const CardBaru = ({
  title,
  subtitle,
  description,
  image,
  isOdd,
}: {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  isOdd: boolean;
}) => {
  return (
    <div
      className={cn(
        "ml-100 container mx-auto mt-20 flex items-start justify-center gap-5 overflow-hidden px-2 lg:container lg:gap-10 lg:px-12",
        isOdd ? "flex-col lg:flex-row" : "flex-col-reverse lg:flex-row-reverse"
      )}
    >
      <div
        id="text"
        className={cn(
          "flex h-full w-full flex-col justify-end gap-2 border border-black px-2 py-5 text-white lg:w-3/6 lg:px-5",
          isOdd ? "self-start" : "self-end"
        )}
      >
        <h1 className="text-4xl font-bold text-[#2E323A]">{title}</h1>
        <h2 className="text-2xl font-bold text-[#3D444F]">{subtitle}</h2>
        <p className="text-lg text-[#474E5D] lg:text-xl">{description}</p>
      </div>
      <div id="image" className="w-full lg:w-3/6">
        <figure className={cn("relative h-full w-full", isOdd ? "pt-0 lg:pt-20" : "pb-0 lg:pb-20")}>
          <img className="h-full w-full" src={image} alt="" />
          {/* <div className="absolute inset-0 z-10 h-full w-full bg-gradient-to-b from-black/20 to-black/65"></div> */}
        </figure>{" "}
      </div>
    </div>
  );
};
