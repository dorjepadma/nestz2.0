import ContainerHomesMountains from '../../assets/images/ContainerHomesMountains.jpeg';
import grannyFlat from '../../assets/images/grannyFlat.jpeg';
import podBlueprint from '../../assets/images/podBlueprint.png';
import socialContainer from '../../assets/images/socialContainer.jpeg';
import ContactUs from '../../assets/images/ContactUs.png';

const categories = [
  {
    title: 'Buy a Nestz',
    subTitle: 'Make One Home',
    imageUrl: [grannyFlat],
    linkUrl: 'Shop',
    size: 'large',
    id: 1,
  },
  {
  title: 'Nestz',
  subTitle: 'The Story',
  imageUrl: [ContainerHomesMountains],
  linkUrl: 'Story',
  id: 2
},
{
  title: 'The Details',
  subTitle: 'product specs and options',
  imageUrl: [podBlueprint],
  linkUrl: 'FAQ',
  id: 3
},
{
  title: 'Inquiries',
  subTitle: 'Have questions?',
  imageUrl: [ContactUs],
  linkUrl: 'Contact',
  id: 4
},
{
  title: 'Social Nestz',
  subTitle: 'Share your adventure',
  imageUrl: [socialContainer],
  size: 'large',
  linkUrl: 'Social',
  id: 5
},
];
export default categories;
