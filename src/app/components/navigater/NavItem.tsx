import Link from "next/link";

interface NavItemProps {
  href: string;
  label: string;
}

export default function NavItem({ href, label }: NavItemProps) {
  return (
    <Link href={href} className="mx-4 text-black hover:text-gray-700">
      {label}
    </Link>
  );
}
