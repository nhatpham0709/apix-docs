module.exports = {
  provider: [
    'introduction',
    {
      type: 'category',
      label: 'Product Listing',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'API',
          collapsed: false,
          items: [
            'product_listing/api/basic_info',
            'product_listing/api/base_url',
            'product_listing/api/endpoint',
            'product_listing/api/documentation',
            'product_listing/api/pricing',
            'product_listing/api/public',
          ],
        },

        {
          type: 'category',
          label: 'Dataset',
          collapsed: false,
          items: [
            'product_listing/dataset/create_dataset'
          ],
        },
      ],
    },
  ],
};
