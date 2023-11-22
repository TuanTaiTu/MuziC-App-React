import ReactDOM from "react-dom/client";
import { Link, BrowserRouter, Route, Routes} from "react-router-dom";
    // Import file detail
import { Notification, Create, Profile, Activity, Setting} from './menu/Detail';
import { Instagram } from "./menu/detail/InstagramPage/InstagramPage";
import { SearchPage } from './menu/detail/SearchPage/SearchPage';
import { MessagesPage } from "./menu/detail/MessagesPage/MessagesPage";
import {Menu} from './menu/MenuPage/Menu';


export const App = () => {
  return (
   <>
    <BrowserRouter>
      <Menu/>
      <Routes>
            <Route path="/instagram" element={<Instagram />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/create" element={<Create />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/my-activity" element={<Activity />} />
            <Route path="/setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
   </>
  )
};