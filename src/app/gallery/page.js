import Image from "next/image";

function GalleryPage() {
  return (
    <div>
      <h1 className="text-4xl">Image Optimization</h1>
      <h2>Regular Image Tag</h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Jessie_Rogers%2C_2013_%28cropped%29.jpg"
        alt="Jessie"
      />
      <Image
        src={
          "https://upload.wikimedia.org/wikipedia/commons/c/c8/Jessie_Rogers%2C_2013_%28cropped%29.jpg"
        }
        alt="Jessie"
        width={500}
        height={500}
        className="mx-auto"
      />
    </div>
  );
}

export default GalleryPage;
