
import podBlueprint from '../../assets/images/podBlueprint.png';
import socialContainer from '../../assets/images/socialContainer.jpeg';
import ContactUs from '../../assets/images/ContactUs.png';
import Hawaii from '../../assets/images/Hawaii.jpeg';
import Friends from '../../assets/images/Friends.jpeg';
import NestzStretched from '../../assets/images/NestzStretched2.png';

const categories = [
  {
    title: 'Buy a Nestz',
    subTitle: 'Make One Home',
    imageUrl: [NestzStretched],
    linkUrl: 'Shop',
    size: 'large',
    id: 1,
  },
  {
  title: 'Nestz',
  subTitle: 'The Story',
  imageUrl: [Hawaii],
  linkUrl: 'Story',
  id: 2
},
{
  title: 'The Details',
  subTitle: 'product specs and options',
  imageUrl: [podBlueprint],
  linkUrl: 'Specs',
  id: 3
},
{
  title: 'FAQ',
  subTitle: 'Your Questions answered',
  imageUrl: [socialContainer],
  size: 'large',
  linkUrl: 'Social',
  id: 4
},
{
  title: 'Inquiries',
  subTitle: 'Have questions?',
  imageUrl: [ContactUs],
  linkUrl: 'Contact',
  id: 5
},
{
  title: 'Social Nestz',
  subTitle: 'Share your adventure',
  imageUrl: [Friends],
  size: 'large',
  linkUrl: 'Social',
  id: 6
},
];
export default categories;
