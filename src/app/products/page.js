export const metadata = {
    title: "Next.js | T-Shirt",
    description: "This is t-shirt page",
  };
  
  const fetchTShirt = async () => {
    const res = await fetch("http://localhost:5000/t-shirts", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch T-Shirt");
    }
    return res.json();
  };
  
  const AllProductPage = async () => {
    const tShirt = await fetchTShirt();
  
    return (
      <div>
        <h1 className="text-4xl text-center">All T-Shirt</h1>
        <div className="grid grid-cols-3 justify-center gap-4 p-5 max-w-7xl mx-auto">
          {tShirt?.map((shirt, index) => (
            <div
              key={shirt?.id || index}
              className="card bg-base-100 w-96 shadow-xl"
            >
              <figure>
                <img
                  src={shirt?.image}
                  alt="Shirt"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {shirt?.title}
                  <div className="badge badge-info text-white">
                    $ {shirt?.price}
                  </div>
                </h2>
                <p>{shirt?.description}</p>
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
  
  export default AllProductPage;
  