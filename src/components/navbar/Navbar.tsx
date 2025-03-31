import NavbarLink from "./NavbarLink";
import { layout } from "../../styles";

const Navbar = () => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full text-white flex justify-between items-center z-50 ${layout.defaultPadding}`}
    >
      <div className="flex flex-1 justify-start">
        <img
          className="inline-block size-10 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <div className="flex flex-1 justify-center">
        <ul className="flex gap-6">
          <li>
            <NavbarLink href="/">Home</NavbarLink>
          </li>
          <li>
            <NavbarLink href="/about">About</NavbarLink>
          </li>
          <li>
            <NavbarLink href="/skills">Skills</NavbarLink>
          </li>
          <li>
            <NavbarLink href="/projects">Projects</NavbarLink>
          </li>
          <li>
            <NavbarLink href="/blog">Blog</NavbarLink>
          </li>
          <li>
            <NavbarLink href="/contact">Contact</NavbarLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 flex justify-end">
        <ul className="flex gap-6">
          <li>LinkedIn</li>
          <li>GitHub</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
