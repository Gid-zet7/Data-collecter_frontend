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

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      setData("");
      navigate("/dashboard");
    }
  }, [isSuccess, navigate]);

  const onResponseChanged = (response, question, index) => {
    let newData = [...data];
    newData[index].question = question;
    newData[index].response = response;
    setData(newData);
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
        <form
          className="data-form"
          style={{
            border: "1px solid #000",
            marginBottom: "35px",
            width: "clamp(15rem, 50vw, 60rem)",
          }}
        >
          <p className={errClass}>{error?.data?.message}</p>
          <div
            className="form_header"
            style={{
              border: "3px solid #000",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            <h1>Title: {dataform.form_title} </h1>
            <span>Description</span>
            <p>{dataform.form_desc} </p>
            <hr />
          </div>

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
            style={{ fontSize: "14px", maxWidth: "20rem" }}
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
