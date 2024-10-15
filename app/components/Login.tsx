import { useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/start";
import { useMutation } from "../hooks/useMutation";
import { loginFn } from "../routes/_authed";

export function Login() {
  const router = useRouter();

  const loginMutation = useMutation({
    fn: loginFn,
    onSuccess: async (ctx) => {
      if (!ctx.data?.error) {
        await router.invalidate();
        router.navigate({ to: "/" });
        return;
      }
    },
  });

  return <div>login</div>;
}
