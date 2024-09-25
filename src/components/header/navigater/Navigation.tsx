import NavAbout from "@/components/header/navigater/naviItem/NavAbout";
import NavBean from "@/components/header/navigater/naviItem/NavBean";
import NavEducation from "@/components/header/navigater/naviItem/NavEducation";

export default function Navigation() {
  return (
    <div className="flex flex-row">
      <NavAbout />
      <NavBean />
      <NavEducation />
    </div>
  );
}
