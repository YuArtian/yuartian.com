/*
 * @Author: XueYu 😊
 * @Date: 2019-03-13 16:33:22
 * @Last Modified by: XueYu😊
 * @Last Modified time: 2019-03-13 21:57:46
 */
import styles from './index.scss'
import DouyinText from '../../DouyinText'
import Link from 'next/link'

const NotFound = () => (
  <div className={`${styles.not_found}`}>
    <DouyinText text='404'/>
    <DouyinText text='找不到页面'/>
    <Link href='/'>
      <a style={{ marginTop: 100 }}>
        <DouyinText text='←返回­­­­­­一'/>
      </a>
    </Link>
  </div>
)

export default NotFound