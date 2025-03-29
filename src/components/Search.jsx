import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../redux/taskSlice";

const Search = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(state => state.tasks.searchQuery);

  return (
    <div className="flex justify-center mb-4">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          placeholder="Search tasks..."
          className="border-2 border-slate-200 rounded-3xl pl-12 pr-4 py-3 w-72 text-base focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-start h-[50px] bg-white shadow-sm hover:border-slate-300 transition-all duration-200"
        />
        <svg
          className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Search;
