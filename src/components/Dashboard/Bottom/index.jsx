import React, { Component } from 'react'
import NewsItem from '../../reusable/NewsItem';
import styles from '../css/Bottom__section.module.css'

export default class BottomSection extends Component {
  render() {
    const contents = this.props.news.slice(3,this.props.news.length)
    // const maxContent = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 576 ? 2 : 1
    // const maxPage = Math.ceil((this.props.news.length - 3 )/ maxContent)
    return (
      <div className={styles["main--bottom-section"]}>
        {contents.map((item,index)=>(
          <NewsItem headline = {item.headline} title = {item.title} content = {item.content} id= {item.id + index} key={item.id + index}/>
        ))}
        {/* {Array.from(Array(maxPage).keys()).map((index) => (
          <div key={index} className="main--bottom-section--news">
          {this.props.news.slice(3+(index*maxContent),maxContent*(index+1)+3).map((item,index) => (
            <NewsItem headline = {item.headline} title = {item.title} content = {item.content} id= {item.id + index} key={item.id + index}/>
          ))}
          </div>
        ))} */}
        {/* {contents.map((item,index)=> (
          <>
          
          <div class="dummy" key={item.id + index + 1} id= {item.id + index + 1}></div>
        </>
        ))} */}
      </div>
    )
  }
}
