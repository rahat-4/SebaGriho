"use client";

import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Grid,
  GridCol,
  Group,
  Image,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { upperFirst, useToggle } from "@mantine/hooks";

import {
  IconLockFilled,
  IconMailFilled,
  IconUserFilled,
} from "@tabler/icons-react";

import { GoogleButton } from "./GoogleButton";
import { TwitterButton } from "./TwitterButton";

export function AuthenticationForm(props: PaperProps) {
  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  return (
    <Grid style={{ height: "100vh" }}>
      <GridCol
        span={4}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper {...props}>
          <Text size="lg" fw={500}>
            Welcome to{" "}
            <Text component="span" c={"#FF385C"} fw={700}>
              Sebagriho
            </Text>
            , {type} with
          </Text>

          <Group grow mb="md" mt="md">
            <GoogleButton radius="xl">Google</GoogleButton>
            <TwitterButton radius="xl">Twitter</TwitterButton>
          </Group>

          <Divider
            label="Or continue with email"
            labelPosition="center"
            my="lg"
          />

          <form onSubmit={form.onSubmit(() => {})}>
            <Stack>
              {type === "register" && (
                <TextInput
                  placeholder="Name"
                  leftSection={<IconUserFilled />}
                  value={form.values.name}
                  onChange={(event) =>
                    form.setFieldValue("name", event.currentTarget.value)
                  }
                  radius="md"
                />
              )}

              <TextInput
                required
                placeholder="Email"
                leftSection={<IconMailFilled />}
                value={form.values.email}
                onChange={(event) =>
                  form.setFieldValue("email", event.currentTarget.value)
                }
                error={form.errors.email && "Invalid email"}
                radius="md"
              />

              <PasswordInput
                required
                placeholder="Password"
                leftSection={<IconLockFilled />}
                value={form.values.password}
                onChange={(event) =>
                  form.setFieldValue("password", event.currentTarget.value)
                }
                error={
                  form.errors.password &&
                  "Password should include at least 6 characters"
                }
                radius="md"
              />

              {type === "register" && (
                <Checkbox
                  color="#FF385C"
                  label="I accept terms and conditions"
                  checked={form.values.terms}
                  onChange={(event) =>
                    form.setFieldValue("terms", event.currentTarget.checked)
                  }
                />
              )}
              <Button type="submit" radius="md" color="#FF385C">
                {upperFirst(type)}
              </Button>
              <Anchor
                component="button"
                type="button"
                c="dimmed"
                onClick={() => toggle()}
                size="xs"
              >
                {type === "register"
                  ? "Already have an account? Login"
                  : "Don't have an account? Register"}
              </Anchor>
            </Stack>
          </form>
        </Paper>
      </GridCol>
      <GridCol span={8} style={{ padding: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
          alt="logo"
          h="100vh"
        />
      </GridCol>
    </Grid>
  );
}
