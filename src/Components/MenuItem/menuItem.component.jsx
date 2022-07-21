import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';



import './menuItem.styles.scss';

const MenuItem = ({category}) => {
  const navigate = useNavigate();
  const {title, subTitle, imageUrl, size, linkUrl} = category;
  return (
    
  <Container className={`${size} menu-item`}  onClick={() => navigate(`${linkUrl}`)}>
    <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}/> 
        <div className ='content'>
          <h1 className = 'title'>{title}</h1>
          <span className ='subtitle'> {subTitle}</span>
        </div>
      </Container>)
}

export default MenuItem;
