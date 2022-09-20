import fs from 'fs'
import path from "path";
import fm from "front-matter";
import { remark } from "remark";
import remarkhtml from "remark-html";
import * as dateFormatHelper from "./dateFormatHelper";

const fileExt = "md";

async function formatFileData(fileData) {
  const file = path.join(dirPath, `${fileName}.${fileExt}`)
  const data = fs.readFileSync(file, "utf8")
  let matter = fm(data)
  let html = (await remark().use(remarkhtml).process(matter.body)).toString();
  // format date
  const date = matter.attributes.date;
  matter.attributes.date = date.toUTCString();
  matter.attributes.dateYMD = dateFormatHelper.ymd(date);
  matter.attributes.dateFriendly = dateFormatHelper.friendly(date);
  return
}

/**
 * get makedown files
 * @param {String} dir makedownfile fileFloder
 * @returns {Array} example [a.md, b.md, c.md]
 */
export async function getFileList(dir = "./") {
  const dirPath = path.isAbsolute(dir) ? dir : path.resolve(process.cwd(), dir)
  const fileNames = fs.readdirSync(dirPath).filter(fileName => { return path.extname(fileName) === `.${fileExt}` });

  /**
  attributes: {
    title: '',
    description: '',
    date: 2022-01-20T00:00:00.000Z,
    tags: [ 'HTML', 'CSS', 'REACT' ]
  },
   */
  let filesList = await Promise.all(fileNames.map(async fileName => {
    let fileNameWithoutExt = path.basename(fileName, path.extname(fileName))
    return await getFileData(dir, fileNameWithoutExt)
  }))
  // sort by date
  filesList.sort((preFObj, curFObj) => {
    return new Date(preFObj.date).getTime() - new Date(curFObj.date).getTime()
  })
  return filesList

}

/**
 * get Makedown fileData
 * @param {String} dir  
 * @param {String} fileName
 * @returns
 */
export async function getFileData(dir = "./", fileName) {
  const dirPath = path.isAbsolute(dir) ? dir : path.resolve(process.cwd(), dir)
  const file = path.join(dirPath, `${fileName}.${fileExt}`)
  const data = fs.readFileSync(file, "utf8")
  let matter = fm(data)
  let html = (await remark().use(remarkhtml).process(matter.body)).toString();
  // format date
  const date = matter.attributes.date;
  matter.attributes.date = date.toUTCString();
  matter.attributes.dateYMD = dateFormatHelper.ymd(date);
  matter.attributes.dateFriendly = dateFormatHelper.friendly(date);
  return {
    fileName,
    html,
    ...matter.attributes,
  };
}