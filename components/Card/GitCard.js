/*
 * @Author: XueYu 😊
 * @Date: 2019-03-15 15:27:44
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-15 17:46:44
 */
import styles from './index.scss'

export default ({info: { title }}) => (
  <div className={styles.card_git}>
    <div className={styles.card_show}></div>
    <div className={styles.card_bottom}>
      <div className={styles.card_auther}>
        <div className={styles.card_avatar}></div>
        <div className={styles.card_info}>
          <div className={styles.card_info_title}>
            <a href="###" alt={title}>{title}</a>
          </div>
          <div className={styles.card_info_name}>UserName</div>
        </div>
      </div>
      <div className={styles.card_opts}>
        <div className={styles.card_opts_watch}>22222</div>
      </div>
    </div>
  </div>
)