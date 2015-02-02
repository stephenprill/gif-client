import DS from 'ember-data';

export default DS.Model.extend({
    gifUrl: DS.attr('string'),
    tag: DS.attr('string')
  });

 //  Gif.reopenClass({
 //   FIXTURES: [
 //     {id: 1, gifUrl: 'http://s3-ec.buzzfed.com/static/2014-07/18/8/enhanced/webdr08/anigif_enhanced-buzz-8915-1405685252-4.gif', tag: 'Olympics'},
 //     {id: 2, gifUrl: 'http://s3-ec.buzzfed.com/static/2014-07/18/8/enhanced/webdr02/anigif_enhanced-buzz-21069-1405685596-7.gif', tag: 'Coyote'}
 //   ]
 // });
 //
 // export default Gif;
