interface ButtonProps {
  title: string
}

function Button(props: ButtonProps) {
  return <button>{props.title}</button>
}
function App() {
  return (
    <div>
      <h1>Hello Wolrd</h1>
      <Button title="Nlw Aula 1"/>
    </div>
  )
}

export default App
