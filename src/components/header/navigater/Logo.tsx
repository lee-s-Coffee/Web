import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="mb-4 flex justify-center">
      <Link href="/">
        {/* 로고를 변경할 경우 아래의 png를 교체 할 것 */}
        <Image src="/logo.png" width={80} height={40} alt="Logo"></Image>
      </Link>
    </div>
  );
}
