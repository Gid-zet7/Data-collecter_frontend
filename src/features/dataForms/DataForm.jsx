/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useGetDataFormsQuery } from "./dataFormsApiSlice";
import { memo, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useAddNewDataMutation } from "../researchData/DataApiSlice";
import { useNavigate } from "react-router-dom";

const DataForm = ({ dataformId }) => {
  // Destructure the dataform from result
  const { dataform } = useGetDataFormsQuery("dataFormsList", {
    selectFromResult: ({ data }) => ({
      dataform: data?.entities[dataformId],
    }),
  });

  const [addNewData, { isSuccess, isError, error }] = useAddNewDataMutation();

  const [data, setData] = useState(
    dataform.questions.map((question) => {
      return { question: question.questionText, response: "" };
    })
  );

  // useEffect(() => {
  //   console.log(data);
  // });
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      setData("");
      navigate("/dashboard/dataforms");
    }
  }, [isSuccess, navigate]);

  const onResponseChanged = (response, question, index) => {
    console.log(index);
    let newData = [...data];
    newData[index].question = question;
    newData[index].response = response;
    setData(newData);
    console.log(newData);
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    await addNewData({
      data,
    });
  };

  const errClass = isError ? "errmsg" : "offscreen";

  if (dataform) {
    // const handleEdit = () => navigate(`/dashboard/dataforms/${dataformId}`);

    return (
      <>
        <form>
          <p className={errClass}>{error?.data?.message}</p>
          <span>Form Title</span>
          <p>{dataform.form_title} </p>
          <span>Form Description</span>
          <p>{dataform.form_desc} </p>
          <hr />
          {dataform.questions.map((question, i) => {
            return (
              <div key={i} className={`question_container ${i}`}>
                <p>{question.questionText}:</p>
                {question.options.map((option) => {
                  return (
                    <div key={option._id}>
                      {question.questionType !== "text" ? (
                        <label htmlFor={option.optionText}>
                          <input
                            type={question.questionType}
                            value={option.optionText}
                            name={question.questionText}
                            onChange={(e) => {
                              onResponseChanged(
                                e.target.value,
                                e.target.name,
                                i
                              );
                            }}
                          />

                          {option.optionText}
                        </label>
                      ) : (
                        <input
                          type="text"
                          value={data[i].response}
                          name={question.questionText}
                          onChange={(e) => {
                            onResponseChanged(e.target.value, e.target.name, i);
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
          <Button
            variant="contained"
            color="primary"
            style={{ fontSize: "14px" }}
            onClick={onSubmitForm}
            // disabled={!canSave}
          >
            Submit
          </Button>
        </form>

        {/* <button onClick={handleEdit}>Edit</button> */}
      </>
    );
  } else return null;
};

const memoizedDataForm = memo(DataForm);

export default memoizedDataForm;
