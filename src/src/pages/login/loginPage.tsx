﻿import { LoginButtonGoogle } from "@features/auth";
import { Box, Button, Link, Text, TextField } from "@features/ui";
import Grid from "@mui/material/Grid2";
import { Divider, Stack } from "@mui/material";
import { useNavigate } from "react-router";

export const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Grid container sx={{ width: "80%" }} spacing={2}>
        <Grid size={{ md: 6 }}>
          <Stack spacing={2} alignItems="stretch">
            <Text variant="h5">Pick up where you left off! Sign in</Text>
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
            <Button buttonText="Sign in" disabled />
            <Divider>or sign in with</Divider>
            <LoginButtonGoogle fullWidth />
            <Text variant="body1">
              Don't have an account yet? Click{" "}
              <Link onClick={() => navigate("/register")}>here</Link> to
              register!
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
