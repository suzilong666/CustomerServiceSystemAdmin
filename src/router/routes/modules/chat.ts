import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
// import { t } from '/@/hooks/web/useI18n'

const chat: AppRouteModule = {
  path: '/chat',
  name: 'Chat',
  component: LAYOUT,
  redirect: '/chat/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: 'Chat',
    orderNo: 100000,
  },
  children: [
    {
      path: 'index',
      name: 'ChatPage',
      component: () => import('/@/views/chat/chat.vue'),
      meta: {
        title: 'Chat',
        icon: 'simple-icons:about-dot-me',
        // hideMenu: true,
      },
    },
  ],
}

export default chat