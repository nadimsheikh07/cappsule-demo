/* eslint-disable react-hooks/exhaustive-deps */
import { PHARMACY_ID } from "@/config-global";
import { HomePageStyle } from "@/styles/homepage";
import axiosInstance from "@/utils/axios";
import { Divider, Stack } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";

const CappsuleListSkeleton = dynamic(
  () => import("@/components/skeleton/cappsuleListSkeleton"),
  {
    ssr: false,
  }
);

const Heading = dynamic(() => import("./heading"), {
  ssr: false,
});

const SearchBox = dynamic(() => import("@/components/search"), {
  ssr: false,
});

const CappsuleList = dynamic(() => import("./cappsuleList"), {
  ssr: false,
});

const NotFound = dynamic(() => import("@/components/notFound"), {
  ssr: false,
});

const Homepage = () => {
  const [search, setSearch] = React.useState("");
  const [cappsuleData, setCappsuleData] = React.useState({
    data: null,
    loading: false,
  });

  const getCappsuleData = async (value = "") => {
    setCappsuleData({ ...cappsuleData, loading: true });
    await axiosInstance
      .get(`api/v1/new_search?q=${value}&pharmacyIds=${PHARMACY_ID}`)
      .then((response) => {
        if (response.status == 200) {
          setCappsuleData({
            loading: false,
            data: response?.data?.data,
          });
        }
      })
      .catch((error) => {
        setCappsuleData({
          ...cappsuleData,
          loading: false,
        });
        console.log("cappsule Data Error", error);
      });
  };

  const handleSearch = React.useCallback(
    (e) => {
      setSearch(e.target.value.trimStart());
    },
    [search]
  );

  const handleSubmit = React.useCallback(
    (value) => {
      getCappsuleData(value);
    },
    [search]
  );

  const handleReset = React.useCallback(() => {
    setSearch("");
    handleSubmit("");
  }, [search]);

  return (
    <HomePageStyle>
      <Heading />
      <SearchBox
        handleChange={handleSearch}
        handleReset={handleReset}
        value={search}
        handleSubmit={handleSubmit}
      />
      <Divider
        sx={{ my: 5, borderColor: (theme) => theme.palette.grey[1200] }}
      />
      <Stack spacing={4}>
        {cappsuleData.loading ? (
          <CappsuleListSkeleton count={2} />
        ) : !cappsuleData.loading &&
          cappsuleData?.data?.saltSuggestions?.length > 0 ? (
          cappsuleData?.data?.saltSuggestions?.map(
            (parentItem, parentIndex) => (
              <CappsuleList
                key={`CappsuleList-${parentItem?.id}${parentIndex}`}
                data={parentItem}
              />
            )
          )
        ) : (
          <NotFound />
        )}
      </Stack>
    </HomePageStyle>
  );
};

export default Homepage;
