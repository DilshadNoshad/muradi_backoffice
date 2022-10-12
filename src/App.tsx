// import { styled, Button } from "@mui/material";

import { Box, Stack } from "@mui/material";
import Content from "./components/content/Content";
import SideBar from "./components/sidebar/SideBar";
// import Typography from "@mui/material/Typography";
// let name: string; //any unknown
// let age: number | string;
// let gender: boolean;
// let array: String[]; // number[]
// let role: [number, string];

// age = "eight";
// type Person = {
//   name: string;
//   age?: number;
// };

// let printName: (name: string) => never;

// printName("Dilshad");
// let person: Person = {
//   name: "dilshad",
//   age: 30,
// };
// let lotsOfPerson: Person[];
// type Person = { name: string; age: number };

// type Work = Person & { isStudent: boolean; gender: string };
// type Work = { isStudent: boolean; gender: string };

// let info: Work = {
//   name: "Dilshad",
//   age: 36,
//   isStudent: true,
//   gender: "male",
// };

// const RedButton = styled(Button)(({theme}) => ({
//   backgroundColor: theme.palette.otherColors?.darker,
//   color: "#000",
//   "&:hover": { backgroundColor: "red" },
//   "&:disabled": { backgroundColor: "purple" },
// }));
/* <Typography variant="h6" component="p">
        h1. Heading
      </Typography> */
/* <Button variant="text" color="secondary">Text</Button>
<Button variant="contained" color="primary">Contained</Button>
<Button variant="outlined">Outlined</Button>
      <RedButton>dilshad</RedButton>
      <RedButton>dilshad</RedButton> */
const App: React.FC = () => {
  return (
    <Box>
      <Stack direction="row" spacing={1} justifyContent="space-between">
        <SideBar />
        <Content />
      </Stack>
    </Box>
  );
};

export default App;
