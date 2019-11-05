import skeleton from './skeleton/skeleton.vue';
import skeletonCircle from './skeleton/basic/skeleton-circle.vue';
import skeletonSquare from './skeleton/basic/skeleton-square.vue';
import skeletonRow from './skeleton/layout/skeleton-row.vue';
import skeletonColumn from './skeleton/layout/skeleton-column.vue';
import './skeleton.scss';

function install(Vue) {
  Vue.component(skeleton.name, skeleton);
  Vue.component(skeletonRow.name, skeletonRow);
  Vue.component(skeletonColumn.name, skeletonColumn);
  Vue.component(skeletonSquare.name, skeletonSquare);
  Vue.component(skeletonCircle.name, skeletonCircle);
}

const skeletonLoading = {
  install,
};
export default skeletonLoading;
