import { Routes, route, Route } from 'react-router-dom'
import LearnHOC from './pages/LearnHOC'
function App() {

  const Button = (props) => <button style={props.style}>Click Me</button>
  const Text = (props) => <p style={props.style}>Testing</p>

  const StyleButton = LearnHOC(Button)
  const StyleText = LearnHOC(Text)

  return (
    <div>
      <StyleButton />
      <button />
      <StyleText />
      <Routes>
        <Route path='/' element={<LearnHOC />} />
      </Routes>
    </div>
  );
}

export default App;
