import IndexLayout from "../components/IndexLayout";
import SEO from "../components/SEO";
import Link from "next/link";
import { Button, Space } from 'antd'
import Image from 'next/image'
import snapanoPng from '../public/snapano.png'
import styles from './index.module.scss'
import { globalData } from '../libs/global';

export default function Index() {
  return (
    <>
      <SEO title={globalData.blogName} description={globalData.blogTitle}></SEO>
      <IndexLayout>
        <div className={styles.main}>
          <div className={styles.imgWrap}>
            <Image src={snapanoPng} alt="" layout="fixed"></Image>
          </div>
          <h1 className={styles.title}>Nextjs Blog Demo</h1>
          <div className={styles.des}>
            A simple blog demo based on <span>nextjs</span> + <span>antd</span> + <span>scss</span>
          </div>
          <div className={styles.btn}>
            <Space>
              <Link href='/doc'>
                <Button size="large" type="primary" >Discover Now</Button>
              </Link>
              <Link href='https://github.com/ggwork/nextjs-blog-demo.git'>
                <Button size="large">Visit On Github</Button>
              </Link>
            </Space>
          </div>
        </div>
      </IndexLayout>
    </>
  );
}