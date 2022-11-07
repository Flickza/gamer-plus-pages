import React, { useEffect, useState } from 'react'
import './Application.scss'
import Footer from './Footer'
import { icons } from './Icons'

const Application: React.FC = () => {
  const [darkTheme, setDarkTheme] = useState(true)

  /**
   * On component mount
   */
  useEffect(() => {
    const useDarkTheme = parseInt(localStorage.getItem('dark-mode'))
    if (isNaN(useDarkTheme)) {
      setDarkTheme(true)
    } else if (useDarkTheme == 1) {
      setDarkTheme(true)
    } else if (useDarkTheme == 0) {
      setDarkTheme(false)
    }
  }, [])

  /**
   * On Dark theme change
   */
  useEffect(() => {
    if (darkTheme) {
      localStorage.setItem('dark-mode', '1')
      document.body.classList.add('dark-mode')
    } else {
      localStorage.setItem('dark-mode', '0')
      document.body.classList.remove('dark-mode')
    }
  }, [darkTheme])

  /**
   * Toggle Theme
   */
  function toggleTheme() {
    setDarkTheme(!darkTheme)
  }

  const goChromeStore = () => {
    // open new tab for user with url https://chrome.google.com/webstore/detail/gamer%20/cimcgcfafkpkoafjkilmkohelanagphj?hl=en&authuser=0
    window.open(
      'https://chrome.google.com/webstore/detail/gamer%20/cimcgcfafkpkoafjkilmkohelanagphj?hl=en&authuser=0',
      '_blank',
    )
  }

  return (
    <>
      <div id='gamerplus'>
        <div className='toggle-button-cover'>
          <div className='button-cover'>
            <div className='button r' id='button-3'>
              <input
                type='checkbox'
                onChange={toggleTheme}
                className='checkbox'
              />
              <div className='knobs'></div>
              <div className='layer'></div>
            </div>
          </div>
        </div>
        <div className='header'>
          <div className='main-heading'>
            <h1 className='themed'>Gamer+ Chrome Extension</h1>
          </div>
          <div className='main-teaser'>
            <div>
              {`Gamer+ is an extension that improves Gamer.no's statistics and
              tournament pages providing valuable information regarding map
              vetos, map winrates and round differentials, to ease the process
              of preparing against your opponents!`}
              <br />
              {`Made with great interest to give you the information you want to
              see as a coach or captain, or ease the pregame analysis when
              broadcasting the games to your audience as a caster or analyst.`}
            </div>
          </div>
        </div>

        <div className='footer'>
          <div className='center chromestore'>
            <button className='chromeButton' onClick={goChromeStore}>
              <img className='item-icon' src={icons.chrome} />
              <p style={{ marginLeft: '5px', fontSize: '16px' }}>
                Install extension for Chrome
              </p>
            </button>
          </div>
          <Footer darkTheme={darkTheme} />
        </div>
      </div>
    </>
  )
}

export default Application
