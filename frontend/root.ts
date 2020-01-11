import { html, render } from "lit-html"
import { Universe } from "../pkg"

import * as styles from "./styles.css"

export const root = (universe: Universe) => {
  render(
    html`
      <div class=${styles.window}>
        <pre>${universe.render()}</pre>
      </div>
    `,
    document.body
  )
}
