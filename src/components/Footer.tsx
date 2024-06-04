// Footer component
export default function Footer() {
  return (
    <div className="bg-shark-900 pt-10">
      <div className="mx-auto w-full lg:w-5/6">
        <div className="flex flex-col items-center gap-y-10 border-b border-laser-500 pb-10 lg:flex-row lg:gap-y-0">
          <div className="lg:w-2/6">
            <img
              src="/images/KHASs-logo-2.png"
              alt=""
              className="w-24 border-0"
            />
          </div>
          <FooterContent />
        </div>
        <p className="py-10 text-center text-sm text-wild-sand-300 lg:text-end">
          Copyright © 2024 KHASs. Dibuat dengan cinta.
        </p>
      </div>
    </div>
  );
}

// FooterContent component
const FooterContent = () => {
  return (
    <section className="flex w-4/6 flex-col gap-20 lg:flex-row">
      <Menu />
      <MenuSosmed />
      <MenuContact />
    </section>
  );
};

// Menu component
const Menu = () => {
  return (
    <div className="text-laser-300">
      <h1 className="text-3xl">Feature</h1>
      <ul className="mt-2 space-y-2">
        {["About", "Forum", "Artikel", "Analis"].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// MenuSosmed component
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
        {sosmed.map((platform, index) => (
          <li key={index} className="flex items-center gap-2">
            <img src={platform.icon} alt="" className="h-w-8 w-8" />
            {platform.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

// MenuContact component
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
