import Content from "./components/Structure/Content";
import Sidebar from "./components/Structure/Sidebar";


function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <Content />
      </div>
    </div>
  );
}

export default App;


