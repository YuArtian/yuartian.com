/*
 * @Author: XueYu 😊
 * @Date: 2018-12-26 16:28:25
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-03-14 18:41:46
 */

const Icon = ({name, color='currentColor', size, style={}, onClick}) => {
  return (
    <svg onClick={e => {e.preventDefault();onClick && onClick()}} className="icon" aria-hidden="true" fill={color} style={{fontSize: size, ...style}}>
      <use xlinkHref={`#icon-${name}`}></use>
    </svg>
  )
}

export default Icon