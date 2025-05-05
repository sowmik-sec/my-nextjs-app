import Link from "next/link";

async function AllShoes() {
  const res = await fetch("http://localhost:5000/shoes", {
    cache: "no-store",
  });
  const shoes = await res.json();
  return (
    <div>
      <h1 className="text-center text-2xl">All shoes</h1>
      <div className="grid grid-cols-3 gap-6">
        {shoes.map((shoe) => (
          <div key={shoe.id}>
            <p>{shoe.title}</p>
            <p>{shoe.price}</p>
            <p>{shoe.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link href={"/all-shoes"}>
          <button className="btn btn-secondary">See more</button>
        </Link>
      </div>
    </div>
  );
}

export default AllShoes;
