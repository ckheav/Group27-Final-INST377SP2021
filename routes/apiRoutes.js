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
    const events = await db.WeatherPrimary.findAll();
    const reply = events.length > 0 ? { data: events } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/weather_p/:weather_primary_id', async (req, res) => {
  try {
    const event = await db.WeatherPrimary.findAll({
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
  const events = await db.WeatherPrimary.findAll();
  try {
    const newEvent = await db.WeatherPrimary.create({
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
    await db.WeatherPrimary.destroy({
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
    await db.WeatherPrimary.update(
      {
        weather_primary_id_id: req.body.weather_primary_id,
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
/// //// ~* Celestial Endpoints *~ ////
/// ///////////////////////////////////
router.get('/weather_p', async (req, res) => {
  try {
    const events = await db.WeatherPrimary.findAll();
    const reply = events.length > 0 ? { data: events } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/weather_p/:weather_primary_id', async (req, res) => {
  try {
    const event = await db.WeatherPrimary.findAll({
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
  const events = await db.WeatherPrimary.findAll();
  try {
    const newEvent = await db.WeatherPrimary.create({
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
    await db.WeatherPrimary.destroy({
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
    await db.WeatherPrimary.update(
      {
        weather_primary_id_id: req.body.weather_primary_id,
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
/// /////// Region  Endpoints /////////
/// ///////////////////////////////////

router.get('/regions', async (req, res) => {
  try {
    const regions = await db.Regions.findAll();
    res.json(regions);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/regions/:region_id', async (req, res) => {
  try {
    const regions = await db.Regions.findAll({
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

router.put('/regions', async (req, res) => {
  try {
    await db.Regions.update(
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
    const events = await db.SeaInfo.findAll();
    const reply = events.length > 0 ? { data: events } : { message: 'no results found' };
    res.json(reply);
  } catch (err) {
    console.error(err);
    res.error('Server error');
  }
});

router.get('/sea_info/:sea_info_id', async (req, res) => {
  try {
    const event = await db.SeaInfo.findAll({
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
  const events = await db.SeaInfo.findAll();
  try {
    const newEvent = await db.SeaInfo.create({
      sea_info_id: req.body.sea_info_id,
      full_tide_present: req.full_tide_present,
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
    await db.SeaInfo.destroy({
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
    await db.SeaInfo.update(
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