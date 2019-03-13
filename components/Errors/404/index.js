/*
 * @Author: XueYu 😊
 * @Date: 2019-03-13 16:33:22
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-13 18:41:25
 */
import styles from './index.scss'
import DouyinText from '../../DouyinText'

const NotFound = () => (
  <div className={`${styles.not_found}`}>
    <DouyinText text='404' width='100px'/>
    <DouyinText text='找不到页面' width='500px'/>
  </div>
)

export default NotFound