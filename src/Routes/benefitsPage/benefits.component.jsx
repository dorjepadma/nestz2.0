import React from 'react';
import { Card, Container } from 'react-bootstrap'
import boathouseNestz from '../../assets/images/BenefitsPage/boathouseNestz.jpeg'
import humbleHouse from '../../assets/images/BenefitsPage/humbleHouse.jpeg'


import './benefits.styles.scss'


const Benefits = () => (

<div className='benefitsPage'>
<Container>
<h1 className="title">THE BENEFITS OF NESTZ </h1>
    <Card className='benefitsCard'>
      <Card.Title>Nestz are highly customizable and affordable</Card.Title>
      <Card.Body>
      <Card.Img className='detailImage' src={boathouseNestz} alt='a boat house built from pod housing'/>
      <Card.Text>Nestz are highly customizable and built with quality ingredients. Within days you can have a studio, an office, a guest room, or a mother in law unite that comes wired and ready to live in. It is easy to update with all of the latest modern technology, has great insulation, and is easy to connect to utilities. These units in most cases will not need city, county or state approval to put up and use. It is the simplest, easiest, quickest and most affordable housing you can find. Place it easily on land or sea.</Card.Text>
      </Card.Body>
    </Card>
    <Card className='benefitsCard'>
      <Card.Title>Nestz are low impact on your environment</Card.Title>
      <Card.Body>
      <Card.Img className='detailImage' src={humbleHouse} alt='a cute country cottage pod house'/>
      <Card.Text>You can rent a Nestz, or purchase one, or rent and then purchase the one you rented. We deliver them to you and put them where you have prepared the ground. The space is efficient and highly utilitarian while being completely economical and environmentally responsible. Need more room? get a second Nestz. They are modular and like "Legos" you can expand your Nestz house to meet your needs. Here is a great article on pod housing from Medium </Card.Text>
      <Card.Text> Here is a great article on pod housing from Medium:</Card.Text>
      <Card.Link href="https://medium.com/wild-way/pod-homes-what-are-they-all-about-ac6f6dde4230">Medium article on Pod Housing</Card.Link>
      </Card.Body>
    </Card>
</Container>
</div>

)

export default Benefits;
