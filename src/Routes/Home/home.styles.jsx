import styled from 'styled-components';
import Exterior from '../../assets/images/exteriorPreview.jpg';

export const HomePageContainer = styled.div`
.homepage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding:1em;
  color: white;
}
.walkthrough {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding:2em;
}
.exteriorImage {
  width: 100%;
  height: auto;
  
}
.jumbotron {
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:center;
  height: 100vh;
  background-image: url(${Exterior});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.jumbotronTitle{
  align-items:center;
  justify-content:center;
  height: 100%;
  width: cover;
  color: white;
  opacity: .5;
  background-color: black;
  font-size: 2em;
}
.textContainer {
  text-align:center;
  justify-content:center;
  padding:1em;
  margin-left:1em;
  margin-right:1em;
  height:66%;
}
.titleContainer {
  color: white;
  background-color: black;
  text-align:center;
  justify-content:center;
  padding:1em;
  height:66%;
}

.reservation {
  color:black;
  font-size: .75em;
}
.logoFadeIn {
  position: relative;
  margin-bottom: 10em;
  color: white;
  animation: fadeIn 5s;
  border-radius: .5em;
  border: .5em solid white;
  -webkit-animation: fadeIn 5s;
  -moz-animation: fadeIn 5s;
  -o-animation: fadeIn 5s;
  -ms-animation: fadeIn 5s;
}
@keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-moz-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-webkit-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-o-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

@-ms-keyframes fadeIn {
  0% {opacity:0;}
  100% {opacity:1;}
}

`
