// import AboutImage from "../public/images/about-image.svg";

const About = () => {
  return (
    <section id="about" className="about">
      <h1 className="heading">about us</h1>
      <div className="row">
        <div className="content">
          <h3>We build websites that build your busines</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea amet iure deserunt doloremque voluptate
            distinctio rerum! Quas sunt inventore illum facere minus voluptas fugit, magni quidem cumque! Animi, illo
            magni.</p>
          <a href="#"><button className="btn">read more</button></a>
        </div>
        <div className="image">
          <img src="images/about-image.svg" alt="" />
          {/* <AboutImage /> */}
        </div>
      </div>
    </section>
  );
}

export default About;