import React, { useContext } from 'react';
import './ReelsHeader.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { LoginContext } from '../../Login/LoginContext';
import { useNavigate } from 'react-router-dom';


export default function ReelsHeader() {
  const nav = useNavigate();
  const {SetShowReel,setCategory} = useContext(LoginContext)
  const onClickable = () =>{
      SetShowReel(false);
      nav('/');

  }
  return (
    <div className='ReelsHeader'>
      <div className="click" onClick={onClickable}><ArrowBackIosIcon /></div>
      <h3>Reels</h3>
      <CameraAltIcon  />
    </div>
  )
}
