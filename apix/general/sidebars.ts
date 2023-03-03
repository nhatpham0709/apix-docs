module.exports = {
  general: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: [
        'introduction/what-is-apix',
        'introduction/legal',
      ],
    },
    {
      type: 'category',
      label: 'Deposit',
      link: {
        type: 'doc',
        id: 'deposit/basic'
      },
      collapsed: false,
      items: [
        'deposit/vnpay',
        'deposit/zalopay',
        'deposit/momo',
        'deposit/shopeepay',
      ],
    },
  ],
};
