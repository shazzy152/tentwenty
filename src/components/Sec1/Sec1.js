import React from 'react';
import Profile from '../common/Profile'

const Sec1 = ({globalTheme}) => {
  return (
    <div className="Sec1">
      <div sec-theme={globalTheme === true ? 'light' : 'dark'} className="Sec1-container">
        <Profile 
          theme={globalTheme === true ? 'light' : 'dark'} 
          titleFontSize={18} 
          smaller={true} 
          width={200} 
          image={"matt"} />
        <Profile 
          theme={globalTheme === true ? 'light' : 'dark'} 
          titleFontSize={18} 
          smaller={true} 
          width={200} 
          image={"fiddy"} />
        <Profile 
          theme={globalTheme === true ? 'light' : 'dark'} 
          titleFontSize={18} 
          smaller={true} 
          width={200} 
          image={"angie"} />
        <Profile 
          theme={globalTheme === true ? 'light' : 'dark'} 
          titleFontSize={18} 
          smaller={true} 
          width={200} 
          image={"khaled"} />
        <Profile 
          theme={globalTheme === true ? 'light' : 'dark'} 
          titleFontSize={18} 
          smaller={true} 
          width={200} 
          image={"matt"} />
      </div>
    </div>
  )
}

export default Sec1