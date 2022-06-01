import React from 'react'
import styled from 'styled-components'
import Social, { socialIcons } from '../Social/Social'
import Image from 'next/image'

const StyledContainer = styled.div`
    background: #2c2943;
    padding: 5rem;
`

const StyledFlex = styled.div`
    display: flex;
    max-width: 110rem;
    margin: 0 auto;
    div {
        h3 {
            font-size: 1.6rem;
            color: #ffcdea;
        }
        p {
            font-size: 1.6rem;
            color: #fff;
        }
        &:nth-child(1) {
            width: 30rem;
            a {
                text-decoration: none;
                color: #ffcdea;
                padding: 0.75rem 3.5rem;
                border: 0.25rem solid #ffcdea;
                border-radius: 0.25rem;
                transition: all 0.25s ease-in-out;
                &:hover {
                    background: #ffcfea;
                    color: #000;
                }
            }
        }
        &:nth-child(2) {
            display: flex;
            width: 100%;
            align-items: flex-end;
            justify-content: flex-end;
            img {
                max-width: 26rem;
                height: auto;
                display: block;
            }
        }
    }
    padding-bottom: 5rem;
    border-bottom: 0.1rem solid #7598ec;
    @media screen and (max-width: 670px) {
        display: block;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        & > div:nth-child(1) {
            width: 100%;
            p {
                max-width: 20rem;
                margin: 0rem auto;
                padding-bottom: 3rem;
            }
        }
        & > div:nth-child(2) {
            display: none;
        }
    }
`

const StyledFooter = styled.footer`
    padding: 2.5rem 0rem;
    max-width: 110rem;
    margin: 0 auto;
    display: flex;
    & > div {
        &:nth-child(1) {
            position: relative;
            bottom: 1.8rem;
            flex-grow: 1;
        }
    }
    @media screen and (max-width: 700px) {
        display: block;
        & > div {
            text-align: center;
        }
    }
`

const Footer = () => {
    return (
        <StyledContainer>
            <StyledFlex>
                <div>
                    <h3>Join Our Community</h3>
                    <p>
                        Subscribe Discord server channel to stay informed of our
                        news
                    </p>
                    <a href={socialIcons[0].link}>Join our server</a>
                </div>
                <div>
                    <img src="/dolphin-footer.webp" alt="Dolphin Arc" />
                </div>
            </StyledFlex>
            <StyledFooter>
                <div>
                    <Image
                        src="//logo.svg"
                        width="270"
                        height="80"
                        alt="Dolphin Arc NFT"
                    />
                </div>
                <Social />
            </StyledFooter>
        </StyledContainer>
    )
}

export default Footer
