import Link from "next/link";
import Style from "./page.module.css";
import { Stack, Button } from '@mui/material'

export default function Home() {
  return (
    <div>
      <div className={Style.menuBox}>
        <ul>
          <li><Link href="/tools">Tools</Link></li>
          <li><Link href="/lab">Lab</Link></li>
          <li><Link href="/contact">Contact us</Link></li>
        </ul>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </div>
    </div>
  )
}
