import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import { useEffect } from 'react'
import LayoutWithSidebar from './Components/LayoutWithSidebar/LayoutWithSidebar';
import NotFound from './pages/NotFound/NotFound';
import ProjectTaskLayout from './Components/ProjectTaskLayout/ProjectTaskLayout';

//pages
import Home from './pages/Home/Home';
import Tasks from './pages/Tasks/Tasks';
import Notes from './pages/Notes/Notes';
import Projects from './pages/Projects/Projects';
import Project from './pages/Projects/Project/Project';
import Calendar from './pages/Calendar/Calendar';
import Tags from './pages/Tags/Tags';
import Archive from './pages/Archive/Archive';
import Settings from './pages/Settings/Settings';
import Search from './pages/Search/Search'
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import ProjectTasks from './pages/Projects/Project/ProjectTasks/ProjectTasks';
import ProjectInfo from './pages/Projects/Project/Info/Info';
import ProjectNote from './pages/Projects/Project/Notes/ProjectNotes';
import ProjectTaskAdd from './pages/Projects/Project/ProjectTasks/Add/Add';
import ProjectTaskDetail from './pages/Projects/Project/ProjectTasks/Detail/Detail';
import ProjectTaskEdit from './pages/Projects/Project/ProjectTasks/Edit/Edit';

import BillingSettings from './pages/Settings/Billing/Billing';
import AccountSettings from './pages/Settings/Account/Account';
import ProfileSettings from './pages/Settings/Profile/Profile';
import useDeviceWidth from './hooks/useDeviceWidth';
import MobileSettingsNavigation from './pages/Settings/MobileSettingNavigation/MobileSettingsNavigation';
import Networks from './pages/Networks/Networks';


import Note from './pages/Notes/Note/Note';
import Sections from './pages/Notes/Sections/Sections';


const App = () => {
  const { token, refresh } = useAuthContext();
  const { width } = useDeviceWidth()



  useEffect(() => {
    refresh()
  }, [])


  return (
    <div className='w-full transition-all duration-300 bg-gray-800  h-screen overflow-hidden'>
      <Routes>

        <Route path="/" element={<LayoutWithSidebar />}>
          <Route index element={<Home />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/notes' element={<Notes />} />
          <Route path='/notes/:name/sections' element={<Sections />} />
          <Route path='/projects' element={<Projects />} />


          <Route path='/projects/:name' element={<Project />}>
            <Route index element={<Navigate replace to="notes" />} />
            <Route path='info' element={<ProjectInfo />} />

            <Route path='tasks' element={<ProjectTaskLayout />}>
              <Route index element={<ProjectTasks />} />
              <Route path='add' element={<ProjectTaskAdd />} />
              <Route path='edit/:name' element={<ProjectTaskEdit />} />
              <Route path='info/:taskName' element={<ProjectTaskDetail />} />
            </Route>

            <Route path='notes' element={<ProjectNote />} />
          </Route>





          <Route path='/calendar' element={<Calendar />} />
          <Route path='/tags' element={<Tags />} />
          <Route path='/archive' element={<Archive />} />
          <Route path='/settings' element={<Settings />} >
            {width < 768 ? (
              <Route index element={<MobileSettingsNavigation />} />
            ) : (
              <Route index element={<Navigate replace to="profile" />} />
            )}
            <Route path='profile' element={<ProfileSettings />} />
            <Route path='account' element={<AccountSettings />} />
            <Route path='billing' element={<BillingSettings />} />
          </Route>
          <Route path='/networks' element={<Networks />} />
          <Route path='/search' element={<Search />} />
        </Route>

        {/* Public routes without sidebar */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />


        <Route path="*" element={<NotFound />} />
      </Routes>



    </div>
  );
};

export default App;
