import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const queryClient = new QueryClient(); //almacena estados de peticiones, encarga llamadas

const RootLayout = () => {
  return (
    <>
      <StatusBar style="dark" />
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </QueryClientProvider>
    </>
  );
};

export default RootLayout;
