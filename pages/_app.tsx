import 'styles/theme.scss'
import 'styles/normalize.scss'

import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        fetcher: (_, init) => fetch(process.env.NEXT_PUBLIC_API_URL as string, init).then((res) => res.json()),
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  )
}
export default MyApp
