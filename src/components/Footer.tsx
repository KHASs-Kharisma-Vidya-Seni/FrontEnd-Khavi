import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-shark-900 pt-10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center  border-b border-laser-500 pb-10 lg:flex-row">
          <div className="w-2/6">
            <img src="/images/KHASs-logo-2.png" alt="" className="w-24 border-0" />
          </div>

          <section className="flex  w-4/6 flex-col gap-20  py-6 lg:flex-row">
            <Menu />
            <MenuSosmed />
            <MenuContact />
          </section>
        </div>
        <p className="py-10 text-end text-sm text-wild-sand-50">
          Copyright © 2024 KHASs. Dibuat dengan Developer Mandiri untuk Caryy ❤
        </p>
      </div>
    </div>
  );
}

const Menu = () => {
  return (
    <div className="text-laser-300">
      <h1 className="text-3xl">Feature</h1>
      <ul className="mt-2 space-y-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/forum">Forum</Link>
        </li>
        <li>
          <Link to="/article">Artikel</Link>
        </li>
        <li>
          <Link to="/face-scanner">Analis</Link>
        </li>
      </ul>
    </div>
  );
};

const MenuSosmed = () => {
  const sosmed = [
    { name: "Facebook", icon: "/icon/facebook.png" },
    { name: "Tiktok", icon: "/icon/tiktok.png" },
    { name: "Instagram", icon: "/icon/instagram.png" },
  ];

  return (
    <div className="text-laser-300">
      <h1 className="text-3xl">Come interact with us</h1>
      <ul className="mt-2 space-y-2">
        {sosmed.map((sosmed, index) => (
          <li key={index} className="flex items-center gap-2">
            <img src={sosmed.icon} alt="" className="h-w-8 w-8" />
            {sosmed.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const MenuContact = () => {
  const contacts = [
    { name: "Email", value: "khass911@gmail.com" },
    { name: "Phone", icon: "(62)-899-0872s" },
  ];

  return (
    <div className="text-laser-300">
      <h1 className="text-3xl">Contact us</h1>
      <ul className="mt-2 space-y-2">
        {contacts.map((contact, index) => (
          <li key={index} className="flex items-center gap-2">
            {contact.name} : {contact.value}
          </li>
        ))}
      </ul>
    </div>
  );
};
