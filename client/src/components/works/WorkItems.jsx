import React from 'react';

const WorkItems = ({item}) => {
  return (
    <div className="works__card" key={item.id}>
        <img src={item.image} alt="" className='works__img' />
        <h3 className="works__title">{item.title}</h3>
        <a href="#" className="works__button">
            Demo <i className="bx bx-right-arrow-alt works__button-icon"></i> 
        </a>
    </div>
  );
};

export default WorkItems;