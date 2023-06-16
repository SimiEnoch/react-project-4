import React, { useState } from 'react';
import './App.css';
import { Menu } from './Menu';
import { Categories } from './Categories';
import { Data } from './Data';

const allCategories = [
  'All',
  ...new Set(Data.map((data) => data.category)),
];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(Data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(Data);
      return;
    }
    const newItems = Data.filter(
      (data) => data.category === category
    );
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <p>Our Menu</p>
          <div className="underline">_______</div>
        </div>
        <Categories
          categories={categories}
          filterItems={filterItems}
        />
        <Menu Data={menuItems} />
      </section>
    </main>
  );
}

export default App;
