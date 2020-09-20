import React, { Component } from 'react';
import SideSection from './Side'
import MainSection from './Main'
import BottomSection from './Bottom'
import styles from './css/Main.module.css'

export default class Dashboard extends Component {
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.main__row}>
          <MainSection news={this.props.news}/>
          <SideSection news={this.props.news}/>
        </div>
          <BottomSection news={this.props.news}/>
      </div>
    )
  }
}
