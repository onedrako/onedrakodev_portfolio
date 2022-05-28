import { Dispatch, SetStateAction } from 'react'
import { ActualPagesProjectsSelector } from '@customTypes/types'

export const defineMaxNumberOfPages = (numberOfItems:number, elementsForPage:number):number => {
  return Math.ceil(numberOfItems / elementsForPage)
}

export const handleNavigateNumberOfPages = (
  pageToGo:number,
  numberOfItems:number,
  elementsForPage:number,
  actualPages: ActualPagesProjectsSelector,
  actualSelectedItem: string,
  setActualPages: Dispatch<SetStateAction<ActualPagesProjectsSelector>>
): void => {
  if (isNaN(pageToGo) || pageToGo === 0) {
    return
  }
  const maxPages = defineMaxNumberOfPages(numberOfItems, elementsForPage)

  if (pageToGo < 1) {
    pageToGo = 1
  } else if (pageToGo > maxPages) {
    pageToGo = maxPages
  }
  setActualPages({
    ...actualPages,
    [actualSelectedItem]: pageToGo
  })
}
