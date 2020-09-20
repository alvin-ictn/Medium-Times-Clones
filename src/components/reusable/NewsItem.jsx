import React, { Component } from 'react'
import styles from './css/NewsItem.module.css'

export default class NewsItem extends Component {
  render() {
    return (
      <div className={styles.news__col}>
        <div className="news--content">
          {this.props.headline ? <label className={styles.headline}>{this.props.title}</label> : <label className={styles.title}>{this.props.title}</label>}
          <p>{this.props.content}</p>
        </div>
      </div>
    )
  }
}
