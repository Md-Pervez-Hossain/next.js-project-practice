import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/Portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Posts",
      url: "/post",
    },
    {
      id: 7,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];
  return (
    <div>
      <div className="flex items-center  justify-between">
        <Link href="/" className="font-semibold">
          Logo
        </Link>
        <div className="flex items-center gap-5 py-8 font-semibold">
          {links.map((link) => {
            return (
              <>
                <Link href={link.url} key={link.id}>
                  {link?.title}
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
