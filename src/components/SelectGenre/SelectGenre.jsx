import React from "react";
import styled from "styled-components";
import { fetchDataByGenre } from "../../Store";
import { useDispatch } from "react-redux";
const SelectGenre = ({ genres, type }) => {
    const dispatch = useDispatch();
  return (
    <Select className="flex" onChange={(e)=>{
        dispatch(fetchDataByGenre({ genre: e.target.value, type }));
    }}>
      {genres.map((genre) => {
        return (
          <option value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        );
      })}
    </Select>
  );
};

export default SelectGenre;
const Select = styled.select`
 margin-left: 5rem;
 cursor: pointer;
 background-color: rgba(0,0,0,0.4);
 color: white;
`;
