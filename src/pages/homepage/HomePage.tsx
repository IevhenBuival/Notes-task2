import React from "react";
import HeaderPart from "./HeaderPart";
import { useStoreDispatch, useStoreSelector } from "../../redux/hooks";
import { setAll } from "../../redux/feature/filter-slice";
import { removeNote } from "../../redux/feature/notes-slice";
import FooterPart from "./Footer";
import MainPart from "./Main";

function HomePage() {
  const filterState = useStoreSelector((state) => state.filter);
  const notesState = useStoreSelector((state) => state.notes);
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
    <div>
      {filterState.filter}
      <HeaderPart />
      <MainPart />
      <FooterPart />

      {JSON.stringify(notesState.notes)}
      <button onClick={handleFiltrelect}>All</button>
    </div>
  );
}

export default HomePage;
