import Image from "next/image";
import styles from "./page.module.css";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HomePage from "./Components/Home/HomePage";

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}
