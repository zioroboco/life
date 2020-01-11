import { root as render } from "./root"

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
      module.hot.accept("./root.ts", () => render(universe))
    }
  })
  .catch(console.error)
