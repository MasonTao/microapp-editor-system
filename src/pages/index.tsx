import React, { useEffect } from 'react';
import { IPageModelState, ConnectProps, Loading, connect } from 'umi';
import { EditorHeader } from '~components/editor-header';

interface PageProps extends ConnectProps {
  pageStore: IPageModelState;
  loading: boolean;
}

const IndexPage: React.FC<PageProps> = ({ pageStore,loading, dispatch }) => {
  useEffect(() => {
    const { pageList } = pageStore;
    const { bg } = pageList[0];

    if (!dispatch) return;
    dispatch({ type: 'bgStore/setData', payload: bg });
  }, []);
  return (
    <div id="main">
      <EditorHeader />
    </div>
  );
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
