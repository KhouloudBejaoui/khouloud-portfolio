import React from "react";
import styled from "styled-components";

const Card = styled.a`
    width: 330px;
    height: 220px;
    background-color: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in-out;
    text-decoration: none;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
        filter: brightness(1.1);
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain; 
    padding: 10px; 
`;

const CertificationCard = ({ certification }) => {
    return (
        <Card href={certification.link} target="_blank" rel="noopener noreferrer">
            <Image src={certification.image} alt={certification.title} />
        </Card>
    );
};

export default CertificationCard;
