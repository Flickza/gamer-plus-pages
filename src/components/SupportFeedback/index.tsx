import React from 'react'
import { icons } from '../Icons'
import './style.scss'

const SupportFeedback = ({
  screenName,
  id,
  darkTheme,
}: {
  screenName: string
  id: string
  darkTheme: boolean
}): JSX.Element => {
  return (
    <div className='link-2' key={id}>
      <a
        href={`https://twitter.com/messages/compose?recipient_id=${id}`}
        data-screen-name={`${screenName}`}
        target={'_blank'}
        rel='noreferrer'
      >
        <span className='thin'>Support</span>
        <span className='thin'>&</span>
        <span className='thick'>
          Feedback
          <img
            className='twitter-icon'
            src={darkTheme ? icons.twitterLight : icons.twitterDark}
            width={16}
            alt='twitter'
          />
        </span>
      </a>
      <p>Twitter {screenName}</p>
    </div>
  )
}

export default SupportFeedback
