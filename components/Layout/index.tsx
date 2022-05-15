import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { localeAtom } from 'core/atoms';
import { useSetAtom } from 'jotai';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';
import { Locale } from 'translations';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const setLocale = useSetAtom(localeAtom);
  return (
    <>
      <Box
        as="nav"
        borderBottom="1px"
        borderBottomColor={useColorModeValue(
          'blackAlpha.100',
          'whiteAlpha.100'
        )}
        py={2}
        mb={5}
      >
        <Container maxW="container.md">
          <Flex justifyContent="space-between">
            <IconButton
              aria-label="theme"
              variant="ghost"
              onClick={toggleColorMode}
              icon={colorMode === 'light' ? <RiMoonFill /> : <RiSunFill />}
            />
            <HStack dir="ltr">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLocale(Locale.Ar)}
              >
                AR
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLocale(Locale.En)}
              >
                EN
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLocale(Locale.Ku)}
              >
                KU
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>
      {children}
      <Box as="footer" pos="fixed" w="full" bottom={0} py={5}>
        <Container
          maxW="container.md"
          display="flex"
          justifyContent="space-between"
        >
          <Text>2022 Meer Bahadin</Text>
          <Link href="https://github.com/meerbahadin/crystal">Github</Link>
        </Container>
      </Box>
    </>
  );
};

export default Layout;
