import Message from "./Message";
import ListGroup from "./components/ListGroup"; 

function App() {
  let items = ["Ruda", "Zabrze", "Bytom", "Świony", "Kato"];
  return (
  <div>
    <ListGroup items={items} heading="Miasta" />
    </div>
  );
  // <div><Message></Message></div> 
}

export default App;