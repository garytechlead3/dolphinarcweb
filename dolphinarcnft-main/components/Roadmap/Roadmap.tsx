import React from 'react'
import styled from 'styled-components'
import useWindowSize from '../../hooks/useWindowSize'

const StyledContainer = styled.div`
    padding: 7.5rem 0rem;
    background: url('/roadmap-bg.webp') bottom left no-repeat;
    background-size: cover;
    img {
        width: 100%;
        height: auto;
        display: block;
        margin: 0 auto;
        padding: 5rem 0rem;
        &.mobile {
            max-width: 25rem;
        }
    }
    h2 {
        max-width: 40rem;
        text-align: right;
        font-size: 4.8rem;
        color: #fff;
        font-weight: 300;
        span {
            font-size: 6.4rem;
            color: #fff;
            font-weight: bold;
        }
        @media screen and (max-width: 600px) {
            text-align: left;
            padding-left: 5rem;
        }
    }
`

const StyledLine = styled.div`
    height: 0.2rem;
    max-width: 30rem;
    background: linear-gradient(91.6deg, #7598ec 48.65%, #fca9c7 110.03%);
    margin-bottom: 5rem;
    @media screen and (max-width: 600px) {
        max-width: 20rem;
    }
`

const Roadmap = () => {
    const windowSize = useWindowSize()
    return (
        <StyledContainer>
            <h2>
                road<span>map</span>
            </h2>
            <StyledLine />
            {windowSize.width > 1000 ? (
                <img src="/roadmap.webp" alt="Dolphin Arc roadmap" />
            ) : (
                <img
                    src="/roadmap-mobile.webp"
                    alt="Dolphin Arc roadmap"
                    className="mobile"
                />
            )}
        </StyledContainer>
    )
}

export default Roadmap
