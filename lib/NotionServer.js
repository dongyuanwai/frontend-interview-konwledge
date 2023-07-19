import { Client } from "@notionhq/client";
const auth = process.env.NOTION_AUTH;
const database = process.env.NOTION_DATABASE_ID;
export default class NotionService {
  constructor() {
    this.client = new Client({ auth });
  }
  async query() {
    const response = await this.client.databases.query({
      database_id: database,
    });

    // return  response.results;
    return  response.results.map((item) => NotionService.transformer(item));
  }

  static transformer(page) {
    let data = {};

    for (const key in page.properties) {
      switch (page.properties[key].type) {
        case "relation":
          data[key] = page.properties[key].relation[0]?page.properties[key].relation[0].id:"";
          break;

        case "title":
        case "rich_text":
          data[key] =
          page.properties[key][page.properties[key].type][0]?page.properties[key][page.properties[key].type][0].text.content:"";
          break;
        case "id":
          data[key] =
          page.properties[key];
          break;

        default:
          data[key] = page.properties[key].unique_id.number;
          break;
      }
    }

    return data;
  }
}