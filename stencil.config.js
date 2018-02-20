exports.config = {
  namespace: 'mycomponent',
  generateDistribution: true,
  bundles: [
    { components: ['slick-button', 'slick-multiselect', 'slick-multiselect-option'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
