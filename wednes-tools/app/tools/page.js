import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <ul>
          <li><Link href="/tools/qr">GenerateQRCode QR CODE</Link></li>
        </ul>
      </div>
    </div>
  )
}
