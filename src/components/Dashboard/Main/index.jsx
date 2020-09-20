import React, { Component } from 'react'
import HeroImage from '../../reusable/HeroImage';
import NewsItem from '../../reusable/NewsItem';
import styles from '../css/Main__section.module.css'
export default class MainSection extends Component {
  componentDidMount(){
    let imgElement = document.querySelector('#imgContent');
    let listener = ['load','resize'];
    listener.forEach(item => {
      window.addEventListener(`${item}`,function() {
        imgElement.parentNode.nextElementSibling.style.height = window.innerWidth >= 576 ? `${Math.floor((imgElement.offsetHeight - imgElement.parentNode.nextElementSibling.firstChild.firstChild.offsetHeight)/19)*19 + imgElement.parentNode.nextElementSibling.firstChild.firstChild.offsetHeight}px` : 'unset'

        if(window.innerWidth >= 1024) {
          imgElement.parentNode.parentNode.nextSibling.style.height = `${imgElement.offsetHeight}px`
          imgElement.parentNode.parentNode.nextSibling.childNodes.forEach(item => {
            item.style.height = `${Math.floor((imgElement.offsetHeight/2 - item.firstChild.firstChild.offsetHeight)/19)*19+item.firstChild.firstChild.offsetHeight}px`
          })
        }else{
          imgElement.parentNode.parentNode.nextSibling.style.height = "unset";
          imgElement.parentNode.parentNode.nextSibling.childNodes.forEach(item =>  item.style.height = " unset")
        }
      })
    })
  }
  render() {
    const {headline,title,content} = this.props.news[0]
    return (
      <div className={styles["main--main-section"]}>
        <HeroImage />
        <NewsItem headline = {headline} title = {title} content = {content}/>
      </div>
    )
  }
}
