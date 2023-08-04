import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-cyan-950 px-16 py-8 flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col items-center text-center gap-4 text-cyan-100 font-bold">
        <div className="">
          <Image
            className="mr-4"
            src="/images/Athar Arabic Logo White@900x.png"
            width={100}
            height={100}
            alt="Logo"
          ></Image>
          <Image
            src="/images/Athar English Logo White@900x.png"
            width={70}
            height={70}
            alt="Logo"
          ></Image>
        </div>
        <div>
          <p className="mb-2">نغدو ويبقى الأثر</p>
          <p>معنا ستتكمن من ترك أثر يبقى للأبد</p>
        </div>
      </div>
      <div className="md:text-left text-center mt-10 md:mt-0 text-cyan-100 font-bold">
        <p className="mb-2">الهاتف: 01115165131</p>
        <p className="mb-2">البريد: Athar@athar.info</p>
        <p>
          Copy Right &copy; developed by{" "}
          <span className="text-red-500">Athar</span> 2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
