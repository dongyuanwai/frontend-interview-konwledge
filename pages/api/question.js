import NotionServer from "../../lib/NotionServer";


const notionServer = new NotionServer();

export default async function handler( req, res ) {
  const data = await notionServer.query();
  res.status(200).json(data);
}
