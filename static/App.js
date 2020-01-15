import * as React from "https://cdn.pika.dev/@reactesm/react/^0.1.0"
import * as ReactDOM from "https://cdn.pika.dev/@reactesm/react-dom/^0.1.1"

function App () {
  return React.createElement(() => {
    return React.createElement('div', null, 'bar')
  })
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))

