import Image from "next/image";

function MainHeading() {
  return (
    <div className="absolute z-10 w-full h-full top-0 left-0 flex flex-col md:flex-row gap-16 md:gap-0 justify-center items-center px-16">
      <div className="logo md:hidden">
        <Image
          className="mr-4"
          src="/images/Athar Arabic Logo White@900x.png"
          width={250}
          height={250}
          alt="Logo"
        ></Image>
        <Image
          src="/images/Athar English Logo White@900x.png"
          width={175}
          height={175}
          alt="Logo"
        ></Image>
      </div>
      <h1 className="leading-relaxed text-white text-center md:text-5xl md:leading-normal text-2xl">
        نحن في مهمة لتدريب 10 مدربين لتحقيق المبيعات تابع معنا...
      </h1>
    </div>
  );
}

export default MainHeading;
