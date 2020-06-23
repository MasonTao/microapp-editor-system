import { Reducer } from 'umi';
export interface IConfigurationModelState {
  show: boolean;
  nav: any,
  content: any,
  list: any[];
}

export interface IConfigurationModelType { 
  namespace: 'configurationStore';
  state: IConfigurationModelState;
  reducers: {
    setList: Reducer<IConfigurationModelState>
  };
}

const ConfigurationModel: IConfigurationModelType = {
  namespace: 'configurationStore',
  state: {
    show: false,
    nav: {},
    content: {},
    list: []
  },
  reducers: {
    setList(state, action) {
      return {
        ...state,
        ...action.payload,
      }
    }
  },
}
export default ConfigurationModel;
