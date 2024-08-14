import { forwardRef } from "react";
import Link from "next/link";
export const Menu1 = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <div className="flex flex-col justify-center items-center gap-4 p-2 z-50">
        <div className="hover:text-white hover:bg-blue-500 px-4 py-2 rounded-md transition-colors duration-300 ease-in-out">
          <Link href="/Services/webDev">Website Development</Link>
        </div>
        <div className=" hover:text-white hover:bg-blue-500 px-4 py-2 rounded-md transition-colors duration-300 ease-in-out">
          <Link href="/Services/appDev">Application Development</Link>
        </div>
        <div className=" hover:text-white hover:bg-blue-500 px-4 py-2 rounded-md transition-colors duration-300 ease-in-out">
          <Link href="/Services/crmDev">CRM Development</Link>
        </div>
        <div className=" hover:text-white hover:bg-blue-500 px-4 py-2 rounded-md transition-colors duration-300 ease-in-out">
          <Link href="/Services/web3Dev">Web3</Link>
        </div>
        <div className=" hover:text-white hover:bg-blue-500 px-4 py-2 rounded-md transition-colors duration-300 ease-in-out">
          <Link href="/Services/aiDev">Artificial Intelligence</Link>
        </div>
        <div className=" hover:text-white hover:bg-blue-500 px-4 py-2 rounded-md transition-colors duration-300 ease-in-out">
          <Link href="/Services/dlDev">Deeplearning</Link>
        </div>
      </div>
    </section>
  );
});
