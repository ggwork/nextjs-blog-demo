import DocLayout from "../components/docLayout";
import { getFileList } from "../libs/postsDataHealper";
import { globalData } from '../libs/global'



export default function DocList(props) {
  let files = props.files
  let fileData = props.fileData
  return (
    <DocLayout files={files} fileData={fileData}></DocLayout>
  );
}


/**
 * @returns props, makedown files and the first makedown file data
 */
export async function getStaticProps() {
  // get all makedown files
  let filesList = await getFileList(globalData.blogFloderName)
  let fileNames = filesList.map(file => {
    return file.fileName
  })
  // get the first makedown file data
  let firstFile = filesList[0]
  return {
    props: {
      files: fileNames,
      fileData: firstFile
    },
  };
}




