import React, { useEffect, useState } from "react";
import { PencilIcon } from "@heroicons/react/24/outline";
// import ToggleButton from "./ToggleButton.js";
import { Link } from 'react-router-dom';
import "./SingleList.scss";

function SingleList({ hash, candidate, candidateList }) {
    const [CandidateName, setName] = useState();
    const [Email, setEmail] = useState();
    const [Role, setRole] = useState();
    const [status, setStatus] = useState();
    const [Contact, setPhone] = useState();
    const [PAN, setPan] = useState();
    const [Experience, setExperience] = useState();

    // const [isActive, setIsActive] = useState();
    // const triggerToggle = () => {
    //     setIsActive(user.Action);
    // };

    useEffect(() => {
        setName(candidate.CandidateName);
        setEmail(candidate.Email);
        setPhone(candidate.Contact);
        setRole(candidate.Role);
        setPan(candidate.PAN);
        setExperience(candidate.Experience)
        setStatus(candidate.status);
        console.log(candidate);
    }, [candidate]);
    return (
        <tr className="singleList">
            <td>{hash}</td>
            <td>{CandidateName}</td>
            <td>{Email}</td>
            <td>{Contact}</td>
            <td>{PAN}</td>
            <td>{Role}</td>
            <td>{Experience}</td>
            <td>{status}</td>
            <td className="singleList__action">
                
                <Link to={`/edit/${candidate.cid}`}><PencilIcon className="singleList__pencilIcon" /></Link>
                <p>|</p>
               
                
            </td>
        </tr>
    );
}

export default SingleList;


