import Cards from "../Cards";

const CardDetail = (props: any) => {
  return (
    <>
      <Cards
        isCanceled={props.isCanceled}
        key={props.id}
        id={props.id}
        title={props.title}
        text={props.text}
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
