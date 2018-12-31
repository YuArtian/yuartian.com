/*
 * @Author: XueYu 😊
 * @Date: 2018-12-26 16:28:25
 * @Last Modified by: XueYu😊
 * @Last Modified time: 2018-12-31 22:53:04
 */

const Icon = ({name, color='currentColor', size, style={}, onClick}) => {
  return (
    <svg onClick={e => {e.preventDefault();onClick()}} className="icon" aria-hidden="true" fill={color} style={{fontSize: size, ...style}}>
      <use xlinkHref={`#icon-${name}`}></use>
    </svg>
  )
}

export default Icon