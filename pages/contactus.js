import useInput from "./customHooks/useInput";
import Button from '../components/Button';


const ContactUs = () => {

  const [name, bindName, resetName] = useInput('');
  const [number, bindNumber, resetNumber] = useInput('');
  const [budget, bindBudget, resetBudget] = useInput('');
  const [email, bindEmail, resetEmail] = useInput('');
  const [comment, bindComment, resetComment] = useInput('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && number && budget && email && comment) {
      const res = await fetch('/api/contactus', {
        method: "POST",
        body: JSON.stringify({ name, number, budget, email, comment }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await res.json()
      console.log(data);
      resetHandler(e);
    }
  }

  const resetHandler = (e) => {
    e.preventDefault();
    resetName('');
    resetNumber('');
    resetBudget('');
    resetEmail('');
    resetComment('');
  }

  return (
    <section id="contact" className="contact">
      <h1 className="heading">Contact Us</h1>
      <div className="row">
        <div className="image">
          <img src="images/about-image.svg" alt="" />
        </div>
        <div className="form-container">
          <form name="form" onSubmit={handleSubmit}>
            <div className="inputBox">
              <input type="text" placeholder="Name" {...bindName} />
              <input type="number" placeholder="Mobile/Phone" {...bindNumber} />
            </div>
            <div className="inputBox">
              <input type="email" placeholder="Email" {...bindEmail} />
              <input type="text" className="budget" placeholder="Your budget" {...bindBudget} />
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder="Message" {...bindComment}></textarea>
            <div className="buttons">
              <Button value="Send">Send</Button>
              <Button value="Reset" onClick={resetHandler}>Reset</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

// export const getStaticProps = async (ctx) => {


//     return {
//         props: {
//             data: null
//         }
//     }
// }

export default ContactUs;