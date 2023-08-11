import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/miyagami.png';

export default function Footer() {
  return (
    <footer className="bottom-0 bg-emerald-800/20 grid grid-cols-2 md:grid-cols-[220px_1fr_220px]">
      <div className="col-span-2 md:row-start-1 md:col-start-2 md:col-end-3 flex items-center justify-center">
        <h6 className="text-lg text-slate-950 font-bold">
          • TypeScript / Next.js 13 / ExpressJS •
        </h6>
      </div>
      <div className="flex justify-center">
        <Link href="https://www.miyagami.com/" target='_blank'>
          <Image src={Logo} alt="Miyagami" width={90} className="my-1" />
        </Link>
      </div>
    </footer>
  );
}
