
export const metadata = {
    title: "Next.js | Shoes",
    description: "This is shoes page"
}

const ShoesPage = async () => {
    const res = await fetch("http://localhost:5000/shoes");
    const shoes = await res.json();
    // console.log(data)
    return (
        <div>
            <h1 className="text-4xl text-center">All Shoes</h1>
            <div className="flex justify-between p-5">
                {
                    shoes?.slice(0, 3).map((shoe) => (
                    <div key={shoe.id} className="card bg-base-100 w-96 shadow-xl">
                        <figure>
                          <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                          </h2>
                          <p>If a dog chews shoes whose shoes does he choose?</p>
                          <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                          </div>
                        </div>
                      </div>
                      )
                    )
                }
            </div>
        </div>
    );
};

export default ShoesPage;