import React from 'react'
  
const Barras = ({bgcolor,progress,height,label}) => {
     
    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 30
      }
      
      const Childdiv = {
        height: height,
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius:40,
        display: "flex",
        textAlign: 'center'
      }
      
      const progresstext = {
        marginLeft: `40%`,
        color: 'white',
        fontWeight: 600,
        fontSize: '15px',
      }
        
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${label}`}</span>
      </div>
    </div>
    )
}
  
export default Barras;