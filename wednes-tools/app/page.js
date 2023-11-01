import Link from "next/link";
import Style from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className={Style.menuBox}>
        <ul>
          <li><Link href="/tools">Tools</Link></li>
          <li><Link href="/lab">Lab</Link></li>
          <li><Link href="/contact">Contact us</Link></li>
        </ul>
      </div>
    </div>
  )
}
