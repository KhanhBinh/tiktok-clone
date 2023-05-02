import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/Routes';
function App() {
  return (
    <Router>
      <div>
        <div>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              return <Route path={route.path} element={<Page />} />;
            })}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
