import "./about.css";
import AboutImg from "../../img/about.jpg";
import Project from "../../img/project.jpg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={AboutImg} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Over Mij</h1>
        <p className="a-sub">"Het geheim van vooruitkomen is beginnen."</p>
        <p className="a-desc">
          Ik ontwerp professionele websites. Uw projecten met betrekking tot uw
          bedrijf of e-commerce kunnen wij samen uitvoeren. Ik bied
          professionele SEO ondersteuning om hoger in Google te komen. Om
          succesvol te zijn, moet je goede sociale media hebben. We kunnen
          samenwerken aan contentproductie en -beheer voor social media.
        </p>
        <div className="a-award">
          <img src={Project} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Webontwikkeling & Digitale Marketing</h4>
            <p className="a-award-desc">
              React.js, React-Native, Javascript, HTML, CSS, Bootstrap, Wordpress, SEO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
