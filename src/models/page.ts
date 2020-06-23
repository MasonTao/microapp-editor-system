import { Effect, Reducer, Subscription } from 'umi';

const bgConfig = {
  name: '背景设置',
  backgroundColor: 'rgb(255, 255, 255)',
  backgroundImageType: 'picture',
  backgroundImagePicture: '',
  backgroundImageTexture: '',
  opacity: {
    label: '透明度',
    defaultValue: 0,
    min: 0,
    max: 100,
    unit: '%'
  }
}
const initPage = {
  active: true,
  list: [],
  height: 504,
  bg: JSON.parse(JSON.stringify(bgConfig)),
  pageAn: 'none'
}

export interface IBgConfigState {
  name: string;
  backgroundColor: string;
  backgroundImageType: string;
  backgroundImagePicture: string;
  backgroundImageTexture: string;
  opacity: {
    label: string,
    defaultValue: number,
    min: number,
    max: number,
    unit: string;
  }
}
export interface IPageModelItemState {
  active: boolean;
  list: any[];
  height: number;
  bg: IBgConfigState;
  pageAn: string;
}

export interface IPageModelState {
  pageList: Array<IPageModelItemState>;
}

export interface PageModelType {
  namespace: 'pageStore';
  state: IPageModelState;
  reducers: {
    save: Reducer<IPageModelState>;
  };
  subscriptions: { setup: Subscription };
}

const PageModel: PageModelType = {
  namespace: 'pageStore',
  state: {
    pageList: [initPage]
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          // dispatch({
          //   type: 'save',
          //   payload: {
          //     name: '123'
          //   }
          // })
        }
      });
    }
  }
};
export default PageModel;