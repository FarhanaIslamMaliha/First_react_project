import React, {Children} from 'react'

const Container = ({children, className}) => {
  return (
    <div>
      <div className={`${className} container w-[1940px] mx-auto`}>
          {children}
      </div>
    </div>
  )
}

export default Container
