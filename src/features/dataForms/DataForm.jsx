/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useGetDataFormsQuery } from "./dataFormsApiSlice";
import { memo } from "react";

const DataForm = ({ dataformId }) => {
  // Destructure the dataform from result
  const { dataform } = useGetDataFormsQuery("dataformsList", {
    selectFromResult: ({ data }) => ({
      dataform: data?.entities[dataformId],
    }),
  });

  const navigate = useNavigate();

  if (dataform) {
    const handleEdit = () => navigate(`/dashboard/dataforms/${dataformId}`);

    return (
      <div>
        <p>{dataform.form_title} </p>
        <p>{dataform.form_desc} </p>
        <p>{dataform.questions} </p>
        <button onClick={handleEdit}>Edit</button>
      </div>
    );
  } else return null;
};

const memoizedDataForm = memo(DataForm);

export default memoizedDataForm;
