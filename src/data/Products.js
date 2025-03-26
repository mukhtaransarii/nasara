const productApi = `${import.meta.env.VITE_ADMIN_PANEL_URI}/nasara`

export async function fetchProducts() {
  try {
    const response = await fetch(productApi); 
    const data = await response.json();

    return data
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}


