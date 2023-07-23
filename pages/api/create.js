import NotionServer from "../../lib/NotionServer";


const notionServer = new NotionServer();

export default async function handler( req,res ) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  console.log("添加成功")
  const data = await notionServer.create();
  res.status(200).json(data);
  console.log("添加成功2",data)
}