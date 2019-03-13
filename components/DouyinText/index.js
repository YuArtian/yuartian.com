/*
 * @Author: XueYu 😊
 * @Date: 2019-03-13 15:50:10
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-13 18:43:50
 */
import styles from './index.scss'

const DouyinText = ({text, width, height}) => (
  <div className={styles.douyin_style}>
    {/* <div className={styles.douyin_style_font}>
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
    </div> */}


  {
    ['one', 'two', 'three'].map(item => (
      <div className={styles[`font_${item}`]} style={{width: width || '100vw', height: height || '70px'}}>
        <div className={styles[`title_${item}`]} data-title={text}>
          <span>{text}</span>
        </div>
      </div>
    ))
  }
  </div>
)
export default DouyinText