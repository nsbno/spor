import { useEffect, useState } from "react";

export function DisablePreviewMode() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line unicorn/prefer-global-this
    setShow(window === window.parent && !window.opener);
  }, []);

  return show && <a href="/api/preview-mode/disable">Disable Preview Mode</a>;
}
