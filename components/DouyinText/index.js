/*
 * @Author: XueYu 😊
 * @Date: 2019-03-13 15:50:10
 * @Last Modified by: XueYu😊
 * @Last Modified time: 2019-03-13 21:47:45
 */

/*
  <div className={styles.douyin_style_font}>
    <div className={styles.douyin_style_title} data-title={text}>
      <span>{text}</span>
    </div>
  </div>

  <div className={`${styles.douyin_style_font} ${styles.shake}`} style={{ ['--shake-offset']: '-2px', ['--shake-height']: '20px', ['--shake-delay']:'0s' }}>
    <div className={`${styles.douyin_style_title} ${styles.douyin_style_title_shake}`} data-title={text}>
      <span>{text}</span>
    </div>
  </div>

  <div className={`${styles.douyin_style_font} ${styles.shake}`} style={{ ['--shake-offset']: '-5px', ['--shake-height']: '10px', ['--shake-delay']:'0.5s' }}>
    <div className={`${styles.douyin_style_title} ${styles.douyin_style_title_shake}`} data-title={text}>
      <span>{text}</span>
    </div>
  </div>
*/

import styles from './index.scss'

const DouyinText = ({text}) => (
  <div className={styles.douyin_style}>
    <div className={styles.placeholder}>{text}</div>
  {
    ['one', 'two', 'three'].map(item => (
      <div key={item} className={styles[`font_${item}`]} >

        <div className={styles[`title_${item}`]} data-title={text}>
          <span>{text}</span>
        </div>
      </div>
    ))
  }
  </div>
)
export default DouyinText