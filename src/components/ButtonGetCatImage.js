import { useEffect, useState } from "react";

export default function ButtonGetCatImage({ setCatImageURL }) {
  const [catSaysText, setCatSaysText] = useState("");
  async function getCatImage() {
    try {
      const response = await fetch(
        `https://cataas.com/cat/cute${
          catSaysText ? `/says/${catSaysText}?size=100` : ""
        }`
      );
      if (response.status !== 200) {
        setCatImageURL("");
        return;
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setCatImageURL(url);
    } catch (error) {
      console.error(error);
      setCatImageURL("");
    }
  }

  useEffect(() => {
    getCatImage();
  }, []);

  return (
    <>
      <div className="h-24 mx-auto w-auto">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <button
            type="submit"
            className="mt-5 mb-1 p-5 rounded-xl max-w-sm font-bold text-white bg-pink-500  hover:bg-pink-600"
            onClick={getCatImage}
          >
            Get a cat image
          </button>
          <input
            className="max-w-fit rounded-md max-h-6 w-full font-semibold text-center focus:outline-none focus:ring-2
           focus:ring-pink-400"
            placeholder="Cat Says..."
            value={catSaysText}
            onChange={(e) => {
              setCatSaysText(e.target.value);
            }}
          ></input>
        </form>
      </div>
    </>
  );
}
