/*
 * @Author: XueYu 😊
 * @Date: 2018-12-26 16:28:25
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2018-12-31 15:55:42
 */
// import dynamic from 'next/dynamic'

// dynamic(() => import('../../static/iconfont/iconfont'))
//icon-sider_out
// import symbol from '../../static/iconfont/sider_out.svg'

import sprite from 'svg-sprite-loader/runtime/sprite.build';
const spriteContent = sprite.stringify();

const Icon = ({name}) => {
  return (
    <svg className="icon" aria-hidden="true">
      {/* <use xlinkHref={`#icon-${name}`}></use> */}
      <use xlinkHref={`#icon-${name}`}></use>
    </svg>
  )
}

export default Icon