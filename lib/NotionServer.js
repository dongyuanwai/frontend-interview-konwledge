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
    return  response.results.map((item) => transformer(item));
  }

  
  async create(){
    const question = {
      desc:"1212",
      category:"",
      options:"",
      explanation:"这是一个问题的答案",
      title:"这是题目",
      tag:"JavaScript",
    }

    const properties = {
      desc: {
        type: "rich_text",
        rich_text: strToArray(question.desc ?? "", 2000, []),
      },
      category: {
        type: "select",
        select: {
          name: question.category,
        },
      },
      options: {
        type: "rich_text",
        rich_text: strToArray(question.options ?? "", 2000, []),
      },
      explanation: {
        type: "rich_text",
        rich_text: strToArray(question.explanation ?? "", 2000, []),
      },
      title: {
        type: "title",
        title: [
          {
            type: "text",
            text: {
              content: question.title ?? "",
            },
          },
        ],
      },
    };

    if (question.tag) {
      properties.tag = {
        type: "relation",
        relation: [
          {
            id: question.tag,
          },
        ],
      };
    }
    const response = await this.client.pages.create({
      parent: {
        database_id: database,
      },
      properties,
    });
    return response;
  }

}

function strToArray(
  str,
  count,
  arr
){
  arr.push({
    type: "text",
    text: {
      content: str.slice(0, count),
    },
  });
  str = str.slice(count);
  if (str.length >= count) {
    return strToArray(str, count, arr);
  } else {
    return arr;
  }
}

function transformer(page) {
  let data = {};

  for (const key in page.properties) {
    switch (page.properties[key].type) {
      case "relation":
        data[key] = page.properties[key].relation[0]?page.properties[key].relation[0].id:"";
        break;

      case "title":
      case "rich_text":
        let content="";
        page.properties[key][page.properties[key].type].map((item)=>{
          if(item){
            content+=item.text.content
          }
        })
        data[key] = content
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