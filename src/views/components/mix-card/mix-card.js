import React from 'react'
import PropTypes from 'prop-types'

const MixCard = ({ mix }) => (
    <li>
       <a href={mix.url}>
          <img src={mix.pictures.large}/>
           <p>{mix.name}</p>
      </a>
   </li>



);