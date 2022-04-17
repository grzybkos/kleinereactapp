import { useState } from "react";
import ButtonGetCatFact from "./components/ButtonGetCatFact";
import CatFact from "./components/CatFact";
import ButtonGetCatImage from "./components/ButtonGetCatImage";
import CatImage from "./components/CatImage";

function App() {
  const [catFact, setCatFact] = useState("");
  const [catImageURL, setCatImageURL] = useState("");
  return (
    <>
      <div className="flex min-h-screen items-center bg-gradient-to-t from-pink-200 via-pink-100 to-pink-200">
        <div className="mx-auto my-auto py-6 px-6 lg:px-10 h-auto min-h-96 w-screen max-w-5xl max-h-fit">
          <div className="border-8 border-pink-300 rounded-lg h-auto min-h-full max-h-fit w-auto min-w-full bg-teal-100 ">
            <div className="flex h-auto">
              <ButtonGetCatFact setCatFact={setCatFact} />
              <ButtonGetCatImage setCatImageURL={setCatImageURL} />
            </div>
            <CatFact catFact={catFact} />
            <CatImage catImageURL={catImageURL} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
