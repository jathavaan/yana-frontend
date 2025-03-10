import { Box, Button, Link, Text, TextField } from "@features/ui";
import Grid from "@mui/material/Grid2";
import { Divider, Stack } from "@mui/material";
import { RegisterGoogleButton } from "@features/auth";

export const RegisterPage = () => {
  return (
    <Box>
      <Grid container sx={{ width: "80%" }} spacing={2}>
        <Grid size={{ md: 6 }}>
          <Stack spacing={2}>
            <Text variant="h5">Start taking better notes - sign up today</Text>
            <Stack spacing={2} direction="row">
              <TextField
                required
                disabled
                label="First name"
                type="text"
                fullWidth
              />
              <TextField
                required
                disabled
                label="Last name"
                type="text"
                fullWidth
              />
            </Stack>
            <TextField
              required
              disabled
              label="E-mail"
              type="email"
              fullWidth
            />
            <TextField
              required
              disabled
              label="Password"
              type="password"
              fullWidth
            />
            <Button buttonText="Register" disabled />
            <Divider>or register with</Divider>
            <RegisterGoogleButton fullWidth />
            <Text variant="body1">
              Already have an account? Click <Link>here</Link> to sign in
            </Text>
          </Stack>
        </Grid>
        <Grid
          size={{ md: 6 }}
          style={{
            backgroundColor: "#ff4081",
            borderRadius: "0.4rem",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            sx={{
              color: "#ffffff",
            }}
          >
            Image placeholder
          </Text>
        </Grid>
      </Grid>
    </Box>
  );
};
