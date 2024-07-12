import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ProductsPageCard from "./ProductsPageCard";

interface Product {
  _id?: string;

  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  stock: number;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const location = useLocation();

  useEffect(() => {
    fetchProducts();
    if (location.state?.category) {
      handleCategoryChange(location.state.category);
    }
  }, [location.state?.category]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // State for managing products and filters

  const [filters, setFilters] = useState({
    search: "",
    categories: [] as string[],
    priceSort: null as null | "asc" | "desc",
  });

  // Handlers for filtering and sorting
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, search: e.target.value });
  };

  const handleCategoryChange = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((cat) => cat !== category)
      : [...filters.categories, category];
    setFilters({ ...filters, categories: newCategories });
  };

  const handlePriceSort = (sortOrder: "asc" | "desc") => {
    setFilters({ ...filters, priceSort: sortOrder });
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      categories: [],
      priceSort: null,
    });
    fetchProducts();
  };

  // Filter products based on current filters
  const filteredProducts = products.filter((product) => {
    // Filter by search keyword
    if (
      filters.search &&
      !product.name.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }
    // Filter by selected categories
    if (
      filters.categories.length > 0 &&
      !filters.categories.includes(product.category)
    ) {
      return false;
    }
    return true;
  });

  // Sort filtered products by price
  if (filters.priceSort === "asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (filters.priceSort === "desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="mt-15 mb-5">
      <div className="pt-12">
        <br />
      </div>
      <div
        className="p-4"
        style={{
          border: "1px solid black",
          backgroundColor: "white",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="flex flex-col my-5">
          <h2 className="font-bold text-2xl mb-4 text-center text-green-500">
            Products
          </h2>
          <hr
            style={{
              border: "none",
              height: "2px",
              backgroundImage: "linear-gradient(to right, #00FF00, #FFD700)", // Replace colors with your gradient
              margin: "20px 0", // Adjust margin as needed
            }}
          />
          <div className="flex flex-wrap justify-between">
            {/* Search bar */}
            <div>
              <input
                type="text"
                value={filters.search}
                onChange={handleSearchChange}
                placeholder="Search by product name..."
                className="border border-gray-300 px-2 py-1 rounded-md  btn btn-success font-bold text-white btn-outline"
              />
            </div>

            {/* Category filters */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-success font-bold text-white btn-outline"
              >
                Select Category
              </div>
              <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li className="mb-2">
                  <button
                    onClick={() => handleCategoryChange("Strength")}
                    className={`btn btn-sm ${
                      filters.categories.includes("Strength")
                        ? "btn-neutral"
                        : "btn-outline"
                    }`}
                  >
                    Strength
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryChange("MultiGym")}
                    className={`btn btn-sm ${
                      filters.categories.includes("MultiGym")
                        ? "btn-neutral"
                        : "btn-outline"
                    }`}
                  >
                    MultiGym
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryChange("Treadmill")}
                    className={`btn btn-sm ${
                      filters.categories.includes("Treadmill")
                        ? "btn-neutral"
                        : "btn-outline"
                    }`}
                  >
                    Treadmill
                  </button>
                </li>
                {/* Add more category buttons as needed */}
              </ul>
            </div>

            {/* Sorting options */}
            <div className="dropdown">
              <div
                tabIndex={0}
                className="btn btn-success font-bold text-white btn-outline"
              >
                Sort by Price
              </div>
              <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li className="mb-2">
                  <button
                    onClick={() => handlePriceSort("asc")}
                    className="btn btn-sm btn-outline"
                  >
                    Price Low to High
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handlePriceSort("desc")}
                    className="btn btn-sm btn-outline"
                  >
                    Price High to Low
                  </button>
                </li>
              </ul>
            </div>

            {/* Clear Filter button */}
            <div>
              <button
                onClick={clearFilters}
                className="btn btn-error font-bold text-white btn-outline"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Table of products */}
        <div className="overflow-x-auto overflow-auto">
          <div className="top-0 left-0 w-full max-w-screen-xl mx-auto bg-white shadow-lg mt-1">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="border px-4 py-2">#</th>
                  <th className="border px-4 py-2">Image</th>
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">Category</th>
                  <th className="border px-4 py-2">Price</th>
                  <th className="border px-4 py-2">Details</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, index) => (
                  <tr key={product._id}>
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="h-12 w-12"
                      />
                    </td>
                    <td className="border px-4 py-2">{product.name}</td>
                    <td className="border px-4 py-2">{product.category}</td>
                    <td className="border px-4 py-2">{product.price}</td>
                    <td className="border px-4 py-2">
                      <Link to={`/product-details/${product._id}`}>
                        <button
                          className="btn btn-sm btn-outline btn-info"
                          style={{ fontSize: "10px" }}
                        >
                          Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* card here  */}
        {/* <div>
          <div className="grid grid-cols-3 gap-4 border-2 border-gray-200  p-2 mb-2">
            {products.map((product) => (
              <ProductsPageCard key={product._id} product={product} />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProductsPage;
