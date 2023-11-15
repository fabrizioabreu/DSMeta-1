import axios from "axios";
import icon from "../../assets/img/notification-icon.svg";

import "./styles.css";
import { BASE_URL } from "../../utils/request";

type Props = {
  saleId: number;
};

function NotificationButton({ saleId }: Props) {
  function handleClick(id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`).then((response) => {
      console.log("SUCESSO");
    });
  }

  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={icon} alt="Notificar" />
    </div>
  );
}

export default NotificationButton;
