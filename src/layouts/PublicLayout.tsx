import { Navbar } from "../components";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  );
}

export default PublicLayout;

// Progress:
// 1. cr8 PublicLayout component
// 2. import & render Navbar @PublicLayout component
// 3. import & render Outlet @PublicLayout component
// 4. add div footer @PublicLayout component

// Explanation PublicLayout Component:
// Outlets akan menandakan bahwa children dari layout tersebut akan di render di tempat outlet tersebut berada.