import Link from "next/link";
import { usePathname } from "next/navigation";

const MainNav = () => {
  const pathName = usePathname();

  const routes = [
    {
      href: "/lawyers",
      label: "Lawyers",
      active: pathName === "/lawyers",
    },
    {
      href: "/bookings",
      label: "Bookings",
      active: pathName === "/bookings",
    },
  ];

  return (
    <nav
      className={
        "flex flex-col md:flex-row justify-center gap-5 md:gap-10 items-center"
      }
    >
      {routes.map((route) => (
        <Link
          href={route.href}
          key={route.href}
          className={`text-lg ${
            route.active ? "text-orange-700" : "text-gray-900"
          }`}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
