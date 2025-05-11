import { useAppStore } from '@/store/index.js';
import { storeToRefs } from 'pinia';
import router from '@/router';

export function createListRouteConfig({
  name,
  path,
  header,
  storeGetter,
  fetchAction,
  editRoute,
  formRoute,
  allowEdit = true,
  allowDelete = true,
  allowAdd = true,
  customEdit = null,
  customAdd = null,
  customDelete = null,
  customActions = [],
}) {
  return {
    path,
    name,
    component: () => import('@/components/UniqueList.vue'),
    props: () => {
      const appStore = useAppStore();
      const { [storeGetter]: list } = storeToRefs(appStore);
      return {
        header,
        rawData: list,
        showEdit: allowEdit,
        showDelete: allowDelete,
        showAdd: allowAdd,
        customActions,
        editAction:
          customEdit ||
          ((item) => {
            appStore.setEditing(item);
            router.push(editRoute);
          }),
        addAction:
          customAdd ||
          (() => {
            appStore.stopEditing();
            router.push(formRoute);
          }),
        deleteAction:
          customDelete ||
          ((id) => {
            appStore[`delete${capitalize(storeGetter.slice(0, -1))}`](id);
          }),
      };
    },
    beforeEnter: async (to, from, next) => {
      const appStore = useAppStore();
      await appStore[fetchAction]();
      next();
    },
  };
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
