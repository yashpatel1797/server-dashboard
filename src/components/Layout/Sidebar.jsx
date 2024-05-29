import React from 'react';

const Sidebar = () => {
  const list = ['Dashboard', 'Resources', 'Notifications', 'Settings'];
  return (
    <aside className="bg-gray-800 text-gray-300 py-6 px-4 md:w-64 md:block fixed left-0 top-0 bottom-0 z-20">
      <ul className="space-y-4 pt-20">
        {list.map(item => 
          <li>
            <a href="#" className='flex items-center px-4 py-2 text-gray-100 hover:bg-blue-700 rounded-md px-3 py-2 transition duration-150 ease-in-out'>
                <span>{item}</span>
            </a>
          </li>)
        }
      </ul>
    </aside>
  );
};

export default Sidebar;
