import Link from "next/link";
import Style from "./css/Nav.module.css";

export default function Header() {
  return (
    <>
      <nav className={Style.nav}>
        <ul className={Style.navMenu}>
          <li><Link href="/tools">Tools</Link></li>
          <li><Link href="/tools">Tools</Link></li>
          <li><Link href="/tools">Tools</Link></li>
        </ul>
      </nav>
    </>
  )
}
