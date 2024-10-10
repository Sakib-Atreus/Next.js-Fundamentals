import Image from "next/image";
// import nextImage from "../../assets/nextjsimage.png"
import nextImage from "@/assets/nextjsimage.png"

export const metadata = {
    title: "Next.js | Gallery",
    description: "This is home page"
  }

const GalleryPage = () => {
  return (
    <div className="bg-white text-black">
      <h1 className="text-4xl text-center mt-1 py-4">Image Optimizations</h1>
      <h2 className="text-center text-xl">Regular Image Tag</h2>
      <img
        src="https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E"
        alt="next image"
        width={500}
        height={500}
        className="mx-auto"
      />
      <h2 className="text-center text-xl">Next.js Image Component</h2>
      <Image
        src="https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E"
        alt="next image"
        width={500}
        height={500}
        className="mx-auto"
      />
      <h2 className="text-center text-xl">Local Image</h2>
      <Image
        src={nextImage}
        alt="next image"
        width={500}
        height={500}
        className="mx-auto"
      />
    </div>
  );
};

export default GalleryPage;
