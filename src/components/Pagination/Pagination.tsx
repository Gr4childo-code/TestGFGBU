import styles from './Pagination.module.scss';
type Props = {
  postsPerPage: number;
  totalPosts: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
};
export const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }: Props) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className={styles.pagination}>
      {pageNumbers.map(number => (
        <li
          key={number}
          className={currentPage === number ? styles.activePage : styles.pageItem}
          onClick={() => paginate(number)}
        >
          {number}
        </li>
      ))}
    </ul>
  );
};
