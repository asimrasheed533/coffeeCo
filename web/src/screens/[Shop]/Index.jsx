import React, { useLayoutEffect, useState } from "react";

import { useLocation, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import useQuery from "../../utils/useQuery";
import SliderBanner from "../../components/SliderBanner";

export default function Shop() {
  const { pathname, state } = useLocation();

  const path = pathname.split("/")[1];
  const [isActive, setIsActive] = useState(0);
  // const [filterdata, setFilterdata] = useState(null);
  const { data } = useQuery("/products");
  console.log("data", data);
  // useLayoutEffect(() => {
  //   setFilterdata(data?.filter((item) => item.category === state.id));
  // }, [data, state.id]);
  // const cofeedata = [
  //   {
  //     id: 1,
  //     title: "Espresso",
  //     flavour: "Coffee House",
  //     description:
  //       "A strong and bold coffee with a rich and intense flavor, perfect for a quick pick-me-up.",
  //     image: "https://kopikita.id/wp-content/uploads/2022/08/coffeebean2.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "Cappuccino",
  //     flavour: "Coffee House",
  //     price: 200,
  //     description:
  //       "A classic Italian coffee made with equal parts espresso, steamed milk, and frothed milk.",
  //     image: "https://kopikita.id/wp-content/uploads/2022/08/kopisusu.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "Latte",
  //     flavour: "Coffee House",
  //     price: 300,
  //     description:
  //       "A smooth and creamy coffee made with espresso and steamed milk, topped with a light layer of foam.",
  //     image: "https://kopikita.id/wp-content/uploads/2022/08/coffeebean2.jpg",
  //   },
  //   {
  //     id: 4,
  //     title: "Americano",
  //     flavour: "Coffee House",
  //     price: 500,
  //     description:
  //       "A simple and strong coffee made by diluting espresso with hot water, perfect for a smooth and rich taste.",
  //     image:
  //       "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFtZXJpY2Fub3xlbnwwfHwwfHx8fDA%3D",
  //   },
  //   {
  //     id: 5,
  //     title: "Mocha",
  //     flavour: "Coffee House",
  //     price: 200,
  //     description:
  //       "A delicious blend of espresso, steamed milk, and chocolate, topped with whipped cream and chocolate drizzle.",
  //     image: "https://kopikita.id/wp-content/uploads/2022/08/kopisusu.jpg",
  //   },
  //   {
  //     id: 6,
  //     title: "Flat White",
  //     flavour: "Coffee House",
  //     price: 200,
  //     description:
  //       "A smooth and velvety coffee made with espresso and steamed milk, offering a rich and balanced flavor.",
  //     image:
  //       "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVzcHJlc3NvfGVufDB8fDB8fHww%3D",
  //   },
  //   {
  //     id: 7,
  //     title: "Macchiato",
  //     flavour: "Coffee House",
  //     price: 200,
  //     description:
  //       "A bold and flavorful coffee made with a shot of espresso topped with a small amount of steamed milk.",
  //     image:
  //       "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hY2NoaWF0b3xlbnwwfHwwfHx8fDA%3D",
  //   },
  //   {
  //     id: 8,
  //     title: "Affogato",
  //     flavour: "Coffee House",
  //     price: 200,
  //     description:
  //       "A delightful dessert coffee made by pouring a shot of hot espresso over a scoop of vanilla ice cream.",
  //     image: "https://kopikita.id/wp-content/uploads/2022/08/coffeebean2.jpg",
  //   },
  // ];

  return (
    <>
      <div className="shop__main__banner">
        <SliderBanner />
      </div>
      <div className="shop__products__container">
        <div className="shop__products__filter__warper">
          <div className="shop__filter__heading">
            Total Products: <span>{data?.length}</span>
          </div>
          <div className="shop__filter__items">
            <button
              className={`shop__filter__item ${
                isActive === 0 && "shop__filter__item__active"
              }`}
              onClick={() => {
                setIsActive(0);
                const sortedData = [...filterData];
                sortedData.sort(
                  (a, b) => new Date(b.published_at) - new Date(a.published_at)
                );
                setFilterData(sortedData);
              }}
            >
              Newest
            </button>
            <button
              className={`shop__filter__item ${
                isActive === 1 && "shop__filter__item__active"
              }`}
              onClick={() => {
                setIsActive(1);
                const sortedData = [...filterData];
                sortedData.sort(
                  (a, b) => new Date(a.published_at) - new Date(b.published_at)
                );
                setFilterData(sortedData);
              }}
            >
              Oldest
            </button>
            <button
              className={`shop__filter__item ${
                isActive === 3 && "shop__filter__item__active"
              }`}
              onClick={() => {
                setIsActive(3);
                const sortedData = [...filterData];
                sortedData.sort((a, b) => a.price - b.price);
                setFilterData(sortedData);
              }}
            >
              Small to heigh Price
            </button>
            <button
              className={`shop__filter__item ${
                isActive === 4 && "shop__filter__item__active"
              }`}
              onClick={() => {
                setIsActive(4);
                const sortedData = [...filterData];
                sortedData.sort((a, b) => b.price - a.price);
                setFilterData(sortedData);
              }}
            >
              Heigh to small Price
            </button>
          </div>
        </div>
        <div className="shop__products__items">
          {data?.length > 0 ? (
            data?.map((item) => <ProductCard item={item} key={item.id} />)
          ) : (
            <div className="no-data">No products available.</div>
          )}
        </div>
      </div>
    </>
  );
}
function ProductCard({ item }) {
  return (
    <Link
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      to={`${item._id}`}
      state={item}
      className="item__container__filter"
    >
      <div className="product__frt__svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="feather feather-heart"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </div>
      <div className="item__filter__container__img">
        <img src={item.img} alt="fashion_style" loading="lazy" />
      </div>
      <div className="item__container__name__warper">
        <div className="item__container__name">{item.name}</div>
        <div className="item__container__price">Rs:{item.price}</div>
      </div>

      <div className="item__container__flavour">{item.flavour}</div>
    </Link>
  );
}
