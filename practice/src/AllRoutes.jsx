import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Chakra from "./pages/learn/Chakra";
import Modal from "./pages/modal/Modal";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/modal" element={<Modal />} />
      <Route path="/learnchakra" element={<Chakra />} />
    </Routes>
  );
};

export default AllRoutes;
