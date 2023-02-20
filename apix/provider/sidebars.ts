module.exports = {
  provider: [
    'introduction',
    {
      type: 'category',
      label: 'Provider',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'API',
          collapsed: false,
          items: [
            'api/create',
            'api/manage',
            'api/dashboard',
          ],
        },
        {
          type: 'category',
          label: 'Dataset',
          collapsed: false,
          items: [
            'dataset/create',
            'dataset/manage',
            'dataset/dashboard',
          ],
        },
        {
          type: 'category',
          label: 'Finance',
          collapsed: false,
          items: [
            'finance/balance',
            'finance/bank-account',
            'finance/settings',
          ],
        },
      ],
    },
  ],
};
