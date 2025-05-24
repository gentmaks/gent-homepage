import {
  Container,
  Heading,
  Text,
  Box,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Blog = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          <Heading as="h3" fontSize={20} mb={4}>
            Blog Coming Soon
          </Heading>
          <Text>
            Stay tuned! I'm working on bringing you interesting content about technology,
            software development, and my journey in tech.
          </Text>
        </Box>
      </Container>
    </Layout>
  )
}

export default Blog
export { getServerSideProps } from '../components/chakra' 