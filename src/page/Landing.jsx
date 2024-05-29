import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const carouselImages = [hero1, hero2, hero3, hero4];

function Landing() {
  const { id } = useParams();
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch("https://strapi-store-server.onrender.com/api/products?featured=true")
      .then((response) => response.json())
      .then((data) => {
        setLists(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24  mx-auto max-w-6xl px-8">
        <div>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
            We are changing the way people shop
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>
          <div className="mt-10">
            <Link to="/products" className="btn btn-primary">
              Our Products
            </Link>
          </div>
        </div>
        <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
          {carouselImages.map((image) => {
            return (
              <div key={image} className="carousel-item">
                <img
                  className="rounded-box h-full w-80 object-cover"
                  src={image}
                  alt="Carousel"
                />
              </div>
            );
          })}
        </div>
        <div>
          <h3 className="max-w-2xl text-3xl font-semibold mb-6">
            Featured Products
          </h3>
          <div className="w-full h-[1px] bg-slate-400"></div>
        </div>
      </div>
      <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-10 mx-auto max-w-6xl px-8">
        {Array.isArray(lists) && lists.length > 0 ? (
          lists.map((list) => (
            <Link
              to={`/product/${list.id}`}
              className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
              key={list.id}
            >
              <figure className="px-10 pt-10">
                <img
                  className="rounded-xl h-64 md:h-48 w-full object-cover"
                  src={list.attributes.image}
                  alt={list.attributes.title}
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{list.attributes.title}</h2>
                <p>{list.attributes.price}$</p>
              </div>
            </Link>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </>
  );
}

export default Landing;
