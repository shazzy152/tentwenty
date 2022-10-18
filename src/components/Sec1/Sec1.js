import React from 'react';
import Profile from '../common/Profile'

const Sec1 = () => {
  return (
    <div className="Sec1">
      <div className="Sec1-container">
        <Profile titleFontSize={18} smaller={true} width={20} image={"matt"} />
        <Profile titleFontSize={18} smaller={true} width={20} image={"fiddy"} />
        <Profile titleFontSize={18} smaller={true} width={20} image={"angie"} />
        <Profile titleFontSize={18} smaller={true} width={20} image={"khaled"} />
        <Profile titleFontSize={18} smaller={true} width={20} image={"matt"} />
      </div>
    </div>
  )
}

export default Sec1