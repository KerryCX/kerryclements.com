export const downloadCV = async (): Promise<void> => {
  const response = await fetch('/cv.pdf')
  const blob = await response.blob()
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'kerry-clements-cv.pdf'
  a.click()
  URL.revokeObjectURL(url)
}
