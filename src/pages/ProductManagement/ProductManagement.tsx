// main code
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

interface Product {
  _id?: string;

  name?: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  stock: number;
}

const ProductManagement: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [newProduct, setNewProduct] = useState<Product>({
    // _id: "",
    name: "",
    price: 0,
    description: "",
    imageUrl: "",
    category: "",
    stock: 0,
  });

  //
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://fitness-equipment-accessories-server.vercel.app/products",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

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

  //

  const handleEditProductForm = (product: Product) => {
    setEditingProduct(product);

    setNewProduct({ ...product });

    Swal.fire({
      icon: "warning",
      title: "Go to Below and fille the Update Product Form",
      // text: "Are you sure you want to do Update?",
    });
  };

  const handleEditProduct = async (product: Product) => {
    try {
      const response = await fetch(
        `https://fitness-equipment-accessories-server.vercel.app/products/${product._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      fetchProducts();

      // Show success alert
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Product updated successfully!",
      });
      setNewProduct({
        name: "",
        price: 0,
        description: "",
        imageUrl: "",
        category: "",
        stock: 0,
      });
      console.log("Product updated successfully");
    } catch (error) {
      console.error("Error updating product:", error);

      // Show error alert
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to update product",
      });
    }
  };

  const handleDeleteProduct = async (productId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this product info!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            `https://fitness-equipment-accessories-server.vercel.app/products/${productId}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (!response.ok) {
            throw new Error("Failed to delete product");
          }

          //   refetch data
          fetchProducts();

          // Show success alert
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "Your product has been deleted.",
          });
        } catch (error) {
          console.error("Error deleting product:", error);

          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to delete product",
          });
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelled",
          text: "Your product is safe",
          icon: "info",
        });
      }
    });
  };

  const handleAddProduct = async () => {
    try {
      const response = await fetch(
        "https://fitness-equipment-accessories-server.vercel.app/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save product");
      }

      //   refetch data
      fetchProducts();

      // Reset newProduct state after successful save
      setNewProduct({
        name: "",
        price: 0,
        description: "",
        imageUrl: "",
        category: "",
        stock: 0,
      });

      // Show success alert
      Swal.fire({
        icon: "success",
        title: "Added",
        text: "Product Added successfully!",
      });

      console.log("Product saved successfully");
    } catch (error) {
      console.error("Error saving product:", error);

      // Show error alert
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to add product",
      });
    }
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
    setNewProduct({
      //   id: "",
      name: "",
      price: 0,
      description: "",
      imageUrl: "",
      category: "",
      stock: 0,
    });
  };

  const handleEmptyFrom = () => {
    setEditingProduct(null);
    setNewProduct({
      //   id: "",
      name: "",
      price: 0,
      description: "",
      imageUrl: "",
      category: "",
      stock: 0,
    });
  };

  return (
    <div className="">
      <Helmet>
        <title>Product Management | FitZone</title>
      </Helmet>
      <div className="">
        <br />
        <br /> <br />
      </div>
      <div
        className="p-4"
        style={{
          border: "1px solid black",
          backgroundColor: "white",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="max-w-screen-lg mx-auto p-4  mb-2">
          <h1 className="font-bold text-4xl mb-2 text-center text-green-500">
            Product Management
          </h1>
          <hr
            style={{
              border: "none",
              height: "2px",
              backgroundImage: "linear-gradient(to right, #00FF00, #FFD700)", // Replace colors with your gradient
              margin: "20px 0", // Adjust margin as needed
            }}
          />
          <div className="mb-4 p-2">
            <h2 className="text-xl text-center font-bold mb-2 text-green-500">
              Product List
            </h2>
            <table
              className="table w-full "
              style={{ border: "1px solid #ccc" }}
            >
              <thead>
                <tr>
                  <th className="border text-center px-4 py-2">#</th>
                  <th className="border text-center px-4 py-2">Name</th>
                  <th className="border text-center px-4 py-2">Price</th>
                  <th className="border  text-center px-4 py-2">Category</th>
                  <th className="border text-center  px-4 py-2">Update</th>
                  <th className="border text-center  px-4 py-2">Delete</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={product._id}>
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border  text-center px-4 py-2">
                      {product.name}
                    </td>
                    <td className="border text-center  px-4 py-2">
                      {product.price}
                    </td>
                    <td className="border text-center  px-4 py-2">
                      {product.category}
                    </td>
                    <td className="border  text-center px-4 py-2">
                      <button
                        className="btn btn-sm btn-outline btn-info mr-2"
                        onClick={() => handleEditProductForm(product)}
                      >
                        Update
                      </button>
                    </td>
                    <td className="border  text-center px-4 py-2">
                      <button
                        className="btn btn-sm btn-outline btn-error"
                        onClick={() => handleDeleteProduct(product._id!)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/*product form start  */}
          <hr
            style={{
              border: "none",
              height: "2px",
              backgroundImage: "linear-gradient(to right, #00FF00, #FFD700)",
              margin: "20px 0",
            }}
          />
          <div className="mb-8 ">
            <h2 className="text-xl text-center text-green-500 font-bold mb-2">
              {editingProduct ? "Update Product Form" : "Add a Product"}{" "}
            </h2>
            <div className="border border-black p-2">
              <div className="flex">
                <div className="w-1/2 mr-4">
                  <label className="block mb-2">Name</label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={newProduct.name}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, name: e.target.value })
                    }
                  />
                </div>
                <div className="w-1/2">
                  <label className="block mb-2">Price</label>
                  <input
                    type="number"
                    className="input input-bordered w-full"
                    value={newProduct.price}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        price: parseFloat(e.target.value),
                      })
                    }
                  />
                </div>
              </div>
              <div className="flex mt-4">
                <div className="w-1/2 mr-4">
                  <label className="block mb-2">Category</label>
                  <select
                    className="input input-bordered w-full"
                    value={newProduct.category}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, category: e.target.value })
                    }
                  >
                    <option value="">Select a category</option>
                    <option value="Strength">Strength</option>
                    <option value="MultiGym">MultiGym</option>
                    <option value="Treadmill">Treadmill</option>
                  </select>
                </div>
                <div className="w-1/2">
                  <label className="block mb-2">Stock</label>
                  <input
                    type="number"
                    className="input input-bordered w-full"
                    value={newProduct.stock}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        stock: parseInt(e.target.value, 10),
                      })
                    }
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block mb-2">Description</label>
                <textarea
                  className="textarea textarea-bordered w-full"
                  value={newProduct.description}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      description: e.target.value,
                    })
                  }
                ></textarea>
              </div>
              <div className="mt-4">
                <label className="block mb-2">Image URL</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={newProduct.imageUrl}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, imageUrl: e.target.value })
                  }
                />
              </div>
              <div className="mt-4">
                {/* <button className="btn btn-primary mr-2" onClick={handleSaveProduct}>
            {editingProduct ? "Update Product" : "Add Product"}
          </button> */}
                {editingProduct ? (
                  <button
                    className="btn btn-success mr-2 font-bold text-white"
                    onClick={() => handleEditProduct(newProduct)} //need to add
                    //   onClick={handleSaveProduct}
                  >
                    Update Product
                  </button>
                ) : (
                  <button
                    className="btn btn-success mr-2 font-bold text-white"
                    onClick={handleAddProduct}
                  >
                    Create a New Product
                  </button>
                )}
                {editingProduct && (
                  <button
                    className="btn btn-error font-bold text-white"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>
          </div>

          {/*product form end  */}
        </div>
      </div>{" "}
    </div>
  );
};

export default ProductManagement;
