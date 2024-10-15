import { createFileRoute, Outlet } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import { Login } from "../components/Login";
import { getSupabaseServerClient } from "../utils/supabase";
import { PowerSyncDatabase } from "@powersync/web";
import { AppSchema } from "@/powersync/AppSchema";
import React from "react";
import { SupabaseConnector } from "@/utils/SupabaseConnector";
import Logger from "js-logger";

export const db = new PowerSyncDatabase({
  schema: AppSchema,
  database: {
    dbFilename: "example.db",
  },
});

export const loginFn = createServerFn(
  "POST",
  async (
    payload: {
      email: string;
      password: string;
    },
    { request }
  ) => {
    const supabase = await getSupabaseServerClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: payload.email,
      password: payload.password,
    });
    if (error) {
      return {
        error: true,
        message: error.message,
      };
    }
  }
);

export const Route = createFileRoute("/_authed")({
  ssr: false,
  beforeLoad: ({ context }) => {
    if (!context.user) {
      throw new Error("Not authenticated");
    }
  },
  errorComponent: ({ error }) => {
    if (error.message === "Not authenticated") {
      return <Login />;
    }

    throw error;
  },

  component: AuthedLayoutComponent,
});

function AuthedLayoutComponent() {
  const [connector] = React.useState(new SupabaseConnector());
  const [powerSync] = React.useState(db);

  React.useEffect(() => {
    // Linting thinks this is a hook due to it's name
    Logger.useDefaults(); // eslint-disable-line
    Logger.setLevel(Logger.DEBUG);
    // For console testing purposes
    (window as any)._powersync = powerSync;

    powerSync.init();
    const l = connector.registerListener({
      initialized: () => {},
      sessionStarted: () => {
        powerSync.connect(connector);
      },
    });

    connector.init();

    return () => l?.();
  }, [powerSync, connector]);

  return (
    <div>
      <h1>Authed Layout</h1>
      <Outlet />
    </div>
  );
}
