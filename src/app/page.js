export const metadata = {
  title: "Home Page",
  description: "This is home page",
};
async function HomePage() {
  const res = await fetch("http://localhost:5000/shoes");
  const shoes = await res.json();
  return (
    <div>
      <h1 className="text-4xl text-center">Hello world</h1>

      <div>
        {shoes.map((shoe) => (
          <div key={shoe.id}>
            <p>{shoe.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
