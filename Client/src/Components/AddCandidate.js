import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddCandidate = () => {
  const [CandidateName, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Role, setRole] = useState("");
  const [Contact, setPhone] = useState("");
  const [PAN, setPan] = useState("");
  const [Experience, setExperience] = useState("");
  // const [status, setStatus] = useState("");
  const navigate = useNavigate();


  const handleCancel = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setRole("");
    setPhone("");
    setPan("");
    setExperience("");
    // setStatus("");
    navigate("/");
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    if (!CandidateName || !Email || !Role || !Contact || !PAN || !Experience) {
      return toast.error("Please fill in all details")
    }
    setName("");
    setEmail("");
    setRole("");
    setPhone("");
    setPan("");
    setExperience("");
    // setStatus("");

    const candidate = {
      CandidateName,
      Email,
      Contact,
      Role,
      PAN,
      Experience,
      // status
    };


    const result = await fetch("/addCandidate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "CandidateName": CandidateName,
        "Email": Email,
        "Contact": Contact,
        "Role": Role,
        "PAN": PAN,
        "Experience": Experience,
        // "status" : status
      })

    })

    const data = await result.json();
    const msg=JSON.stringify(data);
    // console.log(data)

    if (result.status === 422) {
      return toast.error("Server Trashed");
    }else if (result.status === 500) {
      return toast.error(`Invalid Registration ${msg}`)
    }
    if(result.status === 200) {
      return toast.success("Successfully Added the candidate");
    }

    navigate('/');
  };

  return (
    <div className="container-wrap p-3">
    <h2 className="mb-4 " id="addcandidate">Add Candidate</h2>
    <form>
      <div className="row mb-4">
        <div className="col-md-1">
          <div className="form-group">
            <label className="fw-bolder" htmlFor="first">
              Candidate Name
            </label>
          </div>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Candidate Name"
              value={CandidateName}
              onChange={(e) => setName(e.target.value)}
              minLength="3"
              required
            />
          </div>
        </div>
        <div className="col-md-1">
          <div className="form-group">
            <label className="fw-bolder" htmlFor="first">
              Email
            </label>
          </div>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-1">
          <div className="form-group">
            <label className="fw-bolder" htmlFor="first">
              Contact
            </label>
          </div>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <input
              type="tel"
              className="form-control"
              placeholder="Enter Contact"
              // inputMode="numeric"
              value={Contact}
              minLength={10}
              maxLength={10}
              onChange={(e) => setPhone(e.target.value)}
              pattern="[0-9]{10}"
              required
            />
          </div>
        </div>
        <div className="col-md-1">
          <div className="form-group">
            <label className="fw-bolder" htmlFor="first">
              Role
            </label>
          </div>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <select
              id="select"
              className="form-select"
              aria-label="Select Role"
              value={Role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              {/* <option defaultValue="Select Role">Select Role</option>
              <option value="Practice Head(PH)">Practice Head(PH)</option>
              <option value="Talent Acquisition(TA)">Talent Acquisition(TA)</option>
              <option value="Panel(Interviewer)">Panel(Interviewer)</option> */}
              <option defaultValue="Select Role">Select Role</option>
              <option value = "AES-DigitalFS-JavaMS">AES-DigitalFS-JavaMS</option>
              <option value = "AES-DigitalFS-JavaFS">AES-DigitalFS-JavaFS</option>
              <option value = "AES-DigitalFS-DotnetFS">AES-DigitalFS-DotnetFS</option>
              <option value = "AES-FED-Angular">AES-FED-Angular</option>
              <option value = "AES-FED-React">AES-FED-React</option>
              <option value = "AES-FED-MEAN">AES-FED-MEAN</option>
              <option value = "AES-FED-MERN">AES-FED-MERN</option>
              <option value = "AES-AgileDevOps-Agile">AES-AgileDevOps-Agile</option>
              <option value = "AES-AgileDevOps-DevOps">AES-AgileDevOps-DevOps</option>
              <option value = "AES-DigitalPlatforms-AEM">AES-DigitalPlatforms-AEM</option>
              <option value = "AES-DigitalPlatforms-Liferay">AES-DigitalPlatforms-Liferay</option>
              <option value = "AES-DigitalPlatforms-Sitecore">AES-DigitalPlatforms-Sitecore</option>
              <option value = "AES-DigitalPlatforms-M365">AES-DigitalPlatforms-M365</option>
              <option value = "AES-DigitalPlatforms-Drupal">AES-DigitalPlatforms-Drupal</option>
              <option value = "AES-Lowcode-Outsystems">AES-Lowcode-Outsystems</option>
              <option value = "AES-Lowcode-MSApps">AES-Lowcode-MSApps</option>
              <option value = "AES-Mobility-IOS">AES-Mobility-IOS</option>
              <option value = "AES-Mobility-Android">AES-Mobility-Android</option>
              <option value = "AES-Mobility-ReactNative">AES-Mobility-ReactNative</option>
              <option value = "AES-ApplicationModernization-Mainframe">AES-ApplicationModernization-Mainframe</option>
              <option value = "AES-DigitalFS-Integration">AES-DigitalFS-Integration</option>
              <option value = "AES-CloudApps-Azure">AES-CloudApps-Azure</option>
              <option value = "AES-CloudApps-AWS">AES-CloudApps-AWS</option>
              <option value = "AES-CloudApps-GCP">AES-CloudApps-GCP</option>
              <option value = "AES-Mobility-Others">AES-Mobility-Others</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-1">
          <div className="form-group">
            <label className="fw-bolder" htmlFor="first">
              PAN
            </label>
          </div>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter PAN"
              value={PAN}
              minLength={10}
              maxLength={10}
              onChange={(e) => setPan(e.target.value.toUpperCase())}
              required
              pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
            />
          </div>
        </div>
        <div className="col-md-1">
          <div className="form-group">
            <label className="fw-bolder" htmlFor="first">
              Experience
            </label>
          </div>
        </div>
        <div className="col-md-5">
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Enter Number of years"
              value={Experience}
              onChange={(e) => setExperience(e.target.value)}
              required
            />
          </div>
        </div>
      </div>
      {/* <div className="row">
        <div className="col-md-1">
          <div className="form-group">
            <label className="fw-bolder" htmlFor="first">
              Status
            </label>
          </div>
        </div> */}
        {/* <div className="col-md-5">
          <div className="form-group">
            <select
              data-testid="statustext"
              class="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option defaultValue="Select Role">Select Status</option>
              <option value="010">010 Screening</option>
              <option value="020">020 L1 TBS</option>
              <option value="021">021 L1 Scheduled</option>
              <option value="022">022 L1 Rejected</option>
              <option value="031">031 L2 TBS</option>
              <option value="032">032 L2 Rejected</option>
              <option value="040">040 HR TBS</option>
              <option value="041">041 HR Rejected</option>
              <option value="050">050 Offer Approval</option>
              <option value="051">051 Offer Rejected</option>
              <option value="052">052 Offer Released</option>
              <option value="070">070 Joined</option>
              <option value="080">080 Offer Backout</option>
              <option value="090">090 Drop</option>
            </select>
          </div>
        </div>
      </div> */}
      <div className="row">
        <div className="col-md-4 form-group mt-2 ">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            onClick={handleSubmit}
          >
            Submit
          </button>

          <button
            className="btn btn-primary btn-lg ms-4"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  </div>
  );
};

export default AddCandidate;
