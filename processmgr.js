'use strict';

module.exports = {
    newProcess: require('child_process').fork('./childtest.js'),
    cp1: require('child_process').fork('./child1.js'),
    cp2: require('child_process').fork('./child2.js'),
    cp3: require('child_process').fork('./child3.js')
}
