import { Link } from "react-router-dom";
import { Tabs, Tab, Box } from "@material-ui/core";
import { ReactChild, ReactFragment, ReactPortal } from "react";
import "./Tabs.css";

interface cardTabs {
  cardList: any;
  setActiveTab: any;
  activeTab: number;
}

const CardTabs = (props: cardTabs) => {
  const { cardList, activeTab, setActiveTab } = props;
  const openTab = (e: any) => {
    setActiveTab(+e.target.dataset.index);
  };

  return (
    <div
      className="tab"
      // onChange={() => {
      //   history.push(`/cards/card_${data.id}`);
      // }}
    >
      {/* {cardList.forEach(() => {
        cardList[0].title = "All cards";
      })} */}
      {cardList.map(
        (
          n: {
            id: any;
            title:
              | boolean
              | ReactChild
              | ReactFragment
              | ReactPortal
              | null
              | undefined;
          },
          i: any
        ) => (
          <Link to={`/cards/${n.id}`}>
            <button
              className={`tablinks ${i === activeTab ? "active" : ""}`}
              onClick={openTab}
              data-index={i}
            >
              {i === 0 ? "All cards" : n.title}
            </button>
          </Link>
        )
      )}
    </div>
  );
};

export default CardTabs;
