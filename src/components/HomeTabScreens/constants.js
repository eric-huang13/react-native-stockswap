export const EDIT_POST = 'EDIT_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const REPOST = 'REPOST';
export const COPY_LINK = 'COPY_LINK';
export const SHARE_POST = 'SHARE_POST';
export const TURN_ON_NOTIFICATIONS = 'TURN_ON_NOTIFICATIONS';
export const REPORT = 'REPORT';

export const myPostsOptions = [
  {
    label: 'Edit Post',
    value: EDIT_POST,
  },
  {label: 'Remove Post', value: REMOVE_POST},
];

export const otherPostsOptions = [
  {
    label: 'Repost',
    value: REPOST,
  },
  {label: 'Copy link', value: COPY_LINK},
  {label: 'Share to...', value: SHARE_POST},
  {label: 'Turn on notifications', value: TURN_ON_NOTIFICATIONS},
  {label: 'Report', value: REPORT},
];
