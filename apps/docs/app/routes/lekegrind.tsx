import { ActionFunction, json, LoaderFunction } from "@remix-run/node";
import { useFetcher, useLoaderData } from "@remix-run/react";
import { Stack } from "@vygruppen/spor-react";
import { useState } from "react";
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

const defaultCode = `<Stack textAlign="center">
  <Heading>Velkommen til lekegrinden</Heading>
  <Text>Her kan du teste ut hele Spor live i nettleseren.</Text>
  <Text>Alle komponentene er tilgjengelige, så du trenger ikke importere noe.</Text>
</Stack>`;

const saveToCookie = debounce((newCode: string, fetcher: any) => {
  if (fetcher.state === "submitting") {
    return;
  }
  const formData = new FormData();
  formData.set("playgroundData", newCode);
  fetcher.submit(formData, { method: "post", action: "/lekegrind" });
}, 2000);

export default function PlaygroundPage() {
  const { playgroundData: initialPlaygroundDataFromCookie } =
    useLoaderData<LoaderData>();
  const [playgroundData, setPlaygroundData] = useState(
    initialPlaygroundDataFromCookie || defaultCode
  );
  const fetcher = useFetcher();
  const handleChange = (newCode: string) => {
    setPlaygroundData(newCode);
    saveToCookie(newCode, fetcher);
  };
  return (
    <LiveProvider code={playgroundData}>
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
