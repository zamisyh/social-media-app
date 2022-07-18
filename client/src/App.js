import "./App.scss"
import "./pages/home/Home.scss"
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
function App() {
  return (
    <div className="App">
       <div className="blur" style={{ top: '-18%', right: '0' }}></div>
       <duv className="blur" style={{ top: '36%', left: '-8rem'  }}></duv>
       {/* <Home /> */}
       <Profile />
    </div>
  );
}

export default App;
