import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      <div className="links">
        {links.map(link => (
          <a key={link} href={`#${link}`}>
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
