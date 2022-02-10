const AppBar = () => {
  return (
    <>
      <div className="app-bar">
        <ul>
          <li>
            <p>Weather Application</p>
          </li>
          <li>
            <p>{Date.now()}</p>
          </li>
          <li>
            <p>Monterey</p>
          </li>
        </ul>
      </div>
    </>
  )
}

export default AppBar
