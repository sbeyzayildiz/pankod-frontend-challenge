import React, { useState, useDeferredValue, Suspense } from "react";
import { useParams } from "react-router-dom";
import styles from "./style.module.css";
import { useQuery } from "react-query";
import { fetchStreaming } from "../../../api";
import Card from "../../../components/Card";
import { Input, Button, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

function Stream() {
  const { stream_type } = useParams();

  const [searchKey, setSearchKey] = useState("");

  const deferredQuery = useDeferredValue(searchKey);

  const [sort, setSort] = useState({
    sortType: "asc",
    sortTitle: "releaseYear",
  });

  const handleClickSort = (value) => {
    setSort(value);
  };

  const items = [
    {
      key: "1",
      label: (
        <span
          onClick={() =>
            handleClickSort({ sortTitle: "releaseYear", sortType: "desc" })
          }
        >
          Sort by year in descending order
        </span>
      ),
    },
    {
      key: "2",
      label: (
        <span
          onClick={() =>
            handleClickSort({ sortTitle: "releaseYear", sortType: "asc" })
          }
        >
          Sort by year in ascending order
        </span>
      ),
    },
    {
      key: "3",
      label: (
        <span
          onClick={() =>
            handleClickSort({ sortTitle: "title", sortType: "desc" })
          }
        >
          Sort by title in descending order
        </span>
      ),
    },
    {
      key: "4",
      label: (
        <span
          onClick={() =>
            handleClickSort({ sortTitle: "title", sortType: "asc" })
          }
        >
          Sort by title in ascending order
        </span>
      ),
    },
  ];

  const programType = stream_type === "movies" ? "movie" : "series"

  const { data, error, isLoading, isError } = useQuery(
    [deferredQuery, programType, sort.sortType, sort.sortTitle],
    fetchStreaming
  );

  return (
    <div className={styles.container}>
      <div className={styles.container__title}>Popular {stream_type} </div>
      <div className={styles.container__search}>
        <Input
          className={styles["container__search--input"]}
          value={searchKey}
          onInput={(e) => setSearchKey(e.target.value)}
          placeholder="Search..."
        />
        <Dropdown
          menu={{
            items,
          }}
        >
          <Button className={styles["container__search--sortButton"]}>
            Sort
            <DownOutlined />
          </Button>
        </Dropdown>
      </div>
      <div className={styles.container__content}>
        {isLoading && <p>Loading...</p>}
        {isError && <p>{error.message}</p>}
        <Suspense fallback={<p>Loading...</p>}>
          {data && data.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              imageUrl={item.images["Poster Art"].url}
            ></Card>
          ))}
        </Suspense>
      </div>
    </div>
  );
}

export default Stream;
