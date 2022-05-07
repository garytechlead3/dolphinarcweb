import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const stagger = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			default: {
				staggerChildren: 0,
			},
		},
	},
};

export const toggleButton = {
	initial: {
		x: 0,
	},
	animate: {
		x: 15,
	},
	exit: {
		x: 0,
	},
};

export const fadeIn = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			delay: 1,
		},
	},
};

export const fadeInTop = {
	initial: {
		opacity: 0,
		y: -100,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.5,
		},
	},
};

export const fadeInLeft = {
	initial: {
		opacity: 0,
		x: 100,
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1,
		},
	},
};

export const fadeInRight = {
	initial: {
		opacity: 0,
		x: -100,
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			delay: 1.5,
		},
	},
};

export const exit = {
	initial: {
		opacity: 1,
	},
	animate: {
		opacity: 0,
	},
};

export const headerAnimation = {
	animate: {
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.5,
		},
	},
};

export const title = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			when: 'afterChildren',
		},
	},
};

export const navigation = {
	initial: {
		opacity: 0,
		y: -10,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			default: {
				duration: 1.25,
				when: 'beforeChildren',
			},
		},
	},
};

export const GlobalPadding = styled.div`
	padding: 0rem ${(props) => props.theme.padding};
`;

export const YPadding = styled.div`
	padding: ${(props) => props.theme.padding} 0rem;
`;

export const XPadding = styled.div`
	padding-left: ${(props) => props.theme.padding};
	padding-right: ${(props) => props.theme.padding};
`;

export const XCPadding = styled.div`
	padding-left: ${(props) => props.padding};
	padding-right: ${(props) => props.padding};
`;

export const YCPadding = styled.div`
	padding: ${(props) => props.padding} 0rem;
`;

//max-container
export const MaxContainer = styled.div`
	padding: 0rem ${(props) => props.theme.padding};
	max-width: ${(props) => props.theme.maxWidth};
	margin: 0 auto;
`;

//mid-container
export const MidContainer = styled.div`
	padding: 0rem ${(props) => props.theme.padding};
	max-width: ${(props) => props.theme.midWidth};
	margin: 0 auto;
`;

//small-container
export const SmContainer = styled.div`
	padding: 0rem ${(props) => props.theme.padding};
	max-width: ${(props) => props.theme.smWidth};
	margin: 0 auto;
`;

//full-width
export const FullWidth = styled.div`
	width: 100%;
	margin: 0 auto;
`;

//flex 50/50 split
export const FlexEven = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	div {
		flex: 1;
	}
`;

//flex 1/3 split
export const FlexOneThree = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: ${(props) => props.theme.midWidth}) {
		display: block;
	}
	div:nth-child(1) {
		flex: 1;
	}
	div:nth-child(2) {
		flex: 2;
	}
`;

//flex 3/1 split
export const FlexThreeOne = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: ${(props) => props.theme.midWidth}) {
		display: block;
	}
	div:nth-child(1) {
		flex: 2;
	}
	div:nth-child(2) {
		flex: 1;
	}
`;

//3 column grid
export const GridThree = styled.div`
	display: grid;
	grid-gap: 2rem;
	transition: all 0.25s ease-in-out;
	grid-template-columns: repeat(3, 1fr);
	@media screen and (max-width: ${(props) => props.theme.midWidth}) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (max-width: 520px) {
		display: block;
		div {
			margin: ${(props) => props.theme.padding} 0rem;
			text-align: center;
			p {
				max-width: 30rem;
				margin: 0 auto;
			}
		}
	}
`;

//2 column grid
export const GridTwo = styled.div`
	display: grid;
	grid-gap: 2rem;
	transition: all 0.25s ease-in-out;
	@media screen and (max-width: ${(props) => props.theme.smWidth}) {
		display: block;
		div {
			margin: ${(props) => props.theme.padding} 0rem;
		}
	}
`;

//main button
export const MainButton = styled(motion.a)`
	padding: 0.5rem 1.5rem;
	text-decoration: none;
	transition: all 0.25s ease-in-out;
	color: ${(props) => props.theme.colors.primary};
	border: 0.3rem solid ${(props) => props.theme.colors.primary};
	display: inline-block;
	margin: 1rem 0rem;
	&:hover {
		background: ${(props) => props.theme.colors.primary};
		text-decoration: none;
		cursor: pointer;
		color: #fff;
	}
`;

export const AltButton = styled(motion.a)`
	padding: 1.25rem 4.25rem;
	text-decoration: none;
	transition: all 0.25s ease-in-out;
	color: #000;
	font-weight: bold;
	font-size: 3rem;
	background: #fff;
	border: 0.3rem solid #fff;
	border-radius: 1rem;
	display: block;
	max-width: 20rem;
	margin: 1rem auto;
	text-align: center;
	&:hover {
		background: #000;
		text-decoration: none;
		cursor: pointer;
		border: 0.3rem solid #000;
		color: #fff;
		cursor: not-allowed;
	}
`

//flexcenter
export const FlexCenter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	height: auto;
`;

//flexend
export const FlexEnd = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	margin: 0 auto;
	height: 0 auto;
