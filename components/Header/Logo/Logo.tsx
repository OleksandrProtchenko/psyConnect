import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className="logo">
      <Link href="/">
        <Image src="/Logo.png" alt="Logo" width={174} height={32} />
      </Link>
    </div>
  );
}
