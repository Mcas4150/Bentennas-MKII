import React from 'react';
import './eventlist.css';



const Stream = ({ tracks = [], onFetch }) => {
  return (
    <div>
        <div>
            <button onClick={onFetch} className="bigbutton" type="button">Load</button>
        </div>
        <br/>
        <div>
        {
            tracks.map((track, key) => {
            return <div className="track" key={key}>{track.name}</div>;
            })
        }
        </div>
    </div>
  );
}

export default Stream;