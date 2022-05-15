import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
const App = () => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const convert = async () => {
    try {
      setLoading(true);
      setResult();
      const { data } = await axios.post(
        "/api/string/convert",
        { query },
        {
          "Content-Type": "application/json",
        }
      );
      setLoading(false);
      setResult(data.result);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <Box
      bg={"darkred"}
      h={"100vh"}
      w={"100%"}
      display="flex"
      justifyContent={"center"}
      alignItems="center"
    >
      <Box
        w={"800px"}
        h={"300px"}
        bg="white"
        borderRadius={"20px"}
        boxShadow="dark-lg"
        padding={"40px"}
      >
        <Text fontSize={"3xl"} textAlign="center">
          Convert String To Integer
        </Text>
        <VStack>
          <FormControl>
            <FormLabel>Query</FormLabel>
            <Box display={"flex"}>
              <Input
                type={"text"}
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                placeholder="Enter a string to convert to string."
              />
              <Button
                marginX={"5px"}
                bg="darkred"
                onClick={convert}
                isLoading={loading}
                colorScheme={"darkred"}
              >
                Convert
              </Button>
            </Box>
          </FormControl>
          <FormControl>
            <FormLabel>Result</FormLabel>
            <Input
              placeholder="Input will be displayed here"
              value={result || ""}
              readOnly
            />
          </FormControl>
        </VStack>
      </Box>
    </Box>
  );
};

export default App;
