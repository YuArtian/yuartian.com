/*
 * @Author: XueYu 😊
 * @Date: 2019-03-15 15:23:00
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-19 13:45:46
 */
import GitCard from './GitCard'
import styles from './index.scss'

/* 3个一组打包 */
const bale_cards = cards_arr => {
  let result = []
  cards_arr.reduce((pre, current, index) => {
    if ((index+1)%3 === 0) {
      result.push([...pre, current])
      return []
    } else {
      return [...pre, current]
    }
  }, [])
  return result
}
/* 生成 Flex Cards 网格布局 */
const flex_cards = cards_arr => {
  if (Array.isArray(cards_arr)) {
    const col_num = 3
    let result = []
    let to_bale_arr = Array.from(cards_arr)

    const left_num = cards_arr.length%col_num
    if (left_num !== 0) {
      result = to_bale_arr.splice(-1, left_num)
      for(let i=0; i<=(col_num-result.length); i++){
        result.push(<div className={styles.card_fill} key={`card_fill_${i}`}></div>)
      }
    }
    const baled_arr = bale_cards(to_bale_arr)
    return [...baled_arr, result].map((row, index) => (
      <div key={`card_row_${index}`} className={`${row.length===3?styles.card_row_full:styles.card_row_part}`}>
        {row.map(card => card.id?<GitCard key={card.id} info={card}/>:card)}
      </div>
    ))
  }
}

export {
  GitCard, flex_cards,
}