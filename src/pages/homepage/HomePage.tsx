import React from "react";
import HeaderPart from "./HeaderPart";
import { useStoreDispatch, useStoreSelector } from "../../redux/hooks";
import { setAll } from "../../redux/feature/filter-slice";
import { removeNote } from "../../redux/feature/notes-slice";
import FooterPart from "./Footer";
import MainPart from "./Main";

function HomePage() {
  const filterState = useStoreSelector((state) => state.filter);
  const dispatch = useStoreDispatch();

  const handleFiltrelect = () => {
    dispatch(setAll());
    dispatch(
      removeNote({
        id: "1",
        title: "",
        category: "Idea",
        content: "",
        created_at: new Date(),
        dates: "",
        archived: false,
      })
    );
  };
  return (
    <div className="flex h-screen flex-col max-h-screen bg-orange-300 text-blue-800">
      <HeaderPart className="flex justify-between px-5 shadow-md" />
      <MainPart className="flex-1  overflow-auto px-5  shadow-md max-h-full" />
      <FooterPart className=" overflow-auto px-5" />
    </div>
  );
}

export default HomePage;
