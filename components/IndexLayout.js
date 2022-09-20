import MHeader from "./MHeader";
import MFooter from "./MFooter";
import { Layout } from 'antd';
import { globalData } from '../libs/global'

const { Header, Content, Footer } = Layout;


export default function IndexLayout({ children }) {
  return (
    <Layout>
      <Header style={{ background: 'white', borderBottom: '1px solid #f0f0f0' }}>
        <MHeader></MHeader>
      </Header>
      <Content style={{ background: 'white' }}>{children}</Content>
      <Footer >
        <MFooter>{globalData.footerText}</MFooter>
      </Footer>
    </Layout >
  );
}
