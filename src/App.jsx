import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { Main } from "./Screens";
import {
  Projects,
  Home,
  Settings,
  Stats,
  Billings,
  Members,
} from "./Components/Pages";
import { NavigationProvider } from "./Context/navigation";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationProvider>
          <div className="w-screen h-screen flex bg-gray-bg p-5">
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Main />} />
                <Route path="" element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="settings" element={<Settings />} />
                <Route path="billings" element={<Billings />} />
                <Route path="stats" element={<Stats />} />
                <Route path="team_members" element={<Members />} />
              </Route>
            </Routes>
          </div>
        </NavigationProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
