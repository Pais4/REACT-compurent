import React from 'react'
import ContentLoader from 'react-content-loader'

const ContentLoader = (props) => (
    <ContentLoader 
        speed={2}
        width={476}
        height={124}
        viewBox="0 0 476 124"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
  >
    <circle cx="55" cy="70" r="46" /> 
    <rect x="129" y="48" rx="0" ry="0" width="214" height="21" /> 
    <rect x="131" y="79" rx="0" ry="0" width="212" height="21" />
  </ContentLoader>
)

export default ContentLoader
