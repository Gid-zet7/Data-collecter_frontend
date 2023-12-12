/* eslint-disable react/prop-types */
import { useGetDataQuery } from "./DataApiSlice";
import { memo } from "react";
// import { Link } from "react-router-dom";

const Data = ({ dataId }) => {
  const { data } = useGetDataQuery("dataList", {
    selectFromResult: ({ data }) => ({
      data: data?.entities[dataId],
    }),
  });

  if (data) {
    return (
      <tr>
        {/* <td className={`table__cell `}>
          <Link to={`/dashboard/users/${user.id}`}>{user.username} </Link>
        </td> */}
        <td className={`table__cell `}>{data.question}</td>
        <td className={`table__cell `}>{data.response}</td>
      </tr>
    );
  } else return null;
};

const memoizedData = memo(Data);

export default memoizedData;
