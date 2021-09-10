const OurServices = () => {
  return (
    <section id="service" className="service">
      <h1 className="heading">our services</h1>
      <div className="row">
        <div className="image">
          <img src="images/our-services.svg" alt="" />
        </div>
        <div className="content">
          <h3>website development</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptatem, tempore hic deserunt vel
            temporibus aperiam recusandae ratione, obcaecati at qui accusamus enim, laudantium eveniet. Inventore voluptas
            nemo placeat. Voluptas.</p>
          <a href="#"><button className="btn">read more</button></a>
        </div>

      </div>

      <div className="row">

        <div className="content">
          <h3>mobile freindly</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptatem, tempore hic deserunt vel
            temporibus aperiam recusandae ratione, obcaecati at qui accusamus enim, laudantium eveniet. Inventore voluptas
            nemo placeat. Voluptas.</p>
          <a href="#"><button className="btn">read more</button></a>
        </div>
        <div className="image">
          <img src="images/mobile-freindly.svg" alt="" />
        </div>

      </div>

      <div className="row">


        <div className="image">
          <img src="images/mobile-freindly.svg" alt="" />
        </div>
        <div className="content">
          <h3>responsive design</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptatem, tempore hic deserunt vel
            temporibus aperiam recusandae ratione, obcaecati at qui accusamus enim, laudantium eveniet. Inventore voluptas
            nemo placeat. Voluptas.</p>
          <a href="#"><button className="btn">read more</button></a>
        </div>

      </div>

      <div className="row">

        <div className="content">
          <h3>web hosting</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptatem, tempore hic deserunt vel
            temporibus aperiam recusandae ratione, obcaecati at qui accusamus enim, laudantium eveniet. Inventore voluptas
            nemo placeat. Voluptas.</p>
          <a href="#"><button className="btn">read more</button></a>
        </div>
        <div className="image">
          <img src="images/web-hosting.svg" alt="" />
        </div>

      </div>

      <div className="row">


        <div className="image">
          <img src="images/seo-freindly.svg" alt="" />
        </div>
        <div className="content">
          <h3>seo freindly</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptatem, tempore hic deserunt vel
            temporibus aperiam recusandae ratione, obcaecati at qui accusamus enim, laudantium eveniet. Inventore voluptas
            nemo placeat. Voluptas.</p>
          <a href="#"><button className="btn">read more</button></a>
        </div>

      </div>

      <div className="row">

        <div className="content">
          <h3>graphic design</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde voluptatem, tempore hic deserunt vel
            temporibus aperiam recusandae ratione, obcaecati at qui accusamus enim, laudantium eveniet. Inventore voluptas
            nemo placeat. Voluptas.</p>
          <a href="#"><button className="btn">read more</button></a>
        </div>
        <div className="image">
          <img src="images/graphic-design.svg" alt="" />
        </div>

      </div>

    </section>

  );
}

{/* export const getStaticProps = async (ctx) => {


  return {
    props: {
      data: null
    }
  }
} */}

export default OurServices;