import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import items from './data';
import Categories from './categorys';
import Menu from './menu';


const allCategories = ["all" , ...new Set ( items.map((item) => item.category))];
 
function App () {

  const [menuItems , setMenuItems] = React.useState(items)
  const [cate , setCate] = React.useState(allCategories);

    const filterItem = (category) => {
      if (category === 'all') {
        setMenuItems(items);
        return;
      }
      const newData = items.filter((item) => item.category === category );
      setMenuItems(newData);
    }

  return(
    <main>
      <section className='menu-section'> 
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItem = {filterItem}  cate = {cate} />
        <Menu items = {menuItems} />
      </section>
    </main>
  )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
