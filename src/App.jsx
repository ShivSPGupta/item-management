import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import AddItem from "./components/AddItem";
import ViewItems from "./components/ViewItems";
import Home from "./components/Home";
import { addItemToFirestore, getAllItems } from "./firebase/firebaseService";
import "./App.css";

const Navigation = () => {
  const location = useLocation();
  if (location.pathname !== "/view" && location.pathname !== "/add")
    return null;

  return (
    <nav className="flex gap-4 mb-4">
      <Link to="/">Home</Link>
      <Link to="/view">View Items</Link>
      <Link to="/add">Add Item</Link>
    </nav>
  );
};

const App = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const fetchedItems = await getAllItems();
    setItems(fetchedItems);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const addItem = async (item) => {
    await addItemToFirestore(item);
    fetchItems();
  };

  return (
    <Router>
      <div className="p-4">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddItem addItem={addItem} />} />
          <Route path="/view" element={<ViewItems items={items} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
