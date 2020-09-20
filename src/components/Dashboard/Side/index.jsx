import React, { Component } from 'react'
import NewsItem from '../../reusable/NewsItem';
import styles from '../css/Side__section.module.css'

export default class SideSection extends Component {
  render() {
    const contents = this.props.news.slice(1,3)
    return (
      <div className={styles["main--side-section"]}>
        {contents.map(item => (
          <NewsItem headline = {item.headline} title = {item.title} content = {item.content} key={item.id}/>
        ))}
      </div>
    )
  }
}
