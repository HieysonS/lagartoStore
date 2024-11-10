import { useGetTopProductsQuery } from "../redux/api/productApiSlice";
import Loader from "./Loader";
import MediaSocial from "./MediaSocial";
import LinksLP from "./LinksLP";
import Logo from "./Logo";
import SmallProduct from "../pages/Products/SmallProduct";
import ProductCarousel from "../pages/Products/ProductCarousel";

const Header = () => {
  const { data, isLoading, error } = useGetTopProductsQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h1>ERROR</h1>;
  }

  return (
    <>
      <div className="flex justify-around">
        <div className="xl:block w-full lg:w-4/5 lg:hidden md:hidden:sm:hidden m-12 items-center justify-center">
          <Logo/>
        </div>
        <div className="xl:block w-full lg:w-1/5 lg:hidden md:hidden:sm:hidden m-12 items-center justify-center">
          <MediaSocial/>
          <LinksLP/>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="xl:block lg:hidden md:hidden:sm:hidden">
          <div className="grid grid-cols-2">
            {data.map((product) => (
              <div key={product._id}>
                <SmallProduct product={product} />
              </div>
            ))}
          </div>
        </div>
        <ProductCarousel />
      </div>
    </>
  );
};

export default Header;
