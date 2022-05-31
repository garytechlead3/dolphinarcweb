import styled from 'styled-components';
import Header from '../Header/Header';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: url('/element_finder.png') no-repeat center #000;
  background-size: cover;
  @media screen and (max-width: 767px) {
    height: auto;
  }
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  max-width: 144rem;
  padding: 3rem;
  margin: 0 auto;
  div {
    margin-top: 2rem;
    h1 {
      color: white;
      font-size: 4rem;
      font-weight: 500;
      font-family: 'cocogoose';
      text-align: center;
      margin-bottom: 0rem;
      @media screen and (max-width: 767px) {
        font-size: 3.2rem;
      }
    }
    h2 {
      background: #7598ec;
      background: linear-gradient(to right, #7598ec 19%, #fca9c7 78%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 4rem;
      font-weight: 500;
      font-family: 'cocogoose';
      text-align: center;
      margin-bottom: 0rem;
      @media screen and (max-width: 767px) {
        font-size: 3.2rem;
      }
    }
  }
  button {
    color: black;
    background-color: white;
    padding: 0.5rem;
    white-space: nowrap;
    width: 25rem;
    display: flex;
    margin: auto;
    display: flex;
    justify-content: center;
    margin-top: 5rem;
    @media screen and (max-width: 767px) {
      margin-top: 1rem;
    }
  }

  @media screen and (max-width: 800px) {
    button {
      width: 15rem;
    }
  }
`;

const FormContainer = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;

  div {
    display: flex;
    justify-content: space-between;
    margin: 4rem 0rem;
    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
    label {
      color: white;
      margin: 0rem 1rem;
      display: flex;
      flex-direction: column;
      @media screen and (max-width: 767px) {
        margin: 1rem 0rem;
      }
      input {
        width: 15rem;
        border: none;
        background-color: transparent;
        border-bottom: 1px solid white;
        outline: none;
        color: white;
        @media screen and (max-width: 1024px) {
          width: 10rem;
        }
        @media screen and (max-width: 767px) {
          width: 100%;
        }
      }

      .email_input {
        width: 40rem;
        outline: none;
        color: white;
        @media screen and (max-width: 1024px) {
          width: 30rem;
        }
        @media screen and (max-width: 767px) {
          width: 100%;
        }
      }
    }
  }
`;

const ElementFinderForm: React.FC = () => {
  const router = useRouter();
  interface IData {
    year: string;
    month: string;
    day: string;
    email: string;
  }

  const [data, setData] = useState<IData>();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleSubmit = (year, month,email) => {
    router.push({
      pathname: `/result/[month]`,
      query: { month, year,email },
    });
  };

  return (
    <StyledContainer>
      <Header />
      <IntroContainer>
        <div>
          <h1>Click below to see</h1>
          <h2>what elements are you turned:</h2>
        </div>
        <FormContainer>
          <div>
            <label htmlFor='year'>
              Year *
              <input
                type='number'
                value={data?.year}
                id='year'
                name='year'
                placeholder='0000'
                onChange={(e) => handleChange(e)}
              />
            </label>
            <label htmlFor='month'>
              Month *
              <input
                type='number'
                value={data?.month}
                id='month'
                name='month'
                onChange={(e) => handleChange(e)}
                placeholder='0'
              />
            </label>
            <label htmlFor='day'>
              Day *
              <input
                type='text'
                id='day'
                placeholder='0'
                name='day'
                value={data?.day}
                onChange={(e) => handleChange(e)}
              />
            </label>
            <label htmlFor='email'>
              Email *
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Enter your email'
                className='email_input'
                value={data?.email}
                onChange={(e) => handleChange(e)}
              />
            </label>
          </div>
        </FormContainer>
        <button onClick={() => handleSubmit(data?.year, data?.month,data?.email)}>
          Custom
        </button>
      </IntroContainer>
    </StyledContainer>
  );
};

export default ElementFinderForm;
