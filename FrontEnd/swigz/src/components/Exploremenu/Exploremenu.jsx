import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../Assests/assets'
import { FootItem } from '../FoodItems/FootItem'
import { Fooddisplay } from '../Fooddisplay/Fooddisplay'

export const Exploremenu = ({category ,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring from a delectable arrays of dishes</p>
        <div className='explore-menu-list'>
        { menu_list.map((item, index) => {
                            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}  key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
        </div>
      
      <hr/>
      <Fooddisplay category={category} />
    </div>
  )
}
