import type { LoaderArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ context, params, request }: LoaderArgs) => {
  console.log(request.cf);
  return request.cf;
};

export default function Profile() {
  const cf = useLoaderData<typeof loader>();
  return (
    <div>
      {cf.latitude} {cf.longitude}
    </div>
  );
}
