import Image from "next/image";
import jessie from "../../assets/jessie-rogers.jpg";

function GalleryPage() {
  return (
    <div>
      <h1 className="text-4xl">Image Optimization</h1>
      <h2>Regular Image Tag</h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Jessie_Rogers%2C_2013_%28cropped%29.jpg"
        alt="Jessie"
      />
      <h2>web image with image tag</h2>
      <Image
        src={
          "https://upload.wikimedia.org/wikipedia/commons/c/c8/Jessie_Rogers%2C_2013_%28cropped%29.jpg"
        }
        alt="Jessie"
        width={500}
        height={500}
        className="mx-auto"
      />
      <h2>local image with image tag</h2>
      <Image
        src={jessie}
        alt="Jessie"
        width={500}
        height={500}
        className="mx-auto"
      />
    </div>
  );
}

export default GalleryPage;
