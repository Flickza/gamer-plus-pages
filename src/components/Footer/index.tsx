import React from 'react'
import SupportFeedback from '../SupportFeedback'
import './style.scss'

const Footer = ({ darkTheme }: { darkTheme: boolean }) => {
  const twitterIds: Array<{ screenName: string; id: string }> = [
    { screenName: '@FlickzaG', id: '1132522496408936449' },
    { screenName: '@SpeedeyG', id: '812420102826184705' },
  ]
  return (
    <footer className='themed'>
      <div className='main'>
        <div className='support'>
          {twitterIds.map((x) => (
            <SupportFeedback
              darkTheme={darkTheme}
              screenName={x.screenName}
              id={x.id}
              key={x.id}
            />
          ))}
        </div>
        <div className='text'>
          <p className='themed'>
            Gamer+ is developed independently, and is not officially endorsed by
            or affiliated with Gamer.no
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
