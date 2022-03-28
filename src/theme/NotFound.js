import React from 'react';
import NotFound from '@theme-original/NotFound';
import redirects from '@site/static/redirects.json'

export default function NotFoundWrapper(props) {
  // Get the pathname and remove the leading /
  // E.g. "/discord" -> "discord"
  const pathname = window.location.pathname.substring(1);

  // If the path name is in the list of redirects,
  // redirect to that location and return an empty component
  if (pathname in redirects) {
    window.location.replace(redirects[pathname])
    return <></>
  }

  // Otherwise, return the origin 404 page
  return <NotFound {...props} />
}
