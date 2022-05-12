import styled from "styled-components";
import FormRow from "../../components/FormRow";
import Alert from "../../components/Alert";
import { useAppContext } from "../../context/appContext";

const AddProject = () => {
  const {
    title,
    githubUrl,
    imageUrl,
    description,
    appUrl,
    handleChangeGlobal,
    showAlert,
    displayAlert,
    uploadedFile,
    handleFileChange,
    uploadFileToServer,
    createProject,
    clearValues,
    isEditing,
    editProject,
    isLoading,
  } = useAppContext();


  const fileSelectHandler = (e) => {
    const value = e.target.files[0]
    handleFileChange(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (uploadedFile) {
      uploadFileToServer();
      return;
    }
    if (!title || !imageUrl || !description) {
      displayAlert();
      return;
    }
    if(isEditing){
      editProject()
      return
    }
    createProject()
    
  };

  const handleProjectInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const data = { name, value };
    handleChangeGlobal(data);
  };
  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'Edit Project' : 'Add Project'}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="text"
            name="title"
            value={title}
            handleChange={handleProjectInput}
          />
          <FormRow
            type="text"
            textLabel="github link"
            name="githubUrl"
            value={githubUrl}
            handleChange={handleProjectInput}
          />
          <FormRow
            type="text"
            textLabel="website url"
            name="appUrl"
            value={appUrl}
            handleChange={handleProjectInput}
          />
          <FormRow
            type="text"
            textLabel="image url"
            name="imageUrl"
            value={imageUrl}
            handleChange={handleProjectInput}
          />
          <FormRow
            type="text"
            textLabel="short description"
            name="description"
            value={description}
            handleChange={handleProjectInput}
          />
          <FormRow
            type="file"
            textLabel="upload image"
            handleChange={fileSelectHandler}
          />

          <div className="btn-container">
            <button
              type="submit"
              className={
                imageUrl ? "btn btn-block submit-btn" : "btn btn-block"
              }
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {imageUrl ? "submit" : "upload"}
            </button>
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={(e) => {
                e.preventDefault();
                clearValues()
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  background: white;
  border-radius: 4px;
  color: black;
  padding: 3rem 2rem 4rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
  }
  .clear-btn {
    background: #627d98;
  }
  .clear-btn:hover {
    background: black;
  }
  .submit-btn {
    background: aqua;
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`;
export default AddProject;
