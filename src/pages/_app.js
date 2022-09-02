import react from 'react'
// import { useState } from 'react'
import { TagApiProviderGlobal } from '../components/context/TagApiProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <TagApiProviderGlobal>
      <Component {...pageProps} />
    </TagApiProviderGlobal>
  )
}

export default MyApp
