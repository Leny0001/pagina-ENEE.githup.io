import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 80px 60px;
  background: #706F6F;
  position: relative;
  bottom: 0;
  width: 100%;
  heigth: 100%;
  margin-top: 50px;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
  justify-content: center;
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    margin-bottom: 100px;
    /* background: red; */
    @media (min-width: 1024px) {
      margin-left: 195px;
    }
`

export const Section = styled.div`
background: #000000;
position: absolute;
bottom: 0;
left:0;
right: 0;
width: 100%;
heigth: 100%;
margin-top: 10%;
`

export const Texto = styled.div`
position: relative;
color: white;
text-align: center;
margin-top: 3%;
justify-content: center;
margin-left: 40px;
margin-bottom: 20PX;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

export const Icon = styled.div`
 justify-content: center;
  display: flex;
  margin-left: 30px;
`
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  text-decoration: none;
  justify-content: center;
  margin-left: 70px;
  &:hover {
      color: #fff;
      transition: 200ms ease-in;
  }
`;
   
export const FooterIcon = styled.a`
  color: #000;
  margin-bottom: 5px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
  margin-left: 70px;
`;

export const Parrafo = styled.p`
  margin-left: 40px;
  color: #fff;
`;

export const TParrafo = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 40px;
font-weight: bold;
margin-left: 40px;
`;
