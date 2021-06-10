import React from "react";

export default function AprovedCandidatesCard(props) {

    const candidates = props.trip.approved;

    return (
        <div>
            {candidates &&
                candidates.map((candidate) => {
                    return (

                        <div key={candidate.id}>
                            <p>Nome: {candidate.name} </p>
                        </div>

                    );
                })}
        </div>
    );
}
