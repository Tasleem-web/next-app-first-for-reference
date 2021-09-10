import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  let contactdetails = null;

  if (req.method === 'GET') {
    contactdetails = await db
      .collection("contactdetails")
      .find({})
      .toArray();
    res.json(contactdetails);

  } else if (req.method === 'POST') {
    contactdetails = await db
      .collection("contactdetails")
      .save(req.body);

    res.status(200).json({
      message: "Record saved successfully",
      data: contactdetails.ops
    });
  } else if (req.method === 'PUT') {
  } else if (req.method === 'DELETE') {
  } else if (req.method === 'PATCH') {
  }

};
