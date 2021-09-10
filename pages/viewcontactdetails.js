import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { server } from "../util/config";

const viewcontactdetails = (props) => {
  const [visible, setVisible] = useState(false);

  const [contactList, setContactList] = useState(props.contactList);

  const callAPI = async (item, METHOD) => {
    const res = await fetch(`${server}/api/contactus`, {
      method: METHOD,
      headers: {
        "Content-Type": "application/json"
      }
    })
    const contactList = await res.json()
    return contactList;
  }

  const editHandler = async (e, item, buttonName) => {
    e.preventDefault();
    setVisible(true);
    // callAPI(item, 'GET')
    //   .then(data => {
    //     console.log(data);
    //     setContactList(data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })

  }

  // const updateHandler = async (e, item) => {
  //   e.preventDefault();
  //   console.log({ e, item });

  // }

  const deleteHandler = async (e, item) => {
    e.preventDefault();
    console.log({ e, item });

  }

  const handleCallback = (state) => {
    setVisible(state);
  }

  return (
    <>
      <h1>Client Details</h1>
      <table id="customers">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Number</th>
          <th>Budget</th>
          <th>Email</th>
          <th>Comments</th>
          <th>Action</th>
        </tr>
        {
          (contactList && contactList.length > 0) ? contactList.map(contact => {
            return (
              <tr key={contact._id}>
                <td>{contact._id}</td>
                <td>{contact.name}</td>
                <td>{contact.number}</td>
                <td>{contact.budget}</td>
                <td>{contact.email}</td>
                <td>{contact.comment}</td>
                <td className="action-td">
                  <div className="action-buttons">
                    <Button name="edit" onClick={(e) => editHandler(e, contact, 'edit')}>
                      Edit
                    </Button>
                    {JSON.stringify(visible)}
                    {
                      visible ? <Modal parentCallback={handleCallback} /> : null
                    }
                    {/* <Button name="update" onClick={(e) => updateHandler(e, contact)}>
                      Update
                    </Button> */}
                    <Button name="delete" onClick={(e) => deleteHandler(e, contact)}>
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            )
          })
            :
            <tr className="no-data"></tr>
        }

      </table>
    </>
  );
}

export const getStaticProps = async (ctx) => {

  const res = await fetch(`${server}/api/contactus`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
  const contactList = await res.json()

  return {
    props: {
      contactList
    }
  }
}

export default viewcontactdetails;