import { notFound } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import axios from "redaxios";
import { API_URL } from "./constants";

import { ICompetition } from "@/utils/types";
import { getSupabaseServerClient } from "@/utils/supabase";

// export type PostType = {
//   id: string;
//   title: string;
//   body: string;
// };

export const fetchCompetition = createServerFn(
  "GET",
  async (competitionId: string) => {
    const supabase = await getSupabaseServerClient();
    const { data, error } = await supabase.auth.getSession();

    const post = await axios
      .get<ICompetition>(`${API_URL}/web/competitions/${competitionId}`, {
        headers: { Authorization: `Bearer ${data.session?.access_token}` },
      })
      .then((r) => {
        console.log(r);
        return r.data;
      })
      .catch((err) => {
        console.error(err);
        if (err.status === 404) {
          throw notFound();
        }
        throw err;
      });

    return post;
  }
);

export const fetchCompetitions = createServerFn("GET", async () => {
  const supabase = await getSupabaseServerClient();
  const { data, error } = await supabase.auth.getSession();

  console.info("Fetching comps...");
  return await axios
    .get<Array<ICompetition>>(`${API_URL}/web/competitions/all`, {
      headers: { Authorization: `Bearer ${data.session?.access_token}` },
    })
    .then((r) => r.data);
});
