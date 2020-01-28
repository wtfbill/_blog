import Loadable from "react-loadable";
import React from "react";

//通用的过场组件
const MyLoadingComponent = ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // Handle the error state
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  } else {
    return null;
  }
};

//过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
export default (loader, loading = MyLoadingComponent) => {
  return Loadable({
    loader,
    loading
  });
};
