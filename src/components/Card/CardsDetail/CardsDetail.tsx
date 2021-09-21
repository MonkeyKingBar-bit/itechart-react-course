import Cards from "../Cards";

const CardDetail = (props: any) => {
  return (
    <>
      <Cards
        key={props.id}
        id={props.id}
        title={props.title}
        text={props.text}
        onDeleteCard={props.onDeleteCard}
        onSaveCard={props.onSaveCard}
        loading={props.loading}
        error={props.error}
      />
    </>
  );
};

export default CardDetail;
