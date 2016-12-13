import reducers from './reducers/index';

export default function ($ngReduxProvider) {
  $ngReduxProvider.createStoreWith(reducers);
}