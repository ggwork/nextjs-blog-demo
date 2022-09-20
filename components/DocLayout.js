import MHeader from "./MHeader";
import MFooter from "./MFooter";
import { Layout, Menu } from 'antd';
import { useRouter } from 'next/router'
import styles from './DocLayout.module.scss'
const { Header, Content, Footer, Sider } = Layout;
import { globalData } from '../libs/global'
import SEO from './SEO';
// import { getFileList } from '../libs/posts-md'


export default function DocLayout(props) {
  const router = useRouter()
  let key = router.query.id || props.files && props.files[0]
  const menuFilesList = props.files && props.files.map(item => {
    return {
      key: item,
      label: item
    }
  })

  // console.log('menuFilesList:', menuFilesList)

  const fileData = props.fileData || {}

  // console.log('fileData:', fileData)

  const firstSelectedKey = props.files && props.files[0] || ''


  const siderMenuItemClick = (event) => {
    let ecKey = encodeURIComponent(event.key)
    router.push('/' + globalData.blogFloderName + '/' + ecKey)
  }

  return (
    <Layout className={styles.docLayout}>
      <SEO
        title={`${fileData.title} - ${globalData.blogName}`}
        description={fileData.description}
      />
      <Header style={{ background: 'white', borderBottom: '1px solid #f0f0f0' }}>
        <MHeader></MHeader>
      </Header>
      <Layout className={styles.docMain}>
        <Sider width={200} style={{ marginTop: '5px', background: 'none' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={[firstSelectedKey]}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={menuFilesList}
            selectedKeys={[key]}
            onClick={siderMenuItemClick}
          />
        </Sider>
        <Layout className={styles.docInfo}>
          <Content className={styles.cont}>
            <div className={styles.detail}>
              <h1 >{fileData.title}</h1>
              <p className={styles.time}><time dateTime={fileData.dateYMD}>{fileData.dateFriendly}</time></p>
              <div className={styles.cont} dangerouslySetInnerHTML={{ __html: fileData.html }}>
              </div>
            </div>
          </Content>
        </Layout>

      </Layout>
      <Footer >
        <MFooter>{globalData.footerText}</MFooter>
      </Footer>
    </Layout >
  );
}
