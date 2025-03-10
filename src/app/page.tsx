import Header from "./components/header";
import Intro from "./components/intro";
import About from "./components/about";
import Project from "./components/project";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col bg-main lg:h-screen w-screen bg-fixed">
        <Header></Header>
        <Intro></Intro>
      </div>
        <About></About>
        <Project></Project>
        <Contact></Contact>
    </div>
  );
}
