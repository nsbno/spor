import { ClientOnly } from "@vygruppen/spor-react";

export function DisablePreviewMode() {
  return (
    <ClientOnly>
      {(() => {
        if (globalThis.window === undefined) return null;
        // eslint-disable-next-line unicorn/prefer-global-this
        const show = window === window.parent && !window.opener;
        return show ? (
          <a href="/api/preview-mode/disable">Disable Preview Mode</a>
        ) : null;
      })()}
    </ClientOnly>
  );
}
