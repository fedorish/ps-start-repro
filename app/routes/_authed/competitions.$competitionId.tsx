import { ErrorComponent, createFileRoute } from "@tanstack/react-router";
import { NotFound } from "../../components/NotFound";
import type { ErrorComponentProps } from "@tanstack/react-router";
import { fetchCompetition } from "../../utils/competitions";

export const Route = createFileRoute("/_authed/competitions/$competitionId")({
  loader: ({ params: { competitionId } }) => fetchCompetition(competitionId),
  errorComponent: PostErrorComponent as any,
  component: PostComponent,
  ssr: false,
  notFoundComponent: () => {
    return <NotFound>Post not found</NotFound>;
  },
});

export function PostErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />;
}

function PostComponent() {
  const competition = Route.useLoaderData();

  return (
    <div className="space-y-2">
      <h4 className="text-xl font-bold underline">{competition.name}</h4>
      <div className="text-sm">{competition.password}</div>
    </div>
  );
}
