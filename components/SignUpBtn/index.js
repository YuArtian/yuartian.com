/*
 * @Author: XueYu 😊
 * @Date: 2019-02-28 16:00:13
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-02-28 16:06:29
 */

import React, { PureComponent } from 'react'
import styles from './index.scss'
import request from '../../utils/request'

class SignUpBtn extends PureComponent {
  state = {
    form_show: false,
    name: '',
    password: '',
  }
  /* 切换显示内容 */
  display_form = () => {
    this.setState({ form_show: !this.state.form_show })
  }
  /* form 内容变化 */
  on_formItem_change = (e, item_name) => {
    this.setState({ [item_name]: e.target.value })
  }
  /* 注册 */
  on_submit = async () => {
    const { name, password } = this.state
    if (name === '' || password === '') {
      return
    }
    const data = await request('signup', {
      method: 'POST',
      body: { name, password },
    })
    if (data) {
      alert('注册成功啦～')
    }
  }

  render(){
    const { form_show } = this.state
    if (form_show) {
      return(
        <form className={styles.signUpBtn_form}>
          <div>
            用户名：<input type='text' onChange={e => this.on_formItem_change(e, 'name')}/>
          </div>
          <div>
            密码：<input type='password' onChange={e => this.on_formItem_change(e, 'password')}/>
          </div>
          <div>
            <button type='button' onClick={this.on_submit}>提交 ~</button>
          </div>
        </form>
      )
    }
    return(
      <div className={styles.signUpBtn} onClick={this.display_form}>
        注册
      </div>
    )
  }
}
export default SignUpBtn