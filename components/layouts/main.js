import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelComputerLoader from '../voxel-computer-loader'

const LazyVoxelComputer = dynamic(() => import('../voxel-computer'), {
  ssr: false,
  loading: () => <VoxelComputerLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Gent's homepage" />
        <meta name="author" content="Gent Maksutaj" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Gent Maksutaj" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@gentmaks" />
        <meta name="twitter:creator" content="@gentmaks" />
        <meta property="og:site_name" content="Gent Maksutaj" />
        <meta name="og:title" content="Gent Maksutaj" />
        <meta property="og:type" content="website" />
        <title>Gent Maksutaj - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelComputer />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
