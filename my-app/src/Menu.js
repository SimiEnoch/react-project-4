import React from 'react';

export const Menu = ({ Data }) => {
  return (
    <div className="section-center">
      {Data.map((dataItem) => {
        const { id, title, img, desc, price } = dataItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header className="img-header">
                <h4>{title}</h4>

                <h4 className="price">${price}</h4>
              </header>
              <p className="description">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};
