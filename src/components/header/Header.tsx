import Logo from "@/components/header/navigater/Logo";
import Navigation from "@/components/header/navigater/Navigation";

export default function Header() {
  return (
    <div className="flex flex-row">
      <Logo /> <Navigation />
    </div>
  );
}
