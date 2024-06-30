import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3rem;
  display: grid;
  place-items: center;

  .row {
    display: flex;
    align-items: center; /* Centra verticalmente */
  }
  .row.children {
    flex: 1;
  }
  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #25CE6C;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    max-width: 80%;
    z-index: 1000;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
  input,
  textarea {
    display: block;
    margin-left: 10px;
    padding: 8px;
    width: 100%;
    max-width: 400px;
  }
  .popup-content {
    padding: 20px;
    text-align: center;
  }
  .popup.hidden {
    opacity: 0;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  button .spinner {
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top: 4px solid white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
  }
  button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1rem;
    width: 100vh;
    input,
    textarea {
      width: 60rem;
      padding: 1rem 2rem;
      border-radius: 1.6rem;
      outline: none;
      border: none;
      background: none;
      border: 1px solid #fff;
      color: white;
      font-weight: 600;
      &::placeholder {
        color: #fff;
      }
    }

    textarea {
      height: 20rem;
      overflow-y: auto;
      resize: none;
    }

    button {
      padding: 1rem 6rem;
      text-transform: uppercase;
    }
  }

  @media (max-width: 740px) {
    form {
      width: 100%;

      input,
      textarea {
        width: 100%;
      }
    }
  }
`;

export const ContainerSucces = styled.div`
  margin-top: 10rem;
  text-align: center;

  button {
    border-radius: 0.6rem;
    padding: 1rem;
    margin-top: 0.8rem;
    text-transform: uppercase;
    text-align: center;
    color: #fbfbfb;
  }
`;
