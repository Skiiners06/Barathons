import React, { useState } from 'react';
import { IBarathon, IPub } from "../types/api";
import BarathonThumbnail from "./BarathonThumbnail";
import styled from 'styled-components';


interface IProps {
    pubs: IPub[];
    barathons: IBarathon[];
}
const ListeDesBarathons = ({ barathons, pubs }: IProps): JSX.Element => {
    return (
        <>
            <Sh1>Liste des barathons :</Sh1>
            {barathons.map((barathon: IBarathon) => {
                return (
                    <BarathonThumbnail key={barathon._id} barathon={barathon} pubs={pubs} />
                );
            })}
        </>
    );
};



const Sh1 = styled.h1`
    text-align:center;
    text-decoration: underline;
`;




export default ListeDesBarathons;
