import { LoginPage } from "@pages/login";
import { Container } from "@mui/material";
import { RegisterPage } from "@pages/register";
import { DocumentPage } from "@pages/document/documentPage.tsx";

function App() {
  return (
    <Container>
      <LoginPage />
      <br />
      <RegisterPage />
      <DocumentPage />
    </Container>
  );
}

export default App;
