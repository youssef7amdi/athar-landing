import Link from "next/link";

const Register = () => {
  return (
    <div id="register" className="px-16">
      <h2 className="section-heading">التسجيل</h2>
      <div className="text-center max-w-xl m-auto p-8 shadow-lg mb-36">
        <p className="text-base md:text-xl leading-loose">
          هذا العرض لفترة محدودة وبأعداد قليل سارع وسجل معنا لتحقيق مبيعات في
          أقل من 90 يوم...
        </p>
        <Link
          href="#register"
          className="block mt-12 border-2 border-red-500 m-auto w-fit px-6 py-3 rounded-full flex justify-center items-center font-bold text-red-500 transform hover:bg-red-500 hover:text-white transition duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-300"
        >
          سجّل معنا
        </Link>
      </div>
    </div>
  );
};

export default Register;
