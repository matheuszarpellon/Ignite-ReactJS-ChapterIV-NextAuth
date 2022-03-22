import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { Can } from "../components/Can";
import { AuthContext } from "../contexts/AuthContext";
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Dashboard() {
  const { user, signOut } = useContext(AuthContext);

  useEffect(() => {
    api
      .get("/me")
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Flex w="100vw" h="100vh" p="8" justify="center">
      <Box display="flex" flexDirection="column" alignItems='center' justifyContent="center">
      <Heading>Dashboard: {user?.email}</Heading>
      <Button colorScheme="blue" mt="8" onClick={signOut} maxW="32">SignOut</Button>
      <Can permissions={['metrics.list']}>
      <Flex mt="8">Métricas</Flex>
      </Can>
      </Box>
    </Flex>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get("/me");

  return {
    props: {},
  };
});
