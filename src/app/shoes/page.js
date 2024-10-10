export const metadata = {
  title: "Next.js | Shoes",
  description: "This is shoes page",
};

const fetchShoes = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch shoes");
  }
  return res.json();
};

const ShoesPage = async () => {
  const shoes = await fetchShoes();

  return (
    <div>
      <h1 className="text-4xl text-center">All Shoes</h1>
      <div className="grid grid-cols-3 justify-center gap-4 p-5 max-w-7xl mx-auto">
        {shoes?.map((shoe, index) => (
          <div
            key={shoe?.id || index}
            className="card bg-base-100 w-96 shadow-xl"
          >
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {shoe?.title}
                <div className="badge badge-info text-white">
                  $ {shoe?.price}
                </div>
              </h2>
              <p>{shoe?.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-info">Buy Now</button>
                <button className="btn btn-outline btn-info">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoesPage;
