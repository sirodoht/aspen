/**
 * @file Index view controller.
 */

const indexCtrl = module.exports = {};

indexCtrl.getIndex = async function getIndex(ctx) {
  await ctx.render('index', {
    title: 'Aspen',
  });
};
