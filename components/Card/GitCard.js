/*
 * @Author: XueYu 😊
 * @Date: 2019-03-15 15:27:44
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-15 17:46:44
 */
import styles from './index.scss'

export default ({info}) => (
  <div key={info.name} className={styles.card_git}>
    Gitcard
  </div>
)