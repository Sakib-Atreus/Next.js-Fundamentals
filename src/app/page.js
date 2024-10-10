import Counter from "@/components/Counter/Counter";

export const metadata = {
  title: "Next.js | Home",
  description: "This is home page"
}

// throw new Error();

const HomePage = () => {
  // console.log("Hello World!")
  
  return (
    <div>
      <h1 className="text-4xl text-center text-purple-600">Welcome to Next.js home page!</h1>
      <h1 className="text-4xl text-center text-purple-600 mt-5">React Server Component</h1>
      <Counter/>
    </div>
  );
};

export default HomePage;