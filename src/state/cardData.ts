// import ICardsDataDTO from "./ICardsDataDTO";

export default interface ICardsDataDTO {
   title: string;
   body: string;
   id: string;
}

export interface ICardsState {
    cards: ICardsDataDTO[];
}
