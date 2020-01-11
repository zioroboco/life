import { html, render } from "lit-html"
import { State } from "./types"

export const app = ({ message }: State) => {
  render(
    html`
      <div>${message}</div>
    `,
    document.body
  )
}
