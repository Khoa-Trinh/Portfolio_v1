import Image from "next/image";
import Logo from "@/public/logos-svg/main/Logo.png";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { navigationItems } from "@/constants";

export default function Navbar() {
  return (
    <div className="w-full h-[4.75rem] flex justify-between items-center">
      <div className="h-[4.375rem] aspect-[16/9] relative">
        <Image src={Logo} alt="Logo" fill />
      </div>
      <NavigationMenu>
        <NavigationMenuList className="h-full w-auto flex items-center space-x-[3rem]">
          {navigationItems.map((item) => (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink
                href={item.href}
                className="titles text-background hover:text-secondary transition-colors"
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
