import { Universe } from "../pkg"
import { app as render } from "./app"

import("../pkg")
  .then(engine => {
    const universe = engine.Universe.new()

    const renderLoop = () => {
      render(universe)
      universe.tick()
      requestAnimationFrame(renderLoop)
    }

    requestAnimationFrame(renderLoop)

    if (module.hot) {
      module.hot.accept("./app.ts", () => render(universe))
    }
  })
  .catch(console.error)
