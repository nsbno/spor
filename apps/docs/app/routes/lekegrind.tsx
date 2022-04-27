import { ActionFunction, json, LoaderFunction } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { Stack } from "@vygruppen/spor-react";
import { LivePreview } from "react-live";
import { LiveEditor } from "~/features/interactive-code/LiveEditor";
import { LiveError } from "~/features/interactive-code/LiveError";
import { LiveProvider } from "~/features/interactive-code/LiveProvider";
import { debounce } from "~/utils/debounce";
import { getPlaygroundDataSession } from "~/utils/playgroundData.server";

export const action: ActionFunction = async ({ request }) => {
  const { setPlaygroundData, commit } = await getPlaygroundDataSession(request);
  const formData = await request.formData();
  const playgroundData = formData.get("playgroundData");
  if (playgroundData === null) {
    throw json({ error: "No playground data provided." }, { status: 400 });
  }
  if (typeof playgroundData !== "string") {
    throw json(
      {
        error: `Invalid playground data type ${typeof playgroundData} provided`,
      },
      { status: 400 }
    );
  }
  setPlaygroundData(playgroundData);
  return json(
    { success: true },
    {
      headers: {
        "Set-Cookie": await commit(),
      },
    }
  );
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getPlaygroundDataSession(request);
  const playgroundData = session.getPlaygroundData();

  return json(
    { playgroundData },
    {
      headers: {
        "Set-Cookie": await session.commit(),
      },
    }
  );
};

type LoaderData = {
  playgroundData: string;
};

export default function PlaygroundPage() {
  const { playgroundData } = useLoaderData<LoaderData>();
  const fetcher = useFetcher();
  const handleChange = debounce((newCode: string) => {
    const formData = new FormData();
    formData.set("playgroundData", newCode);
    fetcher.submit(formData, { method: "post", action: "/lekegrind" });
  }, 1000);
  return (
    <LiveProvider
      code={playgroundData || `<Heading>Velkommen til lekegrinden</Heading>`}
    >
      <Stack spacing={2}>
        <LiveEditor
          borderRadius="none"
          minHeight="200px"
          onChange={handleChange}
        />
        <LiveError />
        <LivePreview />
      </Stack>
    </LiveProvider>
  );
}
