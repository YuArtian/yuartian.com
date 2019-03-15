/*
 * @Author: XueYu 😊
 * @Date: 2019-03-15 14:29:37
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-15 14:35:41
 */
import styles from './index.scss'
import RollingSideMenu from '../RollingSideMenu'

const Layout = ({ children, list }) => (
  <div id={styles.app}>
    <RollingSideMenu item_list={list}/>
    {children}
  </div>
)

export default Layout