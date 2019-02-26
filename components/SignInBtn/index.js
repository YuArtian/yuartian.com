/*
 * @Author: XueYu 😊
 * @Date: 2019-02-26 17:08:04
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-02-26 18:30:00
 */

import React, { PureComponent } from 'react'
import styles from './index.scss'
import request from '../../utils/request'

class SignInBtn extends PureComponent {
  state = {
    form_show: false,
    user_name: '',
    user_password: '',
  }
  /* 切换显示内容 */
  display_form = () => {
    this.setState({ form_show: !this.state.form_show })
  }
  /* form 内容变化 */
  on_formItem_change = (e, item_name) => {
    console.log('e',e.target.value)
    this.setState({ [item_name]: e.target.value })
  }
  /* 注册 */
  on_submit = async () => {
    const { user_name, user_password } = this.state
    if (user_name === '' || user_password === '') {
      return
    }
    console.log('on_submit')
    const data = await request('signin', {
      method: 'POST',
      body: { user_name, user_password },
    })
    console.log('data',data)
  }

  render(){
    const { form_show } = this.state
    if (form_show) {
      return(
        <form className={styles.signInBtn_form}>
          <div>
            用户名：<input type='text' onChange={e => this.on_formItem_change(e, 'user_name')}/>
          </div>
          <div>
            密码：<input type='password' onChange={e => this.on_formItem_change(e, 'user_password')}/>
          </div>
          <div>
            <button type='button' onClick={this.on_submit}>提交 ~</button>
          </div>
        </form>
      )
    }
    return(
      <div className={styles.signInBtn} onClick={this.display_form}>
        signInBtn
      </div>
    )
  }
}
export default SignInBtn