import Cards from "../Cards";

const CardDetail = (props: any) => {
  return (
    <>
      <Cards
        key={props.id}
        id={props.id}
        title={props.title}
        text={props.text}
      />
    </>
  );
};

export default CardDetail;
