import Button from "./components/button/button";


function App() {

  return (
    <div style={{
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        backgroundColor: "black",
        padding: "20px",
        minHeight: "100vh"
      }}>
      <Button label="Label" onClick={() => alert("Button Clicked!")} />
    </div>
  )
}

export default App
