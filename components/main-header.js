import classes from "./main-header.module.css";
import Link from "next/link";
import logoImg from "@/assets/logo.png";

export default function MainHeader() {
  return <header className={classes.header}>
     <Link  className={classes.logo} href="/">
     <img src={logoImg.src} alt="Logo" className="logo" />
     My Website
     </Link>

     <nav className={classes.nav}>
        <ul>
            <li><Link href="/meals">Browse Meals</Link></li>
            <li><Link href="/community">Community</Link></li>
        </ul>
     </nav>
  </header>;
}

