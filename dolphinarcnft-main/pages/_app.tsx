import { ThemeProvider } from 'styled-components'
import MainContextProvider from '../hooks/MainContext'
import MainLayout from '../components/MainLayout/MainLayout'
import GlobalStyle from '../styles/styles'
import theme from '../styles/themes'
import '../styles/fonts.css'
import '../styles/fonts.css';

function MyApp({ Component, pageProps }) {
    return (
        // easily implement dark mode here
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <MainContextProvider>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </MainContextProvider>
        </ThemeProvider>
    )
}

export default MyApp
