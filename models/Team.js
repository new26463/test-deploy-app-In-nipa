var keystone = require('keystone');

/**
 * Team Model
 * ==================
 */

var Team = new keystone.List('Team', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Team.add({
    name: { type: String, required: true },
    position: { type: String },
    discription: { type: String }
});

Team.register();
