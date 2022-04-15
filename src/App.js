import { useState } from "react";
import ButtonGetCatFact from "./components/ButtonGetCatFact";
import CatFact from "./components/CatFact";

function App() {
  const [catFact, setCatFact] = useState("");
  return (
    <>
      <div className="flex min-h-screen items-center bg-gradient-to-t from-pink-200 via-pink-100 to-pink-200">
        <div className="mx-auto py-6 px-6 lg:px-10 h-96 w-screen max-w-7xl">
          <div className="border-8 border-pink-300 rounded-lg h-auto min-h-full w-auto min-w-full bg-teal-100">
            <ButtonGetCatFact setCatFact={setCatFact} />
            <CatFact catFact={catFact} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
