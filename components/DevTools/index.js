/*
 * @Author: XueYu 😊
 * @Date: 2019-04-01 10:21:57
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-04-01 10:24:36
 */
import * as React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

export default createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h"
               changePositionKey="ctrl-w">
    <LogMonitor />
  </DockMonitor>
)