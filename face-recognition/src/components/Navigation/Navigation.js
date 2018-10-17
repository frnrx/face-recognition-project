import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn) {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}} className='f4 pa3'>
                <p onClick={() => onRouteChange('signout')} className='ma0 link dim black underline pv2 pointer'>Sign Out</p>
            </nav>
        );
    } else {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}} className='f4 pa3'>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <p onClick={() => onRouteChange('signin')} className='ma0 link dim black underline pointer pv2'>Sign In</p>
                    <p onClick={() => onRouteChange('register')} className='ma0 link dim black underline pointer pv2'>Register</p>
                </div>
            </nav>
        );
    }
}

export default Navigation;