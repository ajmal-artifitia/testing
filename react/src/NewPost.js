import { useState } from "react";
import axios from "axios";

export default function NewPost() {
  const [file, setFile] = useState();
  const submit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    await axios.post("http://localhost:9000/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };
  const fileSelected = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <form
        onSubmit={submit}
        style={{ width: 650 }}
        className="flex flex-col space-y-5 px-5 py-14"
      >
        <input onChange={fileSelected} type="file" accept="image/*"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
