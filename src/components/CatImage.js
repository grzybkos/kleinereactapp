export default function CatImage({ catImageURL }) {
  console.log(typeof catImageURL);
  return (
    <div className="flex items-center justify-center p-0 sm:p-2 md:p-4">
      {catImageURL ? (
        <img
          src={catImageURL}
          alt="cat"
          className=" w-full md:w-fit md:border-8 md:border-pink-300 md:rounded-md"
        />
      ) : (
        <div className="text-center py-4 px-4 text-xl font-semibold break-words bg-red-500 text-white w-full sm:rounded-xl">
          CAT NOT FOUND
        </div>
      )}
    </div>
  );
}
