import { useState } from 'react'

interface UsePaginationProps {
  itemPerPage: number
  count: number
}
interface UsePaginationReturn {
  page: number
  totalPages: number
  firstItemIndex: number
  lastItemIndex: number
  nextPage: () => void
  prevPage: () => void
  setPage: (page: number) => void
}
type UsePagination = (arg: UsePaginationProps) => UsePaginationReturn

const usePagination: UsePagination = ({ itemPerPage, count }) => {
  const [page, setPage] = useState(1)
  const pageCount = Math.ceil(count / itemPerPage)
  const lastItemIndex = page * itemPerPage
  const firstItemIndex = lastItemIndex - itemPerPage
  const changePage = (direction: boolean) => {
    setPage((state) => {
      if (direction) {
        if (state === pageCount) {
          return state
        }
        return state + 1
      } else {
        if (state === 1) {
          return state
        }
        return state - 1
      }
    })
  }
  const setPageNum = (num: number) => {
    if (num > pageCount) {
      setPage(pageCount)
    } else if (num < 1) {
      setPage(1)
    } else {
      setPage(num)
    }
  }
  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setPageNum,
    firstItemIndex,
    lastItemIndex,
    page,
  }
}
export default usePagination
