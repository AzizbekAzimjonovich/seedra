import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto max-w-6xl px-8">
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>

      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          className="w-96 h-96 object-cover rounded-lg"
          src={product.attributes.image}
          alt={product.attributes.title}
        />
        <div>
          <h1 className="capitalize text-3xl font-bold">
            {product.attributes.title}
          </h1>
          <h4 className="title-xl font-bold text-netural-content mt-2">
            {product.attributes.company}
          </h4>
          <p className="mt-3 text-xl">{product.attributes.price}$</p>
          <p className="mt-6 leading-8">{product.attributes.description}</p>
          <div className="mt-2"></div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
