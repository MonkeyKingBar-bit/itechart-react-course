import { Link } from "react-router-dom";
import { ReactChild, ReactFragment, ReactPortal } from "react";

import { useAppDispatch, useAppSelector } from "../../.././hooks/hooks";
import { tabActions } from "../../../store/slice/tab";

import "./Tabs.css";

const CardTabs = () => {
  const dispatch = useAppDispatch();
  const cardsData = useAppSelector((state) => state.cardsData.cards);
  const tabSelector = useAppSelector((state) => state.tab.activeTab);

  return (
    <div className="tab">
      {cardsData.map(
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
          <Link to={`/cards/${n.id}`} key={n.id}>
            <button
              className={`tablinks ${i === tabSelector ? "active" : ""}`}
              onClick={(e: any) =>
                dispatch(tabActions.setActiveTab(+e.target.dataset.index))
              }
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
