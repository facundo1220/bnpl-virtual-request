import RequestFlow from "@/modules/requestPNBL/components/requestFlow";
import style from "./bnpl.module.css";

function PNBL() {
  return (
    <div className={style["page"]}>
      <h1 className={style["main-title"]}>Solicita ahora</h1>

      <RequestFlow />
    </div>
  );
}

export default PNBL;
