import './App.css';
import jwt_decode from "jwt-decode";

const decodeToken = (token) => {      
  const decode = jwt_decode(token);
  if (decode.exp * 1000 < new Date().getTime()) {
      console.log('Expired');
  }
};

decodeToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzIyNzJjYmM2M2RiMjVlY2RhOGUxYiIsImlhdCI6MTY1MTY1OTAzNCwiZXhwIjoxNjUxNjU5MDM1fQ.L9Luxg0WRcYlmexL3800Skz7wnP7SZ5n7l3rii-OWt0');

function App() {
  return (
    <div className="App">
      ... börja design här ...
    </div>
  );
}

export default App;
