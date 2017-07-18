require('dotenv').config()

const Course = require('../models/course')

Course.create([
  {
    courseName: "Colours",
    level: 1,
    courseImage: "url/aws/bucket",
    words: [
      {
        title: {
                  eng: 'Black',
                  s35: 'Kuyang'
                },
        audio: {
                  eng: 'http',
                  s35: 'http'
                },
        image: 'url/aws/image'
      },
      {
        title: {
                  eng: 'Yellow',
                  s35: 'Glalabil'
                },
        audio: {
                  eng: 'http',
                  s35: 'http'
                },
        image: 'url/aws/image'
      },
      {
        title: {
                  eng: 'Red',
                  s35: 'Nyarri-warren'
                },
        audio: {
                  eng: 'http',
                  s35: 'http'
                },
        image: 'url/aws/image'
      },
      {
        title: {
                  eng: 'Green',
                  s35: 'Gumang-Djarrang'
                },
        audio: {
                  eng: 'http',
                  s35: 'http'
                },
        image: 'url/aws/image'
      },
      {
        title: {
                  eng: 'White',
                  s35: 'Gtarndarding'
                },
        audio: {
                  eng: 'http',
                  s35: 'http'
                },
        image: 'url/aws/image'
      }

    ]
  },
  {
    courseName: "Animals",
    level: 2,
    courseImage: "http/aws/imagecourse2",
    words: [
      {
        title: {
                  eng: 'Wombat',
                  s35: 'Warin'
                },
        audio: {
                  eng: 'http',
                  s35: 'http'
                },
        image:'url/aws/image2'

      },
      {
        title: {
                  eng: 'Possum',
                  s35: 'Walert'
                },
        audio: {
                  eng: 'http',
                  s35: 'http'
                },
        image:'url/aws/image2'

      },
      {
        title: {
                  eng: 'Kangaroo',
                  s35: 'Kuyim'
                },
        audio: {
                  eng: 'http',
                  s35: 'http'
                },
        image:'url/aws/image2'

      },
      {
        title: {
                  eng: 'Dingo',
                  s35: 'Wirringan'
                },
        audio: {
                  eng: 'http',
                  s35: 'http'
                },
        image:'url/aws/image2'

      },
      {
        title: {
                  eng: 'Horse',
                  s35: 'Galgadarnuk'
                },
        audio: {
                  eng: 'http',
                  s35: 'http'
                },
        image:'url/aws/image2'

      },
      {
        title: {
                  eng: 'Snake',
                  s35: 'Kaan'
                },
        audio: {
                  eng: 'http',
                  s35: 'http'
                },
        image:'url/aws/image2'

      },
      {
        title: {
                  eng: 'Bird',
                  s35: 'Guyup-guyup'
                },
        audio: {
                  eng: 'http',
                  s35: 'http'
                },
        image:'url/aws/image2'

      },
      {
        title: {
                  eng: 'Swan',
                  s35: 'Gunawarra'
                },
        audio: {
                  eng: 'http',
                  s35: 'http'
                },
        image:'url/aws/image2'

      },
      {
        title: {
                  eng: 'Crow',
                  s35: 'Waang'
                },
        audio: {
                  eng: 'http',
                  s35: 'http'
                },
        image:'url/aws/image2'

      },
      {
        title: {
                  eng: 'Fish',
                  s35: 'Wirrup'
                },
        audio: {
                  eng: 'http',
                  s35: 'http'
                },
        image:'url/aws/image2'

      }
    ]
  },
  {
    courseName: "Family",
    level: 3,
    courseImage: "http/aws/imagecourse2",
    words: [
      {
        title: {
                  eng: 'Mother',
                  s35: 'Baba'
                },
        audio: {
                  eng: 'http',
                  s35: 'http'
                },
        image:'url/aws/image2'

      },
      {
        title: {
                  eng: 'Grandmother',
                  s35: 'gungundjalik'
                },
        audio: {
                  eng: 'http',
                  s35: 'http'
                },
        image:'url/aws/image2'

      },
      {
        title: {
                  eng: 'Father father',
                  s35: 'Ngaba'
                },
        audio: {
                  eng: 'http',
                  s35: 'http'
                },
        image:'url/aws/image2'

      },
      {
        title: {
                  eng: 'Aunt',
                  s35: 'Bambu'
                },
        audio: {
                  eng: 'http',
                  s35: 'http'
                },
        image:'url/aws/image2'

      },
      {
        title: {
                  eng: 'Father',
                  s35: 'Mamu'
                },
        audio: {
                  eng: 'http',
                  s35: 'http'
                },
        image:'url/aws/image2'

      },
      {
        title: {
                  eng: 'Mothers brother',
                  s35: 'Caganguk'
                },
        audio: {
                  eng: 'http',
                  s35: 'http'
                },
        image:'url/aws/image2'

      },
      {
        title: {
                  eng: 'Son',
                  s35: 'Mam'
                },
        audio: {
                  eng: 'http',
                  s35: 'http'
                },
        image:'url/aws/image2'

      },
      {
        title: {
                  eng: 'Younger Brother',
                  s35: 'Dhidhith'
                },
        audio: {
                  eng: 'http',
                  s35: 'http'
                },
        image:'url/aws/image2'

      },
      {
        title: {
                  eng: 'Older brother',
                  s35: 'Wurndulung'
                },
        audio: {
                  eng: 'http',
                  s35: 'http'
                },
        image:'url/aws/image2'

      },
      {
        title: {
                  eng: 'Sister',
                  s35: 'Liwurruk'
                },
        audio: {
                  eng: 'http',
                  s35: 'http'
                },
        image:'url/aws/image2'

      }
    ]
  }
])
