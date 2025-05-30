import { BackgroundLines } from "./components/ui/background-lines";
import Hero from "./components/ux/hero";
import NavBar from "./components/ux/nav-bar";

function App() {
  return (
    <div className="w-full px-5 sm:px-0 min-h-screen flex items-start justify-center bg-background dark">
      <div className="flex flex-col items-center w-full sm:w-11/12 lg:w-2/3 max-w-[650px]">
        <NavBar />
        <BackgroundLines className="flex items-center justify-center w-full h-full bg-transparent flex-col px-4">
          <Hero />
        </BackgroundLines>
      </div>
    </div>
  );
}

export default App;
