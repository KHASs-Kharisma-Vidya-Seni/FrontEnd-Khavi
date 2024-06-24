import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function UnderMaintenance() {
  return (
    <div className="0">
      <div className="w-5/6 rounded-lg bg-white p-8   text-center">
        <figure className="flex h-full w-full items-center justify-center py-4">
          <Avatar>
            <AvatarImage
              src="https://i.pinimg.com/originals/20/6a/25/206a25430c5e43b8e202a5f34a4a3cab.jpg"
              className="object-cover"
            />
            <AvatarFallback>Under Maintenance</AvatarFallback>
          </Avatar>
        </figure>
        <h1 className="mb-2 text-3xl font-bold text-gray-800">Situs Sedang dalam Perbaikan</h1>
        <p className="mb-4 text-gray-500 text-xl">
          Kami sedang melakukan beberapa pembaruan dan perbaikan. Harap bersabar, situs kami sedang minum kopi dulu.
        </p>
      </div>
    </div>
  );
}
