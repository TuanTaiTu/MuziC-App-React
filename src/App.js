import ReactDOM from "react-dom/client";
import { Link, BrowserRouter, Route, Routes} from "react-router-dom";
    // Import file detail
import Menu from './menu/MenuPage/Menu';
import MuzicPage from "./menu/detail/MuzicPage/MuzicPage";
import ExplorePage from "./menu/detail/ExplorePage/ExplorePage";
import Top100Page from './menu/detail/Top100Page/Top100Page';
import LoginForm from "./LoginForm/LoginForm";



export const App = () => {
  return (
   <>
    <BrowserRouter>
      <Menu/>
      <Routes>
            <Route path="/" element={<MuzicPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/top100" element={<Top100Page />} />
            <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
   </>
  )
};