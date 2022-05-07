import styled from 'styled-components'
import Image from 'next/image'
import Social from '../Social/Social'
import { GiHamburgerMenu } from 'react-icons/gi'
import useWindowSize from '../../hooks/useWindowSize'
import React, { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'

const StyledHeader = styled.header`
    max-width: 144rem;
    margin: 3rem auto;
    padding: 0rem 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 5;
    & > div {
        &:nth-child(1) {
            flex: 2;
        }
        &:nth-child(2) {
            flex: 2;
        }
        &:nth-child(3) {
            flex: 1;
        }
    }
`

export const HeaderItem = styled.div`
    a {
        font-weight: bold;
        text-decoration: none;
        padding-right: 5rem;
        font-size: 2rem;
        color: #222;
        transition: all 0.25s ease-in-out;
        &:nth-last-child(1) {
            padding-right: 0rem;
        }
        &:hover {
            color: #fff;
        }
    }
    &.menu {
        text-align: right;
        svg {
            width: 3rem;
            height: 3rem;
            color: #fff;
            cursor: pointer;
            position: relative;
            z-index: 1;
            transition: all 0.25s ease-in-out;
            &:hover {
                color: #fa87b5;
            }
        }
    }
    img {
        position: relative;
        z-index: 10;
    }
`

export const links = [
    {
        title: 'About',
        link: '#about',
        aria: 'about Dolphin Arc NFT',
    },
    {
        title: 'Join',
        link: '#join',
        aria: 'click here to join the community',
    },
    {
        title: 'Roadmap',
        link: '#roadmap',
        aria: 'see the project roadmap',
    },
    {
        title: 'Team',
        link: '#team',
        aria: 'learn about the team',
    },
]

const StyledMenu = styled.div`
    text-align: center;
    background: #fff;
    padding-bottom: 3rem;
    & > div {
        padding: 3rem;
        a {
            font-size: 4vw;
            @media screen and (max-width: 600px) {
                font-size: 2.8rem;
            }
            &:hover {
                color: #fa87b5;
            }
        }
    }
`

const StyledOffHeader = styled.div`
    max-width: 144rem;
    padding: 3rem;
    display: flex;
    & > div {
        flex: 1;
        &:nth-child(2) {
            padding-top: 3rem;
            text-align: right;
            svg {
                width: 3rem;
                height: 3rem;
                cursor: pointer;
                transition: all 0.25s ease-in-out;
                &:hover {
                    color: #fa87b5;
                }
            }
        }
    }
`

const Header: React.FC = () => {
    const windowSize = useWindowSize()
    const [show, setShow] = useState<boolean>(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    return (
        <>
            <StyledHeader>
                <HeaderItem>
                    <Image
                        src="/logo.svg"
                        width="270"
                        height="80"
                        alt="Dolphin Arc NFT"
                    />
                </HeaderItem>
                {/* <HeaderItem>
                    { windowSize.width > 1200 && 
                    links.map((link) => {
                        return (
                            <a key={link.title} aria-label={link.aria} href={link.link}>{link.title}</a>
                        )
                    })}
                </HeaderItem> */}
                <Social />
            </StyledHeader>
            <Offcanvas show={show} onHide={handleClose} placement="top">
                <StyledOffHeader>
                    <div>
                        <Image
                            src="/logo.svg"
                            width="270"
                            height="80"
                            alt="Dolphin Arc NFT"
                        />
                    </div>
                    <div>
                        <GiHamburgerMenu onClick={() => handleClose()} />
                    </div>
                </StyledOffHeader>
                <StyledMenu>
                    {links.map((link) => {
                        return (
                            <HeaderItem key={link.title}>
                                <a aria-label={link.aria} href={link.link}>
                                    {link.title}
                                </a>
                            </HeaderItem>
                        )
                    })}
                </StyledMenu>
            </Offcanvas>
        </>
    )
}

export default Header
