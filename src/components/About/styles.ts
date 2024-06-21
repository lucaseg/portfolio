import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: flex;
  height : 100vh;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .lenguages {
    display: flex;
    justify-content: flex;
  }
  .skills-title {
  display: flex;
  justify-content: space-between;
}
.skills-title h3 {
  flex: 1;
}
  .hard-skills{ 
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 10rem;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size :3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
  
  

  .about-image{
    text-align: center;
   img{
     margin-top: 2rem;
     width: 75%;
     filter: grayscale(0);
     transition: filter 0.5s;
     &:hover{
       filter: grayscale(0);
     }
   }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
  }

        
  }

`