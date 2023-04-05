import React, { useEffect, useMemo } from "react";
import { useParams, useLocation } from "react-router-dom";

export default function QueryParams() {
  const { id, author } = useParams();
  const { search } = useLocation();

  const queryParams = useMemo(() => new URLSearchParams(search), [search]);

  useEffect(() => {
    console.log("render");

    return () => console.log("unmount");
  }, [queryParams]);

  return (
    <>
      <h1>
        Props {id} {author}
      </h1>
      <h2>Query Params - Token: {queryParams.get("token")}</h2>
    </>
  );
}
