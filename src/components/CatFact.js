export default function CatFact({ catFact }) {
  return (
    <div className="text-center py-4 px-4 text-xl font-semibold break-words">
      {catFact ? catFact : "Cat fact not found"}
    </div>
  );
}
