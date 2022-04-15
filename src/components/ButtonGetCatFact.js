import { useEffect } from "react";

export default function ButtonGetCatFact({ setCatFact }) {
  async function getCatFact() {
    const response = await fetch("https://cat-fact.herokuapp.com/facts/random");
    const parseRes = await response.json();
    // console.log(parseRes);
    setCatFact(parseRes.text);
  }

  // triggering twice in strict mode
  useEffect(() => {
    getCatFact();
  }, []);

  return (
    <>
      <button
        className="flex my-5 p-5 rounded-xl mx-auto rounded-center max-w-sm font-bold text-white bg-pink-500  hover:bg-pink-600"
        onClick={getCatFact}>
        Get a cat fact
      </button>
    </>
  );
}