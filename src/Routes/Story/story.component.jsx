import React from 'react';

import { Card } from 'react-bootstrap';
import RelaxingBirds from '../../assets/audio/RelaxingBirds.mp3'


import './Story.styles.scss';

//story page with forest path background. Story by Rob and Sinead, edited by me.
const Story = () => (
<div className='storyPage'>
  <div className="storyTitle">
  <h1 >OUR STORY</h1>
  </div>
  <Card className='storyCard'>
<Card.Body>
<Card.Title>
  <h2>
    Born from love and a couple Pacific Northwest people looking to make everyone's life better.
    </h2>
    </Card.Title>

<Card.Text> 
Everyone should be able to have a house. Regulations and construction times are cost prohibitive and affordable ownership has become out of reach for many people. We are setting out to change that. Whether you have just purchased a piece of property or need an affordable mother in law unit, we can get you an extra room or house immediately at a price point that works for you. 
</Card.Text>
<Card.Text> 
This is the dream of Nestz. Instant housing for as when or long as you need it on your property. 
</Card.Text>
<Card.Text>
Nestz is the vision of Rob and Sinead. It came about when Rob and Sinead wanted to build their dream home in the Columbia River Gorge. It was to be an underground structure with a green roof, solar and geothermal heating. Unfortunately, they did not do their homework and found out too late that a governmental agency has an easement on their property and would not grant approval to build the new structure.
</Card.Text>
<Card.Text> 
This led Rob and Sinead to pivot and change their dream. They found a nice lava lot in Hawaii and thought they may just use it to camp when they were on the island. It only took one windy and rainy night to convince them that a tent on lava is not a good combination. Lumber is exceedingly expensive on the island, so Rob started looking for alternative form of housing that would be mobile. He looked at shipping containers and started to modify one intent on sending it to Hawaii when he was finished. He soon figured out this is not an ideal situation.  
</Card.Text>
<Card.Text>
After exploring shipping containers, Rob discovered an amazing new concept of housing coming out of China.  Houses were being constructed in a modular fashion and then assembled like Legos. Sinead and Rob started to think of all the ways a mobile room could be used. Mobile hotel, office or studio space, low income housing, AirBnB, emergency shelter, elder family member care, just to name a few. They realized this would benefit new property owners and people looking for quick, well built affordable housing. Rob and Sinead decided to bring this technology to the United States. Nestz was born to bring a warm, comfortable, homey place to wherever you want it to be. 
</Card.Text>
</Card.Body>

  </Card>
 
  <audio controls
    className='birdSong'
    id="birdsong"
    component="audio"
    autoPlay='true'
    hidden
    >
  <source src={RelaxingBirds} type="audio/mpeg" volume='0.25'/>
  </audio>
</div>
)

export default Story;
