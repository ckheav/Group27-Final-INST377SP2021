/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Weather Vane API!');
});

/// ///////////////////////////////////
/// /////// Weather  Endpoints ////////
/// ///////////////////////////////////
router.get('/weather_p', async (req, res) => {
  try {
    const events = await db.weather_primary.findAll();
    const reply = events.length > 0 ? { data: events } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/weather_p/:weather_primary_id', async (req, res) => {
  try {
    const event = await db.weather_primary.findAll({
      where: {
        weather_primary_id: req.params.weather_primary_id
      }
    });

    res.json(event);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/weather_p', async (req, res) => {
  try {
    const newEvent = await db.weather_primary.create({
      weather_primary_id_id: req.body.weather_primary_id,
      temperature: req.body.temperature,
      humidity: req.body.humidity,
      wind_speed: req.body.wind_speed,
      date: req.body.date,
      weather_secondary_id: req.body.weather_secondary_id,
      region_id: req.body.region_id,
      season_id: req.body.season_id
    });
    res.json(newEvent);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/weather_p/:weather_primary_id', async (req, res) => {
  try {
    await db.weather_primary.destroy({
      where: {
        weather_primary_id: req.params.weather_primary_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/weather_p', async (req, res) => {
  try {
    await db.weather_primary.update(
      {
        temperature: req.body.temperature,
        humidity: req.body.humidity,
        wind_speed: req.body.wind_speed,
        date: req.body.date,
        weather_secondary_id: req.body.weather_secondary_id,
        region_id: req.body.region_id,
        season_id: req.body.season_id
      },
      {
        where: {
          weather_primary_id: req.body.weather_primary_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// ///////////////////////////////////
/// //// ~*Weather Secondary Endpoints *~ ////
/// ///////////////////////////////////
router.get('/weather_secondary', async (req, res) => {
  try {
    const events = await db.weather_secondary.findAll();
    const reply = events.length > 0 ? { data: events } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/weather_secondary/:weather_secondary_id', async (req, res) => {
  try {
    const event = await db.weather_secondary.findAll({
      where: {
        weather_secondary_id: req.params.weather_secondary_id
      }
    });

    res.json(event);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/weather_secondary', async (req, res) => {
  try {
    const newEvent = await db.weather_secondary.create({
      weather_secondary_id: req.body.weather_secondary_id,
      pressure_Hg: req.body.pressure_Hg,
      precipitation_in: req.body.precipitation_in,
      dew_point: req.body.dew_point
    });
    res.json(newEvent);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/weather_secondary/:weather_secondary', async (req, res) => {
  try {
    await db.weather_secondary.destroy({
      where: {
        weather_secondary_id: req.params.weather_secondary_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/weather_secondary', async (req, res) => {
  try {
    await db.weather_secondary.update(
      {
        weather_secondary_id: req.body.weather_secondary_id,
        pressure_Hg: req.body.pressure_Hg,
        precipitation_in: req.body.precipitation_in,
        dew_point: req.body.dew_point,
      },
      {
        where: {
          weather_secondary_id: req.body.weather_secondary_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// ///////////////////////////////////
/// //// ~* Celestial Endpoints *~ ////
/// ///////////////////////////////////
router.get('/celestial_phases', async (req, res) => {
  try {
    const events = await db.celestial_phases.findAll();
    const reply = events.length > 0 ? { data: events } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/celestial_phases/:celstial_id', async (req, res) => {
  try {
    const event = await db.celestial_phases.findAll({
      where: {
        celstial_id: req.params.celstial_id
      }
    });

    res.json(event);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/celestial_phases', async (req, res) => {
  try {
    const newEvent = await db.celestial_phases.create({
      celestial_id: req.body.celestial_id, 
      moon_type: req.body.moon_type,
      moon_rise_time: req.body.moon_rise_time,
      moon_fall_time: req.body.moon_fall_time,
      sun_rise_time: req.body.sun_rise_time,
      sun_fall_time: req.body.sun_fall_time,
      sea_info_id: req.body.sea_info_id,
    });
    res.json(newEvent);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/celestial_phases/:celstial_id', async (req, res) => {
  try {
    await db.celestial_phases.destroy({
      where: {
        celstial_id: req.params.celstial_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/celestial_phases', async (req, res) => {
  try {
    await db.celestial_phases.update(
      {
        moon_type: req.body.moon_type,
        moon_rise_time: req.body.moon_rise_time,
        moon_fall_time: req.body.moon_fall_time,
        sun_rise_time: req.body.sun_rise_time,
        sun_fall_time: req.body.sun_fall_time,
        sea_info_id: req.body.sea_info_id,
      },
      {
        where: {
          celstial_id: req.body.celstial_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// ///////////////////////////////////
/// /////// Region  Endpoints /////////
/// ///////////////////////////////////

router.get('/regions', async (req, res) => {
  try {
    const regions = await db.regions.findAll();
    res.json(regions);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/regions/:region_id', async (req, res) => {
  try {
    const regions = await db.regions.findAll({
      where: {
        region_id: req.params.region_id
      }
    });
    res.json(regions);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/regions', async (req, res) => {
  const regions = await db.regions.findAll();
  const currentID = (await regions.length) + 1;
  try {
    const newEvent = await db.regions.create({
      region_id: currentID,
      city: req.body.city,
      state: req.body.state,
      zip_code: req.body.zip_code
    });
    res.json(newEvent);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/regions/:region_id', async (req, res) => {
  try {
    await db.regions.destroy({
      where: {
        region_id: req.params.region_id,
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/regions', async (req, res) => {
  try {
    await db.regions.update(
      {
        city: req.body.city,
        state: req.body.state,
        zip_code: req.body.zip_code
      },
      {
        where: {
          region_id: req.body.region_id
        }
      }
    );
    res.send('Region Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

/// ///////////////////////////////////
/// /////// SeaInfo  Endpoints ////////
/// ///////////////////////////////////
router.get('/sea_info', async (req, res) => {
  try {
    const events = await db.sea_information.findAll();
    const reply = events.length > 0 ? { data: events } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/sea_info/:sea_info_id', async (req, res) => {
  try {
    const event = await db.sea_information.findAll({
      where: {
        sea_info_id: req.params.sea_info_id,
      }
    });

    res.json(event);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.post('/sea_info', async (req, res) => {
  try {
    const newEvent = await db.sea_information.create({
      sea_info_id: req.body.sea_info_id,
      full_tide_present: req.body.full_tide_present,
      high_tide_rise_height: req.body.high_tide_rise_height,
      high_tide_set_height: req.body.high_tide_set_height,
      low_tide_rise_height: req.body.low_tide_rise_height,
      weather_secondary_id: req.body.weather_secondary_id,
      low_tide_set_height: req.body.low_tide_set_height,
    });
    res.json(newEvent);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.delete('/sea_info/:sea_info_id', async (req, res) => {
  try {
    await db.sea_information.destroy({
      where: {
        sea_info_id: req.params.sea_info_id,
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.put('/sea_info', async (req, res) => {
  try {
    await db.sea_information.update(
      {
        full_tide_present: req.full_tide_present,
        high_tide_rise_height: req.body.high_tide_rise_height,
        high_tide_set_height: req.body.high_tide_set_height,
        low_tide_rise_height: req.body.low_tide_rise_height,
        weather_secondary_id: req.body.weather_secondary_id,
        low_tide_set_height: req.body.low_tide_set_height,
      },
      {
        where: {
          sea_info_id: req.body.sea_info_id,
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

export default router;
