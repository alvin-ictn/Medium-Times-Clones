import React, { Component } from 'react'
import Image from '../../assets/img/placeholder.png'
import styles from './css/HeroImage.module.css'

export default class HeroImage extends Component {
  render() {
    return (
      <div className={styles.imageComponent}>
        <img id="imgContent" src={Image} alt=""/>
      </div>
    )
  }
}
