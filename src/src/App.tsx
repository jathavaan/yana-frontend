import { RouterProvider } from "react-router";
import { router } from "@shared/constants/routes";
import { Container } from "@mui/material";

function App() {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
