const DynamicProductPage = ({ params, searchParams }) => {
    console.log(searchParams);
    
    return (
        <div>
            <h1>Dynamic Product : {params.productId} = {searchParams.category}</h1>
        </div>
    );
};

export default DynamicProductPage;