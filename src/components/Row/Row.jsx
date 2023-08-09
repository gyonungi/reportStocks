import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStock } from "../../store/stockslice";
import { SearchContext } from "../../context";

export default function Row() {
  const stock = useSelector((state) => state.stock.items);
  const pageCount = useSelector((state) => state.stock.pageCount);
  const { searchValue } = useContext(SearchContext);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const search = searchValue ? `${searchValue}` : "";
      dispatch(fetchStock({ pageCount, search }));
    }
    fetchData();
  }, [pageCount, dispatch, searchValue]);

  return (
    <>
      {stock?.map((item, index) => (
        <>
          <tr>
            <td>{index + 1}</td>
            <td>{item?.symbol}</td>
            <td data-testid="td-item">{item?.currency}</td>
            <td>{item?.grossProfit.toLocaleString()}</td>
            <td>{item?.operatingIncome.toLocaleString()}</td>
            <td>{item?.operatingExpense.toLocaleString()}</td>
            <td>{item?.fiscalYear}</td>
            <td>{item?.reportDate}</td>
          </tr>
        </>
      ))}
      {/*  <td>{data?.id}</td>
        <td>{data?.symbol}</td>
        <td>{data?.currency}</td>
        <td>{data?.grossProfit}</td>
        <td>{data?.operatingIncome}</td>
        <td>{data?.operatingExpense}</td>
        <td>{data?.fiscalYear}</td>
        <td>{data?.reportDate}</td> */}
    </>
  );
}
