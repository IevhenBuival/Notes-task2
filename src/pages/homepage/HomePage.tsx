import React, { useState } from "react";
import HeaderPart from "./HeaderPart";

import FooterPart from "./Footer";
import MainPart from "./Main";
import Dialog from "../../components/Dialog";
import { INote, defaultInote } from "../../types/notes";
import { dialogContext } from "../../utils/dialog.context";

function HomePage() {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogInote, setDialogInote] = useState(defaultInote);

  function onShowDialog(note: INote) {
    setDialogInote(note);
    setShowDialog(true);
  }
  return (
    <dialogContext.Provider
      value={{
        onShowDialog,
      }}
    >
      <div className="flex h-screen flex-col max-h-screen bg-orange-300 text-blue-800">
        {showDialog && (
          <Dialog
            data={dialogInote}
            hideDialog={() => {
              setShowDialog(false);
            }}
          />
        )}
        <HeaderPart
          className="flex justify-between px-5 shadow-md"
          onShowAddDialog={onShowDialog}
        />
        <MainPart className="flex-1  overflow-auto px-5  shadow-md max-h-full" />
        <FooterPart className=" overflow-auto px-5" />
      </div>
    </dialogContext.Provider>
  );
}

export default HomePage;
