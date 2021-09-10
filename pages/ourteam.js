const OurTeam = () => {
  return (
    <section id="team" className="team">

      <h1 className="heading">our team</h1>

      <div className="row">

        <div className="card">
          <div className="image">
            <img src="images/pic1.png" alt="" />
          </div>
          <div className="info">
            <h3>Kashif Ahmed</h3>
            <span>Full Stack Developer</span>
            <div className="icons">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img src="images/pic1.png" alt="" />
          </div>
          <div className="info">
            <h3>Mohammad Tasleem</h3>
            <span>Full Stack Developer</span>
            <div className="icons">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img src="images/pic1.png" alt="" />
          </div>
          <div className="info">
            <h3>Shahinsha Ali</h3>
            <span>Full Stack Developer</span>
            <div className="icons">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img src="images/pic1.png" alt="" />
          </div>
          <div className="info">
            <h3>Harisha KR</h3>
            <span>Full Stack Developer</span>
            <div className="icons">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
            </div>
          </div>
        </div>

      </div>


    </section>

  );
}

export const getStaticProps = async (ctx) => {


  return {
    props: {
      data: null
    }
  }
}

export default OurTeam;