import { html, render } from "lit-html"
import { Universe } from "../pkg"

export const app = (universe: Universe) => {
  render(
    html`
      <div>${universe.render()}</div>
    `,
    document.body
  )
}
