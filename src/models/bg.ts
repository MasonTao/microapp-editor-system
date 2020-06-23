import { Reducer } from 'umi';
export interface IBgModelState {
  data: any;
  an: string;
}

export interface IBgModelType { 
  namespace: 'bgStore';
  state: IBgModelState;
  reducers: {
    setData: Reducer,
    setAn: Reducer,
  };
}

const BgModel: IBgModelType = {
  namespace: 'bgStore',
  state: {
    data: {},
    an: 'none'
  },
  reducers: {
    setData(state, {payload}) {
      return {
        ...state,
        data: payload,
      }
    },
    setAn(state, {payload}) {
      return {
        ...state,
        an: payload,
      }
    }
  },
}
export default BgModel;