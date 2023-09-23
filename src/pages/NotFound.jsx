function NotFound() {
  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', background: 'white'}}>
      <h2>Oops, that's a 404</h2>
      <img src="error404.gif" style={{width: '400px'}} />
    </div>
  )
}

export default NotFound;
