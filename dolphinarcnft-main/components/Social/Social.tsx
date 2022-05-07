import styled from 'styled-components'
import { FaDiscord, FaTwitter, FaInstagram, FaBook } from 'react-icons/fa'

interface SocialIconProps {
    link?: string
    icon: JSX.Element
    aria: string
    caption?: string
    nolink?: boolean
}

export const SocialItem = styled.div`
    text-align: right;
    a {
        padding-right: 1.5rem;
        font-size: 3rem;
        &:nth-last-child(1) {
            padding-right: 0rem;
        }
        svg {
            transition: all 0.25s ease-in-out;
            position: relative;
            top: -1rem;
            transform: scale(1);
            color: #fff;
        }
        &:hover {
            svg {
                color: #fff;
                transform: scale(1.2);
            }
        }
    }
    @media screen and (max-width: 500px) {
        a {
            font-size: 1.6rem;
        }
    }
`

export const socialIcons: SocialIconProps[] = [
    {
        link: 'https://dsc.gg/dolphinarc',
        icon: <FaDiscord />,
        aria: 'visit our discord channel',
        caption: 'Discord',
    },
    {
        link: 'https://twitter.com/dolphin_arc',
        icon: <FaTwitter />,
        aria: 'visit our twitter page',
        caption: 'Twitter',
    },
    {
        link: 'https://www.instagram.com/nft.dolphin/',
        icon: <FaInstagram />,
        aria: 'follow us on instagram',
        caption: 'Instagram',
    },
    {
        link: 'https://z-adalia.gitbook.io/dolphinarc-nft-whitepaper/',
        icon: <FaBook />,
        aria: 'read our whitepaper',
        caption: 'Whitepaper',
    },
]

export const SocialIcon: React.FC<SocialIconProps> = (props) => {
    const { link, icon, aria, nolink } = props
    return nolink ? (
        <div aria-label={aria}>{icon}</div>
    ) : (
        <a href={link} aria-label={aria} target="_blank" rel="noreferrer">
            {icon}
        </a>
    )
}

const Social = () => {
    return (
        <SocialItem>
            {socialIcons.map((icon) => {
                return (
                    <SocialIcon
                        key={icon.aria}
                        link={icon.link}
                        icon={icon.icon}
                        aria={icon.aria}
                    />
                )
            })}
        </SocialItem>
    )
}

export default Social
