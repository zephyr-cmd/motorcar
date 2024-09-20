import Image from "next/image";
import Link from "next/link";

const specialties = [
  {
    title: "Artificial Intelligence",
    imgSrc:
      "https://unsplash.com/photos/nGoCBxiaRO0/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NjJ8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8fHwxNzIyOTc2NTcxfDA&force=true&w=1920",
    imgAlt: "Artificial Intelligence",
  },
  {
    title: "Engineering and R&D",
    imgSrc:
      "https://unsplash.com/photos/pWUyHVJgLhg/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8bWFudWZhY3R1cmluZ3xlbnwwfHx8fDE3MjI5NzY3MzJ8MA&force=true&w=1920",
    imgAlt: "Engineering & Manufacturing",
  },
  {
    title: "Software Products",
    imgSrc:
      "https://unsplash.com/photos/ute2XAFQU2I/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8ZGlnaXRhbCUyMGVkdWNhdGlvbnxlbnwwfHx8fDE3MjI5NzY2NzR8MA&force=true&w=1920",
    imgAlt: "Digital Enterprise Applications",
  },
  {
    title: "Enterprise Solutions",
    imgSrc:
      "https://unsplash.com/photos/pWUyHVJgLhg/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8bWFudWZhY3R1cmluZ3xlbnwwfHx8fDE3MjI5NzY3MzJ8MA&force=true&w=1920",
    imgAlt: "Enterprise Solutions",
  },
  {
    title: "Automation and IoT Services",
    imgSrc:
      "https://unsplash.com/photos/7Ne_rNvQldw/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8fHwxNzIzNTQzNzI5fDA&force=true&w=1920",
    imgAlt: "Automation, and IoT Services",
  },
  {
    title: "Customer Experience",
    imgSrc:
      "https://unsplash.com/photos/a6k5cs4Ck4U/download?ixid=M3wxMjA3fDB8MXxhbGx8MXx8fHx8fDJ8fDE3MjMwMjg0NTZ8&force=true&w=1920",
    imgAlt: "Customer Experience",
  },
  {
    title: "Data and Analytics",
    imgSrc:
      "https://unsplash.com/photos/AT77Q0Njnt0/download?force=true&w=1920",
    imgAlt: "Data and Analytics",
  },
  {
    title: "Consulting",
    imgSrc:
      "https://unsplash.com/photos/R_jYS09sBMU/download?ixid=M3wxMjA3fDB8MXxhbGx8ODV8fHx8fHwyfHwxNzIzMDM1MDc4fA&force=true&w=1920",
    imgAlt: "Consulting",
  },
];

const generateHref = (title) => {
  return `services/${title.replace(/\s+/g, "-").toLowerCase()}`;
};

function Specialities() {
  return (
    <section className="min-h-fit w-full py-12 bg-gradient-to-br from-black to-neutral-950 flex flex-col items-center justify-center">
      <p className="bg-gradient-to-r from-gray-50 via-gray-100 to-indigo-400 text-transparent bg-clip-text text-center font-bold text-3xl p-2 sm:text-5xl lg:text-7xl leading-tight tracking-tighter">
        Capabilities
      </p>
      <div className="container mx-auto flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 md:gap-8 md:p-20">
        {specialties.map((specialty, index) => (
          <Link href={generateHref(specialty.title)} key={index}>
            <div className="relative group flex flex-col h-80 w-64 overflow-hidden">
              <div className="relative w-full h-full transition-all duration-700 group-hover:scale-110">
                <Image
                  src={specialty.imgSrc}
                  alt={specialty.imgAlt}
                  fill
                  style={{
                    objectFit: "cover",
                    overflow: "hidden",
                  }}
                  priority={true}
                  sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
                  className="absolute transform grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute top-0 right-0 p-4 bg-black/30 hover:bg-black/60 hover:grayscale-0 w-full h-full transition-all duration-700">
                <h3 className="absolute inset-0 text-lg font-bold h-full inset-y-3/4 justify-center text-white text-center ">
                  {specialty.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Specialities;
