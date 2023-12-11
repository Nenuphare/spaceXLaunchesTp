const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let launchSchema = new Schema ({
    flight_number: {
        type: Number,
        required: true,
      },
      mission_name: {
        type: String,
        required: true,
      },
      launch_year: {
        type: String,
        required: true,
      },
      launch_date_unix: {
        type: Number,
        required: true,
      },
      launch_date_utc: {
        type: Date,
        required: true,
      },
      launch_date_local: {
        type: Date,
        required: true,
      },
      is_tentative: {
        type: Boolean,
        required: true,
      },
      tentative_max_precision: {
        type: String,
        required: true,
      },
      tbd: {
        type: Boolean,
        required: true,
      },
      launch_window: {
        type: Number,
        required: true,
      },
      rocket: {
        rocket_id: {
          type: String,
          required: true,
        },
        rocket_name: {
          type: String,
          required: true,
        },
        rocket_type: {
          type: String,
          required: true,
        },
        // Add other rocket properties as needed
      },
      // Add other fields as needed
      launch_success: {
        type: Boolean,
        required: true,
      },
      launch_failure_details: {
        time: {
          type: Number,
        },
        altitude: {
          type: Number,
        },
        reason: {
          type: String,
        },
      },
      links: {
        mission_patch: {
          type: String,
        },
        mission_patch_small: {
          type: String,
        },
        // Add other link properties as needed
      },
      details: {
        type: String,
      },
      static_fire_date_utc: {
        type: Date,
      },
      static_fire_date_unix: {
        type: Number,
      },
      timeline: {
        webcast_liftoff: {
          type: Number,
        },
        // Add other timeline properties as needed
      },
    });
    
    // Create the Launch model
    const Launch = mongoose.model('Launch', launchSchema);
    
    module.exports = Launch;