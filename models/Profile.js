const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

// Create schema
// Mongoose can create validations

const ProfileSchema = new Schema({
  user: {
    // Associate USER by id
    type: Schema.Types.ObjectId,
    // reference the collection it refers too
    ref: 'users'
  },
  handle: {
    // Handle provides SEO friendly URL
    type: String,
    // this part is required
    required: true,
    max: 40
  },
  company: {
    type: String,
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  skills: {
    // Reason why its in brackets because we want to put it in a array of strings.
    type: [String],
    required: true
  },
  bio: {
    type: String
  },
  githubusername: {
    type: String
  },
  // Objects inside an array
  experience: [{
    title: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    location: {
      type: String
    },
    from: {
      type: Date,
      required: true
    },
    to: {
      type: Date
    },
    current: {
      type: Boolean,
      default: false
    },
    description: {
      type: String
    }
  }],
  education: [{
    school: {
      type: String,
      required: true
    },
    degree: {
      type: String,
      required: true
    },
    fieldofstudy: {
      type: String
    },
    from: {
      type: Date,
      required: true
    },
    to: {
      type: Date
    },
    current: {
      type: Boolean,
      default: false
    },
    description: {
      type: String
    }
  }],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }

});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
