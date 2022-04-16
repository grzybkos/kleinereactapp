export default function CatImage({ catImageURL }) {
  return (
    <div className="flex items-center justify-center md:p-4 p-0">
      <img
        src={catImageURL}
        alt="cat not available"
        className=" w-full md:w-fit md:border-8 md:border-pink-300 md:rounded-md"
      />
    </div>
  );
}
