import React from 'react'
import Banner1 from "./components/banner1";
import Banner2 from "./components/banner2";
import Banner3 from "./components/banner3";
import EditorsPick from "./components/editorsPick";
import Featured from "./components/featured";
import FeaturedPost from "./components/featuredPost";
import Footer from "./components/footer";
import NavBar from "./components/navBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Banner1 />
      <EditorsPick />
      <Featured />
      <Banner2 />
      <Banner3 />
      <FeaturedPost />
      <Footer />
    </main>
  );
}
