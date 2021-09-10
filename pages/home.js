import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
    return (
        <div>
            <section id="home" className="home">

                <h1 className="banner">web design & development services</h1>
                <h3 className="slogan">you have a vision. we have a team to get you there</h3>
                <a href="#"><button>get started</button></a>


                <div className="wave wave1"></div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>

                <div className="fas fa-cog nut1"></div>
                <div className="fas fa-cog nut2"></div>


            </section>
        </div>
    );
}

// export const getStaticProps = async (ctx) => {


//     return {
//         props: {
//             data: null
//         }
//     }
// }

export default Home;