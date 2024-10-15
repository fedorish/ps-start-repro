import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { fetchCompetitions } from "../../utils/competitions";

export const Route = createFileRoute("/_authed/competitions")({
  ssr: false,
  loader: () => fetchCompetitions(),
  component: CompetitionsComponent,
});

function CompetitionsComponent() {
  const competitions = Route.useLoaderData();

  return (
    <div className="p-2 flex gap-2">
      <ul className="list-disc pl-4">
        {[...competitions].map((competition) => {
          return (
            <li key={competition.id} className="whitespace-nowrap">
              <Link
                to="/competitions/$competitionId"
                params={{
                  competitionId: competition.id,
                }}
                className="block py-1 text-blue-800 hover:text-blue-600"
                activeProps={{ className: "text-black font-bold" }}
              >
                <div>{competition.id}</div>
              </Link>
            </li>
          );
        })}
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}
