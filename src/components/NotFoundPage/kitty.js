import React from 'react'
import { Link } from 'react-router'

const NotFoundPage = () => {
  return (
    <div style={{ paddingTop: 70, width: '80%', marginLeft: '20%', display: 'flex', justifyContent: 'center', flex: '0.8' }}>
      <div style={{display: 'flex', width: '50%',marginLeft: 60, justifyContent: 'center', position: 'relative'}}>
        <div style={{width: 0, height: 0, borderLeft: '20px solid transparent', borderRight: '20px solid transparent', borderBottom: '40px solid black', transform: 'rotate(-45deg)', position: 'absolute', top: 0, left: -20}}></div>
        <div style={{width: 0, height: 0, borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderBottom: '20px solid white', transform: 'rotate(-45deg)', position: 'absolute', top: 15, left: -5, zIndex: 1}}></div>
        <div style={{width: 102, height: 102, background: 'black', border: '1px solid black', borderRadius: 50, position: 'absolute', top: 13, left: -2}}></div>
        <div style={{width: 20, height: 20, background: 'white', borderRadius: 50, position: 'absolute', top: 60, left: 20, zIndex: 2}}></div>
        <div style={{width: 20, height: 20, background: 'white', borderRadius: 50, position: 'absolute', top: 60, left: 60, zIndex: 2}}></div>
        <div style={{width: 15, height: 15, background: 'black', borderRadius: 50, position: 'absolute', top: 65, left: 20, zIndex: 3}}></div>
        <div style={{width: 15, height: 15, background: 'black', borderRadius: 50, position: 'absolute', top: 65, left: 60, zIndex: 3}}></div>
        <div style={{width: 40, height: 40, background: 'black', borderRadius: 50, position: 'absolute', top: 80, left: 13, zIndex: 1}}></div>
        <div style={{width: 40, height: 40, background: 'black', borderRadius: 50, position: 'absolute', top: 80, left: 45, zIndex: 1}}></div>
        <div style={{width: 0, height: 0, borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderTop: '20px solid pink', transform: 'rotate(0deg)', position: 'absolute', top: 85, left: 40, zIndex: 2}}></div>
        <div style={{width:1, height: 8, position: 'absolute', left: 49.5, top: 92, backgroundColor: 'black', zIndex: 3}}></div>
        <div style={{width: 0, height: 0, borderLeft: '20px solid transparent', borderRight: '20px solid transparent', borderBottom: '40px solid black', transform: 'rotate(45deg)', position: 'absolute', top: 0, left: 80}}></div>
        <div style={{width: 0, height: 0, borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderBottom: '20px solid white', transform: 'rotate(45deg)', position: 'absolute', top: 15, left: 85, zIndex: 1}}></div>
        <div style={{width: 20, height: 20, background: 'black', borderRadius: 50, position: 'absolute', top: 100, left: 39, zIndex: 1}}></div>
        <div style={{display: 'block', width: '126px', height: '180px', backgroundColor: 'black', borderRadius: '50% 50% 50% 50% / 70% 70% 30% 30%', position: 'absolute', left: -10, top: 50, zIndex: 1}}></div>
        <div id="tail" style={{position: 'absolute', left: -130, top: 80, transform: 'rotate(-10deg)'}}>
          <div style={{width: 100, height: 50, backgroundColor: 'transparent', borderTopLeftRadius: 100, borderTopRightRadius: 100, border: '20px solid black', borderBottom: 0, boxSizing: 'border-box', transform: 'rotate(45deg)'}}></div>
          <div style={{width: 100, height: 50, backgroundColor: 'transparent', borderTopLeftRadius: 100, borderTopRightRadius: 100, border: '20px solid black', borderBottom: 0, boxSizing: 'border-box', transform: 'rotate(-135deg)', position: 'absolute', top: 92, left: 22}}></div>
        </div>
      </div>
      <div style={{margin: 'auto 0', width: '50%', alignSelf: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 200, height: '100%'}}>
        <h4 style={{fontSize: '2em'}}> 404 Page Not Found </h4>
        <Link to="/"> Go back to homepage </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
