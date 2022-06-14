import React from "react";
import { useRef, useState } from "react";
import Axios from "axios";
import Input from "./Components/Input";
import Output from "./Components/Output"
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import { Container } from "react-bootstrap";

function App() {

  // as Input and Output are sibling components and they need to interact between each other hence the parent component should be responsible for managing the states and defining all the functions that will be used to manipulate the dom and then pass those functions as props to the components 
  const [selectedFile, setSelectedFile] = useState(undefined);
  const [fetchingData, setFetchingData] = useState(false);
  // 18
  const custIdRef = useRef(null);
  const custNameRef = useRef(null);
  const accNoRef = useRef(null);
  const fatherRef = useRef(null);
  const motherRef = useRef(null);
  const spouseRef = useRef(null);
  const placeRef = useRef(null);
  const dobRef = useRef(null);
  const profRef = useRef(null);
  const incomeRef = useRef(null);
  const addRef = useRef(null);
  const pinRef = useRef(null);
  const mobileRef = useRef(null);
  const emailRef = useRef(null);
  const aadharRef = useRef(null);
  const panRef = useRef(null);

  const refs = [custIdRef, custNameRef, accNoRef, fatherRef, motherRef, spouseRef,
    placeRef, dobRef, profRef, incomeRef, addRef, pinRef, mobileRef, emailRef, aadharRef,
    panRef];


  function upload(e) {

    // prepare the form data
    if (selectedFile !== undefined) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      setFetchingData(true);

      // upload the file
      Axios.post(
        "/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        })
        .then((res) => {
          feedData(res.data);
          setFetchingData(false);
        })
        .catch((err) => console.log(err));
    }

  }


  function feedData(data) {
    custIdRef.current.value = data.custId;
    custNameRef.current.value = data.custName;
    accNoRef.current.value = data.accountNo;
    fatherRef.current.value = data.fatherName;
    motherRef.current.value = data.MotherName;
    spouseRef.current.value = data.spouseName === undefined ? "" : data.spouseName;
    placeRef.current.value = data.placeOfBirth;
    dobRef.current.value = data.dob;
    profRef.current.value = data.profession;
    incomeRef.current.value = data.income;
    addRef.current.value = data.address;
    pinRef.current.value = data.pin;
    mobileRef.current.value = data.mobileNo;
    emailRef.current.value = data.emailId === undefined ? "" : data.emailId;
    aadharRef.current.value = data.aadhaarNo;
    panRef.current.value = data.panNo;
  }

  function reset() {
    refs.map((ref) => {
      if (ref != null && ref.current.type === "text") {
        ref.current.value = "";
      }
    });
  }

  return (
    <Container>
      {fetchingData ? <Loader /> : <></>}
      <Input name="file" onChange={(e) => {
        setSelectedFile(e.target.files[0]);
      }} onUpload={upload}></Input>
      <Output
        onReset={reset}
        refs={refs}>
      </Output>
      <Footer />
    </Container>
  );
}

export default App;