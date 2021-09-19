import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import Cards from "../Cards";
import CardTabs from "./CardTabs";

const CardDetail = (props: any) => {
  return (
    <>
      <Cards
        isCanceled={props.isCanceled}
        key={props.id}
        id={props.id}
        title={props.title}
        text={props.text}
        activeEdit={props.activeEdit}
        onDeleteCard={props.onDeleteCard}
        editCard={props.editCard}
        setEditCard={props.setEditCard}
        saveCard={props.saveCard}
        setSaveCard={props.setSaveCard}
        onSaveCard={props.onSaveCard}
        loading={props.loading}
        error={props.error}
      />
    </>
  );
};

export default CardDetail;
