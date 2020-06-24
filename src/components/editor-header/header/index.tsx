import React, { useEffect } from 'react';
import { IPageModelState, Loading, connect, Dispatch } from 'umi';
import { FileTextOutlined } from '@ant-design/icons';

interface INavProps {
  name: string;
  flag: string;
  icon: React.ReactNode;
}

interface IEditorHeaderProps {
  pageStore: IPageModelState;
  loading: boolean;
  dispatch: Dispatch;
}
const Nav: Array<INavProps> = [
  {
    name: '文字',
    flag: 'text',
    icon: <FileTextOutlined className="cmt-header__nav-icon"/>,
  },
];

const EditorHeader: React.FC<IEditorHeaderProps> = ({
  dispatch,
  pageStore,
}) => {
  return (
    <div className="cmt-header">
      <a href="#" className="cmt-header__logo">
        <img
          src="https://cpc-static.1sapp.com/static/common/70fb1e29-3128-4dfa-b852-9ec10c9c5d94_326_104.png"
          alt=""
        />
      </a>
      <ul className="cmt-header__nav">
      {
        Nav.map((item,index) => {
          return <li className="cmt-header__nav-item">
            {item.icon}
            {item.name}
          </li>
        })
      }
      </ul>
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
)(EditorHeader);
