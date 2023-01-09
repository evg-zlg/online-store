import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

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
  const [, setPageParams] = useSearchParams()
  const url = new URL(window.location.href)

  const [page, setPage] = useState(+(url.searchParams.get('page') || 1))
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
    nextPage: () => {
      const url = new URL(window.location.href)
      let newPage = page + 1
      if (newPage > pageCount) newPage = pageCount
      url.searchParams.set('page', newPage.toString())
      setPageParams(url.searchParams)
      changePage(true)
    },
    prevPage: () => {
      const url = new URL(window.location.href)
      let newPage = page - 1
      if (newPage < 1) newPage = 1
      url.searchParams.set('page', newPage.toString())
      setPageParams(url.searchParams)
      changePage(false)
    },
    setPage: setPageNum,
    firstItemIndex,
    lastItemIndex,
    page,
  }
}
export default usePagination
