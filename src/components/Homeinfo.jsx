import React from 'react'

const renderContact = {
    1: (
        <h1> 1 </h1>
    ),
     2: (
        <h1> 2 </h1>
    ),
     3: (
        <h1> 3 </h1>
    ),
     4: (
        <h1> 4 </h1>
    ),
}
const HomeInfo = ({currentStage}) => {
    return  renderContact[currentStage] || null;
}



export default HomeInfo