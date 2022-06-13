import styles from "./Pagination.module.scss";
import Link from "next/link";
import Arrow from "../../public/images/blog/arrow.svg";
import { useEffect, useState } from "react";
import { PaginationI } from "../../interfaces/Interfaces";
import { useRouter } from "next/router";

export default function Pagination({ totalPages, path }: PaginationI) {
  const router = useRouter();
  const currentPage = router.query.page;

  const [page, setPage] = useState<number>(1);

  const nextPaginationHandler = () => {
    setPage((page) => page + 1);
  };
  const prevPaginationHandler = () => {
    setPage((page) => page - 1);
  };

  useEffect(() => {
    let tempPage;

    if (typeof currentPage === "object") {
      tempPage = currentPage[0];
    } else {
      tempPage = currentPage;
    }
    setPage(tempPage != null ? parseInt(tempPage) : 1);
  }, [currentPage]);

  return (
    <div className={styles.buttons}>
      {page > 1 && (
        <Link
          href={{
            pathname: path,
            query: page === 2 ? {} : { page: page - 1 },
          }}
        >
          <a onClick={prevPaginationHandler} className={styles.prevBtn}>
            <Arrow />
            Prev
          </a>
        </Link>
      )}
      {page < totalPages && (
        <Link
          href={{
            pathname: path,
            query: { page: page + 1 },
          }}
        >
          <a onClick={nextPaginationHandler} className={styles.nextBtn}>
            Next
            <Arrow />
          </a>
        </Link>
      )}
    </div>
  );
}
