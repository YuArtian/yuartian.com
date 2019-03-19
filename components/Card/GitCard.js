/*
 * @Author: XueYu 😊
 * @Date: 2019-03-15 15:27:44
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-19 18:45:22
 */
import styles from './index.scss'
import Link from 'next/link'

export default ({info: { title, avatar, user_name, html_url, download_url }}) => (
  <div className={styles.card_git}>
    <div className={styles.card_show}>

    </div>
    <div className={styles.card_bottom}>
      <div className={styles.card_auther}>
        <img title={user_name} src={avatar} className={styles.card_avatar} alt={user_name}/>
        <div className={styles.card_info}>
          <div className={styles.card_info_title}>
            {/* <a target='_blank' href={html_url} alt={title}>{title}</a> */}
            <Link href={`/articledefault?download_url=${download_url}`}>
              <a>{title}</a>
            </Link>
          </div>
          <div className={styles.card_info_name}>{user_name}</div>
        </div>
      </div>
      <div className={styles.card_opts}>
        <div className={styles.card_opts_watch}>22222</div>
      </div>
    </div>
  </div>
)