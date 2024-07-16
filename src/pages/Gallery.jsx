const Gallery = () => {
  const images = [
    { src: "/placeholder.svg", alt: "Whippet running" },
    { src: "/placeholder.svg", alt: "Whippet portrait" },
    { src: "/placeholder.svg", alt: "Whippet sleeping" },
    { src: "/placeholder.svg", alt: "Whippet playing" },
    { src: "/placeholder.svg", alt: "Whippet with family" },
    { src: "/placeholder.svg", alt: "Whippet in the park" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Whippet Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="aspect-w-1 aspect-h-1">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;