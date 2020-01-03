const render = () => {
  import("../pkg")
    .then(engine => {
      document.body.innerHTML = `<div>${engine.message()}</div>`
    })
    .catch(console.error)
}

render()
