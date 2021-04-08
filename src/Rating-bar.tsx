import { useRef, useState } from "react";
import "./App.css";

interface Rating {
  list: number[];
}

export function RatingBar(props: Rating) {
  const { list } = props;
  const [numberSelected, setNumberSelected] = useState<number>(0);
  const [numberHover, setNumberHover] = useState<number>(0);

  const process = (item: number) => {
    setNumberSelected(item);
  };

  return (
    <>
      <div className="rating-bar">
        <div className="rating-bar__title">
          <h1>Rating Bar</h1>
        </div>
        <div className="rating-bar__number">
          <h2>{numberSelected}</h2>
        </div>
        <div className="rating-box-container">
          {list.map((item, index) => (
            <div
              key={index}
              className={
                item <= numberSelected || item <= numberHover
                  ? "rating-box rating-box-hover"
                  : "rating-box"
              }
              onClick={() => process(item)}
              onMouseOver={() => setNumberHover(item)}
              onMouseOut={() => setNumberHover(0)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

interface NotificationContent {
  id: number;
  content: string;
  description: string;
  isChecked: boolean;
}

interface NotificationProps {
  listNotification: NotificationContent[];
}

export function Notification(props: NotificationProps) {
    const { listNotification } = props;
    const [data, setData] = useState(listNotification);
    const dataRef:any = useRef(listNotification);

  const handleChecked = (id : number) => {
    listNotification.map(item => {
      if (item.id === id) {
        item.isChecked = !item.isChecked;
      }
    });
    const newData = [...listNotification];
    setData(newData);
    }
    
  return (
    <div>
      <div>
        <h1>Notification</h1>
      </div>
      <div className="container">
        <div className="container-title"></div>
          {listNotification.map((item, index) => (
            <div className="listNoti" key={item.id}>
              <div className="content">
                      <div className="title">{ item.content}</div>
                      <div className="desc">{ item.description}</div>
              </div>
              <div className="checkbox">
                <label className="switch" >
                  <input type="checkbox" onClick={() => handleChecked(item.id)}/>
                  <span className={item.isChecked ? "slider round slider-checked" : "slider round"}></span>
                </label>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

