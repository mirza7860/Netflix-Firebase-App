import React from 'react'
import CardSlider from '../CardSlider/CardSlider'

const Slider = ({movies}) => {
    const GetMoviesFromRange = (from,to) => {
        return movies.slice(from,to)
    }
  return (
    <div>
      <CardSlider title="Trending Now" data={GetMoviesFromRange(0, 10)} />
      <CardSlider title="New Releases" data={GetMoviesFromRange(10, 20)} />
      <CardSlider title="Blockbluster Movies" data={GetMoviesFromRange(20, 30)} />
      <CardSlider title="Popular On Netflix" data={GetMoviesFromRange(30, 40)} />
      <CardSlider title="Action Movies" data={GetMoviesFromRange(40, 50)} />
      <CardSlider title="Epic" data={GetMoviesFromRange(50, 60)} />
    </div>
  );
}

export default Slider
