import Image from "next/image";

function Navbar() {
  return (
    <div className="flex items-center py-5 justify-between border-b border-sky-100 md:pb-5  flex-col space-y-2 md:flex-row md:space-y-0">
      <div className="flex items-center relative -translate-x-10">
        <Image
          src="/gallery-logo.png"
          alt="image gallery"
          width={600}
          height={600}
          className=" h-24 w-44 object-contain  "
        />
        <h1 className="text-4xl font-serif absolute italic left-20">
          Galleria.
        </h1>
      </div>

      <p className="font-bold opacity-30 tracking-widest">SLİDESHOW</p>
    </div>
  );
}

export default Navbar;
