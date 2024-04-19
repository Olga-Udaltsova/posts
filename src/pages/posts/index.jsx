import React, { useState, useEffect } from "react";
import { Posts } from "../../components/Posts";
import { Container } from "../../components/ui/Container";
import { Typo } from "../../components/ui/Typo";
import { useDispatch, useSelector } from "react-redux";
import { getPostsByParameters } from "../../redux/slices/postsSlice";
import { Loader } from "../../components/ui/Loading";
import { Sort } from "../../components/Sort";
import { Pages } from "../../components/Pagination";
import useDebounce from "../../hooks/useDebounce";

export const PostsPage = () => {
  const [params, setParams] = useState({
    order: "asc",
    search: "",
  });
  const [page, setPage] = useState(1);
  const { list, pages, loading } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  const currentPage = list?.length <= 100 ? 1 : page;
  const firstIndex = (currentPage - 1) * 10;
  const lastIndex = firstIndex + 10;
  const postsOnPage = list?.slice(firstIndex, lastIndex);

  const debouncedSearchTerm = useDebounce(params.search, 1000);
  const changeCurrentPage = (page) => {
    setPage(page);
  };
  const changeSort = (value) => {
    dispatch(getPostsByParameters({ ...params, order: value }));
    setParams({ ...params, order: value });
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(getPostsByParameters(params));
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (!list) {
      dispatch(getPostsByParameters(params));
    }
  }, [list, dispatch, params]);

  if (!list && loading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  return (
    <Container>
      <Typo>Публикации</Typo>
      <Sort changeSort={changeSort} params={params} setParams={setParams} />
      <Posts posts={postsOnPage} />
      <Pages
        numberOfPages={pages}
        changeCurrentPage={changeCurrentPage}
        currentPage={page}
      />
    </Container>
  );
};
