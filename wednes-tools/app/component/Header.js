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
            <Link href="/">
              <Image
                src="/wednes_logo.svg"
                width={150}
                height={24}
                alt="logo"
                priority
              />
            </Link>
          </div>
          <div className={Style.menuBox}>
            <ul>
              <li><Link href="/tools">Tools</Link></li>
            </ul>
          </div>
        </div>
      </div> {/* Header end */}
    </div>
  )
}
