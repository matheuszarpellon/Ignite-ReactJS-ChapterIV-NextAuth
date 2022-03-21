import { Heading } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuhContext";
import { api } from "../services/api";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.get("/me")
    .then(response => 
      console.log(response))
    .catch((err) => 
      console.error(err));
  }, []);

  return (
    <Heading>Dashboard: {user?.email}</Heading>
  )
}
