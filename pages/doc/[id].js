import { getFileList, getFileData } from '../../libs/postsDataHealper'
import DocLayout from "../../components/DocLayout";
import { globalData } from '../../libs/global'



export default function DocIds(props) {
  return (
    <DocLayout files={props.files} fileData={props.fileData}></DocLayout>
  )
}
/**
 * get posts path
 * @returns [ { params: { id: 'xxx' } } ]
 */
export async function getStaticPaths() {
  // console.log('getStaticPaths')
  const paths = (await getFileList(globalData.blogFloderName)).map((file) => {
    return { params: { id: file.fileName } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let files = await getFileList(globalData.blogFloderName)
  let fileData = await getFileData(globalData.blogFloderName, params.id)
  let fileNames = files.map(file => {
    return file.fileName
  })
  //  try to optimize by failed . the log is  can not find module fs
  // let targetFile = files.find(file => {
  //   return file.fileName === params.id
  // })
  // let fileData = targetFile && targetFile.html
  return {
    props: {
      files: fileNames,
      fileData,
    },
  };
}