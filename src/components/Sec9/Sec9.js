import React from 'react';
import Profile from '../common/Profile'

const Sec9 = ({globalTheme}) => {
  return (
    <div className="Sec9">
        <Profile small={true} titleFontSize={23} height={100} image={"sec9-1"} heading={"EAT"} theme={globalTheme === true ? 'light' : 'dark'} />
        <Profile small={true} titleFontSize={23} height={100} image={"sec9-2"} heading={"EAT"} theme={globalTheme === true ? 'light' : 'dark'} />
        <Profile small={true} titleFontSize={23} height={100} image={"sec9-3"} heading={"EAT"} theme={globalTheme === true ? 'light' : 'dark'} />
    </div>
  )
}

export default Sec9