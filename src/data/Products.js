// const productApi = `${import.meta.env.VITE_ADMIN_PANEL_URI}/nasara`

// export async function fetchProducts() {
//   try {
//     const response = await fetch(productApi); 
//     const data = await response.json();

//     return data //data
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return [];
//   }
// }


const productApi = `${import.meta.env.VITE_ADMIN_PANEL_URI}/nasara`;

export async function fetchProducts() {
  try {
    // Fetching both APIs simultaneously
    const [nasaraRes, dummyRes] = await Promise.all([
      fetch(productApi),
      fetch("https://dummyjson.com/products")
    ]);

    // Converting to JSON
    const [nasaraData, dummyData] = await Promise.all([
      nasaraRes.json(),
      dummyRes.json()
    ]);

    // Mapping DummyJSON data to match your schema
    const formattedDummyData = dummyData.products.map(product => ({
      _id: product.id.toString(),
      title: product.title,
      price: product.price,
      category: product.category || "Other",
      quantity: product.stock || 10, // Assuming a default quantity
      unit: "piece", // Default unit since DummyJSON lacks this field
      description: product.description,
      author: "mukhtar",
      images: product.images || [product.thumbnail], // Ensuring an array
      published: true,
    }));

    // Merging Nasara products with DummyJSON products
    return [...nasaraData, ...formattedDummyData];

  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
