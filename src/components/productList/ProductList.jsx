import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projecten & Referenties</h1>
        <p className="pl-desc">
        Hieronder vindt u slechts enkele van de referenties bestaande uit bedrijfsintroductie, e-commercesites en applicaties.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} desc={item.desc} />
        ))}
        
      </div>
    </div>
  );
};

export default ProductList;
