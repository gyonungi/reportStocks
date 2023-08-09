
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "../Row/Row";
import Tables from "react-bootstrap/Table";
import Pagination from "../Pagination/Pagination";
import { useDispatch } from "react-redux";
import { setPageCount } from "../../store/stockslice";

export default function Table() {
  const dispatch = useDispatch();
  const onChangePage = (i) => {
    dispatch(setPageCount(i));
  };
  return (
    <>
      <div className="container">
        <Tables striped="columns" bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Название Компании</th>
              <th>Валюта</th>
              <th>Доходы</th>
              <th>Расходы</th>
              <th>Общая прибыль</th>
              <th>Финансовый год</th>
              <th>Дата Отчета</th>
            </tr>
          </thead>
          <tbody>
            <Row  />
          </tbody>
        </Tables>
      </div>
      <Pagination onChangePage={(i) => onChangePage(i)} />
    </>
  );
}
