import { app as render } from "./app"

import("../pkg")
  .then(engine => {
    const state = {
      message: engine.init(window.navigator.userAgent),
    }
    render(state)
    if (module.hot) {
      module.hot.accept("./app.ts", () => render(state))
    }
  })
  .catch(console.error)
