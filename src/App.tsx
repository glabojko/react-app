import Message from "./Message";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup"; 

function App() {
  // let items = ["Ruda", "Zabrze", "Bytom", "Świony", "Kato"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // }
  return (
  <div>
    {/* <ListGroup items={items} heading="Miasta" onSelectItem={handleSelectItem}/> */}
    <Alert />
    </div>
  );
  // <div><Message></Message></div> 
}

export default App;