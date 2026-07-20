type ExternalRedirectProps = {
  to: string
}

export const ExternalRedirect = ({ to }: ExternalRedirectProps) => {
  window.location.href = to
  return null
}
