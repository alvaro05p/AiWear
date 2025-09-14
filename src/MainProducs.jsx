export default function Products() {
  const items = [
    { id: 1, category: "CATEGORY", name: "The Catalyzer", price: "$16.00", img: "backBlackHoodie.png" },
    { id: 2, category: "CATEGORY", name: "Shooting Stars", price: "$21.15", img: "frontBlackHoodie.png" },
    { id: 3, category: "CATEGORY", name: "Neptune", price: "$12.00", img: "frontBlackShirt.png" },
    { id: 4, category: "CATEGORY", name: "The 400 Blows", price: "$18.40", img: "backBlackShirt.png" },
    { id: 5, category: "CATEGORY", name: "The Catalyzer", price: "$16.00", img: "frontWhiteShirt.png" },
    { id: 6, category: "CATEGORY", name: "Shooting Stars", price: "$21.15", img: "backWhiteShirt.png" },
    { id: 7, category: "CATEGORY", name: "Neptune", price: "$12.00", img: "frontWhiteHoodie.png" },
    { id: 8, category: "CATEGORY", name: "The 400 Blows", price: "$18.40", img: "backWhiteHoodie.png" },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {items.map((item) => (
            <div key={item.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a href="#" className="block relative rounded overflow-hidden">
                <img
                  alt={item.name}
                  className="object-cover object-center w-full h-full block"
                  src={item.img}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {item.category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {item.name}
                </h2>
                <p className="mt-1">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
