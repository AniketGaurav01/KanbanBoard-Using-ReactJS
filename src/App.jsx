import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTasks, setSearchQuery } from './redux/taskSlice';
import ListTasks from './components/ListTasks';
import Search from './components/Search';
import CreateButton from './components/CreateButton';
import Navbar from './components/Navbar';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { isMobile } from 'react-device-detect';
import { Toaster } from 'react-hot-toast';
import backgroundImage from './assets/images.jpg';  // ✅ Import image
import "./index.css";

function App() {
  const dispatch = useDispatch();
  const searchQuery = useSelector(state => state.tasks.searchQuery);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    dispatch(setTasks(savedTasks));
  }, [dispatch]);

  return (
    <>
      <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
        <Toaster />
        <div 
          className="min-h-screen"
          style={{
            backgroundImage: `url(${backgroundImage})`, // ✅ Use imported image
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <Navbar />
          <div className="flex flex-wrap justify-center p-3 gap-16 pt-8">
            <Search
              searchQuery={searchQuery}
              setSearchQuery={(query) => dispatch(setSearchQuery(query))}
            />
            <CreateButton />
          </div>
          <div className="flex flex-col items-center p-3 gap-16 pt-16">
            <ListTasks />
          </div>
        </div>
      </DndProvider>
    </>
  );
}

export default App;
