import { Reducer } from 'umi';
export interface IHeightModelState {
  height: number;
  isMove: boolean;
}

export interface IHeightModelType { 
  namespace: 'heightStore';
  state: IHeightModelState;
  reducers: {
    setHeightValue: Reducer
  };
}

const HeightModel: IHeightModelType = {
  namespace: 'heightStore',
  state: {
    height: 504,
    isMove: false
  },
  reducers: {
    setHeightValue(state, {payload}) {
      return {
        ...state,
        height: payload,
      }
    }
  },
}
export default HeightModel;