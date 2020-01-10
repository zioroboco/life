import { html, render } from "lit-html"

import("../pkg")
  .then(engine =>
    render(
      html`
        <div>${engine.message("buddy")}</div>
      `,
      document.body
    )
  )
  .catch(console.error)
