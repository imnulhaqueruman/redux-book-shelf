import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const readingLength = useSelector((state) =>{
    return state.books.readingList.length;
  })
  const finishedLength = useSelector(state =>{
    return state.books.finishedList.length
  })
  return (
    <div className='col-md-3'>
      <ul className='list-group sticky-top  py-2'>
        <NavLink as='li' className='list-group-item' to='/' exact>
          Discover
        </NavLink>
        <NavLink as='li' className='list-group-item' to='/reading'>
          Reading List <span className='badge badge-sm bg-primary'>{readingLength}</span>
        </NavLink>
        <NavLink as='li' className='list-group-item' to='/finish'>
          Finished Books <span className='badge badge-sm bg-primary'>{finishedLength}</span>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
