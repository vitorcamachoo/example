import { FC } from 'react'
import ReactPaginate, { ReactPaginateProps } from 'react-paginate'

import classes from './Pagination.module.scss'

export interface PaginationProps
  extends Omit<ReactPaginateProps, 'pageCount' | 'pageRangeDisplayed' | 'marginPagesDisplayed' | 'onPageChange'> {
  initialPage?: number
  pageCount?: number
  marginPagesDisplayed?: number
  pageRangeDisplayed?: number
  onPageChange: (page: number) => void
}

const Pagination: FC<PaginationProps> = ({
  initialPage = 1,
  pageCount = 10,
  marginPagesDisplayed = 1,
  pageRangeDisplayed = 3,
  onPageChange,
  ...props
}) => {
  return (
    <ReactPaginate
      initialPage={initialPage}
      pageCount={pageCount}
      marginPagesDisplayed={marginPagesDisplayed}
      pageRangeDisplayed={pageRangeDisplayed}
      containerClassName={classes.pagination}
      activeClassName={classes.active}
      nextLabel=">"
      previousLabel="<"
      onPageChange={(item) => onPageChange(item.selected)}
      {...props}
    />
  )
}

export default Pagination
