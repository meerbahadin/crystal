import type { NextPage } from 'next';
import Head from 'next/head';
import { Code, Container, Heading, Text } from '@chakra-ui/react';
import { useTranslate } from 'core/lib/hooks/use-translate';
import Crystal from 'components/Crystal';

const Home: NextPage = () => {
  const { t } = useTranslate();
  return (
    <>
      <Head>
        <title>
          Crystal | Boilerplate written in Next.js, Chakra UI, Jotai, and
          Typescript
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/crystal.svg" />
      </Head>

      <Container
        as="main"
        maxW="container.md"
        display="grid"
        placeContent="center"
        placeItems="center"
        minH="75vh"
      >
        <>
          <Crystal />
          <Heading fontWeight="light" fontSize="6xl">
            {t('title')}
          </Heading>
          <Text fontSize="lg" my={10} textAlign="center">
            {t('description')}
          </Text>
          <Text my={10} dir="ltr">
            Get started by editing <Code>pages/index.tsx</Code>
          </Text>
        </>
      </Container>
    </>
  );
};

export default Home;
