import AppLoader from '@/store/appLoader'
import store from '@/store/createStore'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <AppLoader>
                <Component {...pageProps} />
            </AppLoader>
        </Provider>
    )
}
