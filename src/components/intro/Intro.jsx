import "./intro.css";
import Me from "../../img/me.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <div>
          <h2 className="i-intro">Hallo, mijn naam is</h2>
          <h2 className="i-name">Hakan Yılmaz</h2>
          </div>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Webontwikkeling</div>
              <div className="i-title-item">E-commerce Website</div>
              <div className="i-title-item">Javascript-React</div>
              <div className="i-title-item">REACT NATIVE</div>
              <div className="i-title-item">MOBIELE APPLICATIE</div>
            </div>
          </div>
          <p className="i-desc">
            Ik ontwerp en ontwikkel diensten voor klanten van elke omvang,
            gespecialiseerd in het creëren van stijlvolle, moderne websites,
            webservices en online winkels.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
