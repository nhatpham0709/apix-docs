module.exports = {
  consumer: [
    'introduction',
    {
      type: 'category',
      label: 'Marketplace',
      link: {
        type: 'doc',
        id: 'api/marketplace/general',
      },
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'API',
          collapsed: false,

          items: ['api/marketplace/general'],
        },
        {
          type: 'category',
          label: 'Dataset',
          collapsed: false,
          items: ['dataset/marketplace/general'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Account Management',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'API',
          collapsed: false,
          items: ['api/dashboard/general'],
        },
        {
          type: 'category',
          label: 'Dataset',
          collapsed: false,
          items: ['dataset/dashboard/general'],
        },
        'balance',
        'transaction-history',
      ],
    },
  ],
};
