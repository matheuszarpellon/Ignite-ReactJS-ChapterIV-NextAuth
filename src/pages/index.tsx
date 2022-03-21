import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../contexts/AuhContext";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {signIn} = useContext(AuthContext);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const data = {
      email,
      password,
    }
    await signIn(data);
  }

  return (
    <Flex w="100%" h="100%" align="center" justify="center">
      <Box
        as="form"
        flex="1"
        maxW="sm"
        mt={44}
        borderRadius={8}
        bg="gray.800"
        p={["6", "8"]}
        onSubmit={handleSubmit}
        mb="auto"
      >
        <Heading size="lg" fontWeight="normal">
          Login
        </Heading>
        <Divider my="6" borderColor="gray.700" />
        <VStack spacing="8">
          <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </SimpleGrid>
          <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </SimpleGrid>
        </VStack>
        <Flex mt="8" justify="flex-end">
          <HStack spacing="4">
            <Link href="/users" passHref>
              <Button colorScheme="whiteAlpha">Cancelar</Button>
            </Link>
            <Button type="submit" colorScheme="pink">
              Entrar
            </Button>
          </HStack>
        </Flex>
      </Box>
    </Flex>
  );
}
