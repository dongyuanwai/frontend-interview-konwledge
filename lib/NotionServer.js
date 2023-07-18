import { Client } from "@notionhq/client";

const auth = "secret_IxclknQTeQkisakhiI6axgSdPK8010HIUwNw2qXhj1H";
const database = "4e792796eb60444ca76df0f7212ccd42";
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

        default:
          data[key] = page.properties[key];
          break;
      }
    }

    return data;
  }
}
