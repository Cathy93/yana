var mongoose = require('mongoose')
require('./init')
var Schema = mongoose.Schema

const listedLanguagesSchema = new Schema({
  ListedLanguage: [ { courseLanguage: String, languageCode: String } ]
})

const ListedLanguages = mongoose.model('ListedLanguages', listedLanguagesSchema )

module.exports = ListedLanguages
