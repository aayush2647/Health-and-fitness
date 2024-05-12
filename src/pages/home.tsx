import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";

const Home = () => {

  const addToCartHandler=() => {};
  return (
    <div className="home">
      <section>
        
      </section>

      <h1>
        Latest Products 
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>


      <main>
        <ProductCard 
         productId="asadasd"
         name="Isopure Whey Protein Isolate Powder - 500g (Cookies & Cream)" 
         price={4545}
         stock={435}
         handler={addToCartHandler}
         photo="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_3:4,c_fill/dpr_2/cultgear-content/hRtiJ1WRDqB8kF2i7RFZDAic"
         />
      </main>
    </div>
  );
};

export default Home;
