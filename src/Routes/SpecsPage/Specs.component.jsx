import React from 'react';
import { Card, ListGroup, Image } from 'react-bootstrap'
// import podBlueprint from '../../assets/images/podBlueprint.png'
import OfficeBlueprint from '../../assets/images/DetailsPage/officeModel.png'
import BedroomBlueprint from '../../assets/images/DetailsPage/BedroomModel.png'

import './Specs.styles.scss'


const ProductSpecs = () => (

// list of possible products and details of products in the nestz unit in a list group graph form. Along with approximate diagram and blueprint of the Nestz unit
<div className='detailsPage'>
<Card className='detailsCard'>
 
      <div className='blueprintCard'>
      
      <h1 className="detailsTitle">NESTZ DETAILS </h1>
      <h2> Office Model Blueprint</h2>
            <Image className='blueprintImage' src={OfficeBlueprint} alt='office Nestz blueprint'/>
      <h2> Bedroom Model Blueprint</h2>
            <Image className='blueprintImage' src={BedroomBlueprint} alt='bedroom Nestz blueprint'/>
      </div>
    
      <Card.Text>Nestz are highly customizable and built with quality ingredients. They are delivered where you want them and when you want them. Available for purchase or rent based on your needs.</Card.Text>
      <ListGroup>
        All Nestz come with the following or have the following options: 
        <ListGroup.Item as='li' className="specList">Dimensions: Length 19.02 feet
                          Width 7.87 feet
                          Height 9.18 feet</ListGroup.Item>
        <ListGroup.Item as='li' className="specList">Insulation: R15 and air barrier- 3 inches of Rockwool insulation and 5/8 inch closed cell polyurethane steel clad</ListGroup.Item >
        <ListGroup.Item as='li' className="specList">Ceiling Insulation: R22 and air barrier- 7 inches of Rockwool and blanket insulation.</ListGroup.Item>
        <ListGroup.Item as='li' className="specList">Heavy duty Galvanized steel frame </ListGroup.Item>
        <ListGroup.Item as='li' className="specList">2 <a href="https://www.pellabranch.com/windows-doors/windows/single-hung-windows/"> Pella
              </a> double pane windows- 3ft wide by 4ft tall in living area</ListGroup.Item>
        <ListGroup.Item as='li' className="specList">1 awning window double pane 1.5ft * 2ft in bathroom</ListGroup.Item>
        <ListGroup.Item as='li' className="specList"> Bathroom consisting of: 1 shower 32 inches wide by 48 inches long
                                            1 macerating toilet.
                                            1 hand wash sink.</ListGroup.Item>
        <ListGroup.Item as='li' className="specList">Bedroom Unit contains a 32" x 48" inch bathroom with shower</ListGroup.Item>
        <ListGroup.Item as='li' className="specList">Office Unit contains a 32" x 48" inch without bathroom with shower</ListGroup.Item>
        <ListGroup.Item as='li' className="specList">Electrical 30 amp 120V service with 5 outlets and 6 lights</ListGroup.Item>
        <ListGroup.Item as='li' className="specList">Masticating toilet and shower can push 150 foot width a 15 foot head line to septic</ListGroup.Item>
        <ListGroup.Item as='li' className="specList">HeatStorm electric heater with the temperature controlled by app on your phone</ListGroup.Item>
        <ListGroup.Item as='li' className="specList">Kitchen with range top, sink, refrigerator, and freezer is optional</ListGroup.Item>
        <ListGroup.Item as='li' className="specList">Solar units are absolutely doable, call us</ListGroup.Item>
        <ListGroup.Item as='li' className="specList">Unit comes with an on demand propane water heater, an electric water heater can be installed upon request but would require a 50 amp electric configuration, call us</ListGroup.Item>
      </ListGroup>
  
    </Card>

</div>


)

export default ProductSpecs;