`;

//used to describe portfolio pieces
export const Meta = styled(motion.div)`
	display: flex;
	align-items: flex-start;
	max-width: 80rem;
	margin: 0 auto;
	div {
		padding-right: ${(props) => props.theme.padding};
		&:nth-child(1) {
			flex: 1.2;
		}
		&:nth-child(2) {
			flex: 1.2;
		}
		&:nth-child(3) {
			flex-basis: auto;
			min-width: 9rem;
			max-width: 10rem;
			padding-right: 0;
		}
	}
	ul {
		li {
			display: inline;
			margin-right: 1.5rem;
			img {
				transition: all 0.25s ease-in-out;
				&:hover {
					transform: scale(1.1);
				}
			}
		}
		margin-bottom: ${(props) => props.theme.padding};
	}
	@media screen and (max-width: ${(props) => props.theme.midWidth}) {
		display: block;
		ul {
			margin-bottom: 1rem;
		}
	}
`;

export const PortfolioWrapper = styled.div`
	max-width: ${(props) => props.theme.maxWidth};
	margin: 0 auto;
	display: flex;
	justify-content: center;
	.portfolio-content {
		flex: 1;
		height: auto;
	}
`;

export const Button = styled(MainButton)`
	text-align: center;
	width: 100%;
`;

const blockAnimation = keyframes`
	0% { width: 0rem; opacity: 0 }
	100% { opacity: 1; width: ${(props) => props.width} }
`;

export const Block = styled.div`
	position: absolute;
	z-index: -1;
	transition: all 0.25s ease-in-out;
	height: ${(props) => props.height};
	bottom: ${(props) => props.bottom};
	left: 50%;
	background: ${(props) => props.theme.colors.primary};
	width: ${(props) => props.width};
	animation: ${blockAnimation};
	animation-duration: 1.25s;
	transform: translate(-50%, 0%);
	animation-iteration-count: forwards;
`;

export const HR = styled.div`
	border-bottom: 0.1rem solid ${(props) => props.theme.colors.grey};
	margin: 1.25rem 0rem 1.25rem 0rem;
`;

export const Headline = styled.div`
	& > div {
		font-family: ${(props) => props.theme.fonts.header};
		font-weight: bold;
		font-size: 3rem;
		line-height: 3.2rem;
	}
	div:nth-child(1) {
		color: ${(props) => props.theme.colors.text};
	}
	div:nth-child(2) {
		color: ${(props) => props.theme.colors.primary};
	}
`;

export const LeftHeader = styled.div`
	display: flex;
	margin-bottom: 2.5rem;
	div:nth-child(2) {
		flex: 1;
		.line {
			width: 98%;
			margin: 1.9rem 0rem 0rem 2rem;
			border-bottom: 0.1rem solid ${(props) => props.theme.colors.grey};
		}
	}
	@media screen and (max-width: 600px) {
		display: block;
		text-align: center;
		margin-top: 3rem;
		div:nth-child(2) {
			.line {
				display: none;
			}
		}
	}
`;

export const PrimaryBlock = styled.div`
	z-index: 0;
	position: absolute;
	top: ${(props) => props.top};
	left: ${(props) => props.left};
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	border-radius: ${(props) => props.borderRadius};
	background: ${(props) => props.theme.colors.primary};
`;

export const ImageBackground = styled.div`
	background: ${(props) => props.background} no-repeat top center;
	background-size: cover;
`;

export const Arrow = styled.div`
	color: #fff;
	opacity: 0.5;
	font-size: 7rem;
	text-align: center;
	position: absolute;
	left: 50%;
	transform: translate(-50%, 0%);
`;

export const Pagination = styled(FlexEven)`
	.next,
	.prev {
		flex: 1;
		&:hover {
			cursor: pointer;
		}
		span {
			border: 0.25rem solid #000;
			padding: 0.5rem 1rem;
			transition: all 0.25s ease-in-out;
			font-size: 2.5rem;
			font-family: ${(props) => props.theme.fonts.header};
			svg {
				position: relative;
				top: 0.3rem;
				width: 2rem;
			}
			&:hover {
				background: #000;
				color: #fff;
				box-shadow: 0.5rem 0.5rem 0 #333;
			}
		}
	}
	.prev {
		text-align: right;
	}
	.pages {
		flex: 1;
		text-align: center;
	}
`;

const rotate = keyframes`
	0% 
        { transform: rotate(0deg) translate3d(0, 0, 0) }
    25%
        { transform: rotate(3deg) translate3d(0, 0, 0) }
    50%
        { transform: rotate(-3deg) translate3d(0, 0, 0) }
    75%
        { transform: rotate(1deg) translate3d(0, 0, 0) }
    100%
        { transform: rotate(0deg) translate3d(0, 0, 0) }
`
  
const storm = keyframes`
    0%
        { transform: translate3d( 0, 0, 0) translateZ(0) }
    25%
        { transform: translate3d( 4px, 0, 0) translateZ(0) }
    50%
        { transform: translate3d( -3px, 0, 0) translateZ(0) }
    75%
        { transform: translate3d( 2px, 0, 0) translateZ(0) }
    100%
        { transform: translate3d( 0, 0, 0) translateZ(0) }
`

export const ShakeButton = styled.button`
  position: relative;
  outline: none;
  text-decoration: none;
  border-radius: 1.5rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: not-allowed;
  text-transform: uppercase;
  height: 60px;
  width: 210px;
  opacity: 1;
  background-color: #ffffff;
  border: none;
  transition: all .25s ease-in-out;
  span {
      font-size: 1.6rem;
      font-weight: bold;
      letter-spacing: 0.7px;
  }
  &:hover {
      animation: ${rotate} 0.7s ease-in-out both;
	  background: #eee;
      span {
          animation: ${storm} 0.7s ease-in-out both;
          animation-delay: 0.06s;
	  }
  }
`