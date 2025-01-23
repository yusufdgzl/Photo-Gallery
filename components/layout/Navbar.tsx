import Image from "next/image";

function Navbar() {
  return (
    <div className="flex items-center justify-between border-b border-sky-100 md:pb-5  flex-col space-y-2 md:flex-row md:space-y-0">
      <div className="flex items-center -space-x-12 -translate-x-8 md:-translate-x-16">
        <Image
          src="/photo-album.png"
          alt="image gallery"
          width={600}
          height={600}
          className=" h-24 w-44 object-contain  "
        />
        <Image
          src="/main-heading.png"
          alt="image gallery"
          width={200}
          height={200}
          className="h-12"
        />
      </div>

      <p className="font-bold opacity-30 tracking-widest">SLİDESHOW</p>
    </div>
  );
}

export default Navbar;
