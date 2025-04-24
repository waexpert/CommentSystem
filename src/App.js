import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyComponent from './component';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyComponent />} />
      </Routes>
    </Router>
  );
}
