import { useState } from "react";

const EditProductPage = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    material: "",
    gender: "",
    images: [
      {
        url: "https://picsum.photos/500?random=1",
      },
      {
        url: "https://picsum.photos/500?random=2",
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
  };

  return (
    <div className="max-w-5xl p-6 max-auto shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">Edit Product Page</h2>

      {/* edit form */}
      <form onSubmit={handleSubmit}>
        {/* name */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="p-2 border border-gray-500 rounded-lg w-full"
            required
          />
        </div>

        {/* description */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Product Description
          </label>
          <textarea
            type="text"
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="p-2 border border-gray-500 rounded-lg w-full"
            rows={4}
          />

          {/* price */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">Product Price</label>
            <input
              type="number"
              name="price"
              value={productData.price}
              onChange={handleChange}
              className="p-2 border border-gray-500 rounded-lg w-full"
              required
            />
          </div>

          {/* count in stock */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">
              Product Count in Stock
            </label>
            <input
              type="number"
              name="countInStock"
              value={productData.countInStock}
              onChange={handleChange}
              className="p-2 border border-gray-500 rounded-lg w-full"
              required
            />
          </div>

          {/* sku */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">Product SKU</label>
            <input
              type="text"
              name="sku"
              value={productData.sku}
              onChange={handleChange}
              className="p-2 border border-gray-500 rounded-lg w-full"
              required
            />
          </div>

          {/* size */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">
              Product Sizes (comma-separated)
            </label>
            <input
              type="text"
              name="sizes"
              value={productData.sizes.join(",")}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  sizes: e.target.value.split(",").map((size) => size.trim()),
                })
              }
              className="p-2 border border-gray-500 rounded-lg w-full"
              required
            />
          </div>

          {/* color */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">
              Product Colors (comma-separated)
            </label>
            <input
              type="text"
              name="sizes"
              value={productData.colors.join(",")}
              onChange={(e) =>
                setProductData({
                  ...productData,
                  colors: e.target.value
                    .split(",")
                    .map((color) => color.trim()),
                })
              }
              className="p-2 border border-gray-500 rounded-lg w-full"
              required
            />
          </div>

          {/* images */}
          <div className="mb-6">
            <label className="block font-semibold mb-2">Product Images</label>
            <input type="file" onChange={handleImageUpload} />

            <div className="flex gap-4 mt-4">
              {productData.images.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.altText || "Product image"}
                  className="h-20 w-20 rounded-lg shadow-lg object-cover"
                />
              ))}
            </div>
          </div>
        </div>

        {/* submit button */}
        <button
          className="w-full bg-green-500 hover:bg-green-600 p-2 rounded-lg text-white transition-colors"
          type="submit"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
