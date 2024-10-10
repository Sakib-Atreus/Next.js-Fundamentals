import Counter from "@/components/Counter/Counter";

const HomePage = () => {
  // console.log("Hello World!")
  
  return (
    <div>
      <h1 className="text-4xl text-center text-purple-600 text-opacity-75">Welcome to Next.js home page!</h1>
      <h1 className="text-4xl text-center text-purple-600 text-opacity-75 mt-5">React Server Component</h1>
      <Counter/>
    </div>
  );
};

export default HomePage;