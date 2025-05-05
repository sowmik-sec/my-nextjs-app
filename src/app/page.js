export const metadata = {
  title: "Home Page",
  description: "This is home page",
};
async function HomePage() {
  const res = await fetch("http://localhost:5000/shoes", {
    cache: "force-cache",
  });
  const shoes = await res.json();
  return (
    <div>
      <h1 className="text-4xl text-center">Hello world</h1>

      <div className="grid grid-cols-3 gap-6">
        {shoes.map((shoe) => (
          <div key={shoe.id}>
            <p>{shoe.title}</p>
            <p>{shoe.price}</p>
            <p>{shoe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
