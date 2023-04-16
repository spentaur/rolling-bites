import type { LoaderFunction } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import { Form, useLoaderData, useSearchParams } from "@remix-run/react";

export let loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url);
  const search = new URLSearchParams(url.search);
  return json({ search: search.get("query") });
};

export default function NewJokeRoute() {
  const data = useLoaderData();
  const [params] = useSearchParams();

  return (
    <>
      <h1>Search page</h1>
      <Form method="get">
        <input
          type="text"
          name="query"
          placeholder="Search for something"
          defaultValue={params.get("query")}
        />
      </Form>
      {data.search && <p>Search query: {data.search}</p>}
    </>
  );
}
