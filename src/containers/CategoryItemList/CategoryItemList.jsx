import React from 'react'
import styles from './CategoryItemList.module.css'

const CategoryItemList = ({ category, subCategory }) => {
  console.log(subCategory[category])
  return <div>I am {category} item-list</div>
}


export default CategoryItemList