import Link from "next/link";
import Image from "next/image"
import Style from "./css/Header.module.css";
import Head from "next/head";

export default function Header() {
  return (
    <div>
      <Head>
        
      </Head>
      <div className={Style.navBox}>
        <div className={Style.navBar}>
          <div className={Style.logoBox}>
            <Image
              src="/wednes_logo.svg"
              width={150}
              height={24}
            />
          </div>
          <div className={Style.menuBox}>
            <ul>
              <li><Link href="/tools">Tools</Link></li>
              <li><Link href="/lab">Lab</Link></li>
              <li><Link href="/contact">Contact us</Link></li>
            </ul>
          </div>
        </div>
      </div> {/* Header end */}
    </div>
  )
}
