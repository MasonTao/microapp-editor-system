import React, { useEffect } from 'react';

import { IPageModelState, ConnectProps, Loading, connect } from 'umi';

interface PageProps extends ConnectProps {
  pageStore: IPageModelState;
  loading: boolean;
}

const IndexPage: React.FC<PageProps> = ({ pageStore, dispatch }) => {
  useEffect(() => {
    const { pageList } = pageStore;
    const { bg } = pageList[0];

    if (!dispatch) return;
    dispatch({ type: 'bgStore/setData', payload: bg });
  }, []);
  return <div>This is editor system! </div>;
};

export default connect(
  ({
    pageStore,
    loading,
  }: {
    pageStore: IPageModelState;
    loading: Loading;
  }) => ({
    pageStore,
    loading: loading.models.index,
  }),
)(IndexPage);
